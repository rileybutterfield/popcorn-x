import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";

import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../components/forms";

import colors from "../config/colors";
import AppText from "../components/AppText";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
});

function AddFriendScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/p_logo.png")} />
      <AppText style={styles.text}>Enter your friend's email below to get poppin'.</AppText>
      <AppForm
        initialValues={{ email: ""}}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
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
    fontWeight: "bold",
    alignSelf: "center",
    margin: 15
  }
});

export default AddFriendScreen;
