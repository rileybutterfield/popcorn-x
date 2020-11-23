import React, { useContext, useState } from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import authApi from '../api/auth'

import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../components/forms";

import colors from "../config/colors";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).matches().label("Password"),
});

let error = ""

function LoginScreen(props) {
  const authContext = useContext(AuthContext)

  const [loginFailed, setLoginFailed] = useState(false)

  const handleSubmit = async ({email, password}) => {
   const result = await authApi.login(email, password)
   if(!result.ok) {
     error = result.data
     return setLoginFailed(true)}
   setLoginFailed(false)
   const user = result.data
   authContext.setUser(user)
   console.log("USER: ", user, "TYPE USER: ", typeof user)
  //  authStorage.storeToken(user)
  }

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/p_logo.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error={error} visible={loginFailed}/>
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
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
        <SubmitButton
        title="Login"
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
});

export default LoginScreen;
