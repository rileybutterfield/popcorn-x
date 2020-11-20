import React from "react";
import { Image, View, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";


function MovieDetailsScreen({route}) {
  const movie = route.params

  return (
    <View>
      <Image style={styles.image} source={{uri: movie.image}} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{movie.title}</AppText>
        <AppText style={styles.subtitles}>{movie.runtime}</AppText>
        <AppText style={styles.subtitles}>Genre: {movie.genre}</AppText>
        <AppText style={styles.description}>{movie.description}
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
