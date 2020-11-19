import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";

import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require("../assets/close_up.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/p_logo.png")} />
        <View style={styles.welcomeText}>
          <Text style={styles.tagline}>Popcorn.</Text>
          <Text style={styles.tagline}>Find a Movie Match.</Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
        title="login"
        color="red"
        onPress={() =>
        console.log("pressed")
        } />
        <AppButton
          title="Register"
          color="darkGold"
          onPress={() => console.log("pressed")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
    marginBottom: 20
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 30,
  },
  logoContainer: {
    position: "absolute",
    top: 150,
    paddingLeft: 25,
    paddingRight: 25,
    alignItems: "center",
    backgroundColor: "rgba(177, 116, 15, 0.4)",
    borderRadius: 25,
  },
  tagline: {
    fontSize: 35,
    fontWeight: "800",
    alignSelf: "center",
    color: colors.darkBlue,
    padding: 4
  },
  welcomeText: {
    marginVertical: 30,
  },
});

export default WelcomeScreen;
