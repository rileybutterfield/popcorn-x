import React, { useEffect, useState, useContext } from "react";
import {StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native";

import Screen from "../components/Screen";
import AppText from "../components/AppText";
import Icon from "../components/Icon";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes"
import moviesApi from "../api/movies"
import AuthContext from "../auth/context";



function SwipeScreen({navigation}) {
  const [movie, setMovie] = useState({})

  useEffect(()=> {
    const number = Math.floor(Math.random() * 6) + 1
    loadMovie(number)
  }, [])

  const loadMovie = async (number) => {
    const response = await moviesApi.getSingleMovie(number)
    setMovie(response.data)
  }

  const authContext = useContext(AuthContext)
  const user = authContext.user

  return (
    <Screen style={styles.screen}>
      <AppText style={styles.title}>Pick Your Flicks!</AppText>
      <Card
        title={movie.title}
        runtime={"Runtime: " + movie.runtime}
        genre={"Genre: " + movie.genre}
        image={movie.image}
        onPress={()=> navigation.navigate(routes.MOVIE_DETAILS, movie)}
      />
      <View style={styles.swipeables}>
      {/* <Button
      title="Click"
      onPress={()=> loadMovie(Math.floor(Math.random() * 5) + 1)}
      /> */}
      <TouchableOpacity
      onPress={()=>console.log("pressed")}>
      <Icon
      name="thumb-down"
      size={80}
      backgroundColor={colors.darkBlue}
      />
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=>console.log("pressed")}>
      <Icon
      name="cards-heart"
      size={80}
      backgroundColor={colors.red}
      />
      </TouchableOpacity>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
  swipeables: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: colors.darkGold,
    marginBottom: 20,
    alignSelf: "center"
  }
});

export default SwipeScreen;
