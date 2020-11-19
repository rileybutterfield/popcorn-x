import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AccountScreen from "./app/screens/AccountScreen";
import MatchesScreen from "./app/screens/MatchesScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AddFriendScreen from "./app/screens/AddFriendScreen";
import MovieDetailsScreen from "./app/screens/MovieDetailsScreen";
import SwipeScreen from "./app/screens/SwipeScreen";


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
    <SwipeScreen />
  );
}
