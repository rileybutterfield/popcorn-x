import React from "react";
import { View, StyleSheet, Image, TouchableWithoutFeedback } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";


function Card({ title, runtime, genre, image, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{runtime}</AppText>
        <AppText style={styles.subtitle}>{genre}</AppText>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 400,
  },
  subtitle: {
    color: colors.darkBlue,
  },
  title: {
    color: colors.darkGold,
    marginBottom: 7,
    fontWeight: "bold",
  },
});
