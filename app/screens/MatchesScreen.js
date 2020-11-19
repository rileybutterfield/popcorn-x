import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import AppText from "../components/AppText";
import Card from "../components/Card";
import colors from "../config/colors";

const movies = [
  {
    id: 1,
    title: "Batman",
    runtime: "120 minutes",
    genre: "Superhero",
    image: {uri: "https://i.ytimg.com/vi/8BIObSCQWLs/maxresdefault.jpg"},
  },
  {
    id: 2,
    title: "Ratatouille",
    runtime: "120 minutes",
    genre: "Kids",
    image: {uri:"https://sites.psu.edu/favoriteanimatedmovies/files/2017/03/ratatouille-25z0vgo.jpg"},
  },
  {
    id: 3,
    title: "She's All That",
    runtime: "120 minutes",
    genre: "90's Teen",
    image: {uri: "https://images-na.ssl-images-amazon.com/images/I/51Iuj5srm4L._SX342_.jpg"},
  },
  {
    id: 4,
    title: "Lord of the Rings",
    runtime: "240 minutes",
    genre: "Fantasy/Adventure",
    image: require("../assets/popcorn.png"), //sample for if image exists in project
  },
];

function MatchesScreen(props) {
  return (
    <Screen style={styles.screen}>
      <AppText style={styles.title}>Our Movie Matches</AppText>
      <FlatList
        data={movies}
        keyExtractor={(movie) => movie.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            runtime={"Runtime: " + item.runtime}
            genre={"Genre: " + item.genre}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: colors.darkBlue,
    marginBottom: 15,
    alignSelf: "center"
  }
});

export default MatchesScreen;
