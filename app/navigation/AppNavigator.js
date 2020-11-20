import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {MaterialCommunityIcons} from "@expo/vector-icons"

import MatchesScreen from '../screens/MatchesScreen'
import SwipeScreen from '../screens/SwipeScreen'
import AccountScreen from '../screens/AccountScreen'
import FeedNavigator from "./FeedNavigator"
import AccountNavigator from "./AccountNavigator"
import MatchesButton from './MatchesButton';

const Tab = createBottomTabNavigator()

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
    name="Matches"
    component={MatchesScreen}
    options={{
      tabBarIcon: ({color, size}) =>
      <MaterialCommunityIcons name="movie-open" color={color} size={size}/>
    }}
     />
    <Tab.Screen name="Feed"
    component={FeedNavigator}
    options={({navigation}) => ({
    tabBarButton: () => <MatchesButton onPress={()=> navigation.navigate("Feed")}/>,
    })}
    />
    <Tab.Screen
    name="Account"
    component={AccountNavigator}
    options={{
      tabBarIcon: ({color, size}) =>
      <MaterialCommunityIcons name="account" color={color} size={size}/>
    }}
    />
  </Tab.Navigator>
)

export default AppNavigator
