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
import likesApi from '../api/likes'



function SwipeScreen({navigation}) {
  const [movie, setMovie] = useState({})

  useEffect(()=> {
    loadMovie(Math.floor(Math.random() * 85) + 1)
  }, [])

  const loadMovie = async (number) => {
    const response = await moviesApi.getSingleMovie(number)
    setMovie(response.data)
  }

  const authContext = useContext(AuthContext)
  const user = authContext.user

  const handleLikePress = async() => {
    const requestInfo = {
      userId: user.id,
      movieId: movie.id
    }
    const result = await likesApi.postLike(requestInfo)
    loadMovie(Math.floor(Math.random() * 85) + 1)
  }

  const handleDislikePress = () => {
    loadMovie(Math.floor(Math.random() * 85) + 1)
  }


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
      <TouchableOpacity
      onPress={handleDislikePress}>
        <Icon
        name="thumb-down"
        size={80}
        backgroundColor={colors.darkBlue}
        />
      </TouchableOpacity>
      <TouchableOpacity
      onPress={handleLikePress}>
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
