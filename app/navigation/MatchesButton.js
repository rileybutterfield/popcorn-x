import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { TouchableOpacity } from 'react-native';

function MatchesButton({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <MaterialCommunityIcons name="heart-circle" color={colors.white} size={45} />
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.white,
    borderWidth: 10,
    backgroundColor: colors.primary,
    borderRadius: 40,
    bottom: 20,
    height: 80,
    width: 80
  }
});

export default MatchesButton;
