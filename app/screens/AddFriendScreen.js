import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import addFriendApi from '../api/addFriend'

import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../components/forms";

import colors from "../config/colors";
import AppText from "../components/AppText";
import AuthContext from "../auth/context";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
});

function AddFriendScreen(props) {
  const authContext = useContext(AuthContext)
  const user = authContext.user
  const [addFriendFailed, setAddFriendFailed] = useState()
  const [addedFriend, setAddedFriend] = useState()

  let error

  const handleSubmit = async(info) => {
    const requestInfo = {...info, userId: user.id}
    const result = await addFriendApi.addNewFriend(requestInfo)
    if(!result.ok) {
      console.log(result.data)
      return setAddFriendFailed(true)}
    setAddFriendFailed(false)
    setAddedFriend(result.data)
  }

  if(addFriendFailed === false){
    return (
    <Screen style={styles.container}>
    <AppText style={styles.text}>Friend added! Start swiping to build a movie list with your pal!</AppText>
    </Screen>)
  }

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/p_logo.png")} />
      <AppText style={styles.text}>Enter your friend's email below to get poppin'.</AppText>
      <AppForm
        initialValues={{ email: ""}}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
         <ErrorMessage error={"Add friend failed. Check email and try again."} visible={addFriendFailed}/>
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Your Friend's Email"
          textContentType="emailAddress"
        />
        <SubmitButton
        title="Add Friend"
        />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  text: {
    color: colors.darkBlue,
    textAlign: "center",
    fontWeight: "bold",
    alignSelf: "center",
    margin: 15
  }
});

export default AddFriendScreen;
