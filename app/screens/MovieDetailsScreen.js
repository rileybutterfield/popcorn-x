import React from "react";
import { Image, View, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

function MovieDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={{uri:"https://sites.psu.edu/favoriteanimatedmovies/files/2017/03/ratatouille-25z0vgo.jpg"}} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Ratatouille</AppText>
        <AppText style={styles.subtitles}>Runtime: 120 minutes</AppText>
        <AppText style={styles.subtitles}>Genre: Kids</AppText>
        <AppText style={styles.description}>A rat named Remy dreams of becoming a great French chef despite his family's wishes and the obvious problem of being a rat in a decidedly rodent-phobic profession. When fate places Remy in the sewers of Paris, he finds himself ideally situated beneath a restaurant made famous by his culinary hero, Auguste Gusteau.
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 500,
  },
  detailsContainer: {
    padding: 20,
  },
  description: {
    marginTop: 20
  },
  subtitles: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    marginVertical: 20
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default MovieDetailsScreen;
