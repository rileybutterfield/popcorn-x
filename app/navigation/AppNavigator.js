import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import MatchesScreen from '../screens/MatchesScreen'
import SwipeScreen from '../screens/SwipeScreen'
import AccountScreen from '../screens/AccountScreen'
import FeedNavigator from "./FeedNavigator"
import AccountNavigator from "./AccountNavigator"

const Tab = createBottomTabNavigator()

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={FeedNavigator} />
    <Tab.Screen name="Matches" component={MatchesScreen} />
    <Tab.Screen name="Account" component={AccountNavigator} />
  </Tab.Navigator>
)

export default AppNavigator
