import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import SwipeScreen from '../screens/SwipeScreen';
import MatchesScreen from '../screens/SwipeScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';

const Stack = createStackNavigator()

const FeedNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen name="Swipe" component={SwipeScreen} options={{headerShown: false}}/>
    <Stack.Screen name="Matches" component={MatchesScreen}/>
    <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} options={{headerShown: false}}/>
  </Stack.Navigator>
)

export default FeedNavigator
