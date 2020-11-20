import React from 'react';
import { Button, StyleSheet, Text, View,} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {MaterialCommunityIcons} from "@expo/vector-icons"

import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AccountScreen from "./app/screens/AccountScreen";
import MatchesScreen from "./app/screens/MatchesScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AddFriendScreen from "./app/screens/AddFriendScreen";
import MovieDetailsScreen from "./app/screens/MovieDetailsScreen";
import SwipeScreen from "./app/screens/SwipeScreen";
import Screen from './app/components/Screen';
import AuthNavigator from "./app/navigation/AuthNavigator"
import AppNavigator from "./app/navigation/AppNavigator"
import navigationTheme from "./app/navigation/navigationTheme"


export default function App() {
  console.log("App executed!")

  return (
    // <LoginScreen />
    // <RegisterScreen />
    // <WelcomeScreen />
    // <AccountScreen />
    // <MatchesScreen />
    // <MessagesScreen />
    // <AddFriendScreen />
    // <MovieDetailsScreen />
    // // <SwipeScreen />
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
