import React from 'react';
import { StyleSheet, Text, View,} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AccountScreen from "./app/screens/AccountScreen";
import MatchesScreen from "./app/screens/MatchesScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AddFriendScreen from "./app/screens/AddFriendScreen";
import MovieDetailsScreen from "./app/screens/MovieDetailsScreen";
import SwipeScreen from "./app/screens/SwipeScreen";
import { NavigationContainer } from '@react-navigation/native';
import Screen from './app/components/Screen';

const Tweets = () => (
  <Screen>
    <Text>Tweets</Text>
  </Screen>
)

const TweetDetails = () => (
  <Screen>
    <Text>Tweet Details</Text>
  </Screen>
)

const Stack = createStackNavigator()
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen name="Tweet Details" component={TweetDetails} />
  </Stack.Navigator>
)


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
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
