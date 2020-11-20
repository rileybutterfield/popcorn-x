import React from "react";
import {FlatList, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import AppText from "../components/AppText";
import Icon from "../components/Icon";
import Card from "../components/Card";
import colors from "../config/colors";

const movie = {
    id: 2,
    title: "Ratatouille",
    runtime: "120 minutes",
    genre: "Kids",
    image: {uri:"https://sites.psu.edu/favoriteanimatedmovies/files/2017/03/ratatouille-25z0vgo.jpg"},
    description: "This is the Ratatouille description"
  }

function SwipeScreen({navigation}) {
  return (
    <Screen style={styles.screen}>
      <AppText style={styles.title}>Pick Your Flicks!</AppText>
      <Card
        title={movie.title}
        runtime={"Runtime: " + movie.runtime}
        genre={"Genre: " + movie.genre}
        image={movie.image}
        onPress={()=> navigation.navigate("MovieDetails", movie)}
      />
      <View style={styles.swipeables}>
      <Icon
      name="thumb-down"
      size={80}
      backgroundColor={colors.darkBlue}
      />
      <Icon
      name="cards-heart"
      size={80}
      backgroundColor={colors.red}
      />
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
    marginTop: 40
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: colors.darkGold,
    marginBottom: 40,
    alignSelf: "center"
  }
});

export default SwipeScreen;
