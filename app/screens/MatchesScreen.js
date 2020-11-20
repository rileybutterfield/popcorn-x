import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import AppText from "../components/AppText";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes"
import moviesApi from "../api/movies"


function MatchesScreen({navigation}) {
  const [movies, setMovies] = useState({})

  useEffect(()=> {
    loadMovies()
  }, [])

  const loadMovies = async () => {
    const response = await moviesApi.getMovies()
    setMovies(response.data)
  }


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
            onPress={()=> navigation.navigate(routes.MOVIE_DETAILS, item)}
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
