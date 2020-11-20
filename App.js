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

const Link = () => {
  const navigation = useNavigation()
  return (
  <Button
  title="Click"
  onPress={() => navigation.navigate("TweetDetails")}
  />
)}


const Tweets = ({navigation}) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title="View Tweet"
      onPress={() => navigation.navigate("TweetDetails", {id: 1})}
  />
  </Screen>
)

const TweetDetails = ({route}) => (
  <Screen>
    <Text>Tweet Details {route.params.id }</Text>
  </Screen>
)

const Stack = createStackNavigator()
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "dodgerblue"},
      headerTintColor: "white",
      }}
  >
    <Stack.Screen
    name="Tweets"
    component={Tweets}/>
    <Stack.Screen
    name="TweetDetails"
    component={TweetDetails} />
  </Stack.Navigator>
)

const Account = () => <Screen><Text>Account</Text></Screen>

const Tab = createBottomTabNavigator()
const TabNavigator = () => (
  <Tab.Navigator
  tabBarOptions={{
    activeBackgroundColor: "tomato",
    activeTintColor: "white",
    inactiveBackgroundColor: "#eee",
    inactiveTintColor: "black"
  }}
  >
    <Tab.Screen
    name="Feed"
    component={StackNavigator}
    options={{
      tabBarIcon: ({size, color}) => <MaterialCommunityIcons name="home" size={size} color={color}/>
    }}
    />
    <Tab.Screen name="Account" component={Account}/>
  </Tab.Navigator>
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
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
