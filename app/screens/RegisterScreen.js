import React, { useContext, useState } from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton, ErrorMessage, } from "../components/forms";
import authApi from '../api/auth'
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";


const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).matches().label("Password"),
});

function RegisterScreen() {
  const authContext = useContext(AuthContext)

  const [registerFailed, setRegisterFailed] = useState(false)


  let error = ""

  const handleSubmit = async (userInfo) => {
    const result = await authApi.register(userInfo)
    if(!result.ok) {
      error = result.data
      return setRegisterFailed(true)}
    setRegisterFailed(false)
    const user = result.data
    authContext.setUser(user)
    // authStorage.storeToken(user)
   }

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/p_logo.png")} />
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
         <ErrorMessage error={error} visible={registerFailed}/>

        <AppFormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          secureTextEntry={false}
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry={true}
          textContentType="password"
        />
        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  )
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
});

export default RegisterScreen;
