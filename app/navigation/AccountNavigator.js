import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import AccountScreen from '../screens/AccountScreen';
import MessagesScreen from '../screens/MessagesScreen';
import MyLocationsScreen from '../screens/MyLocationsScreen';


const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Account" component={AccountScreen}/>
    <Stack.Screen name="Messages" component={MessagesScreen}/>
    <Stack.Screen name="Locations" component={MyLocationsScreen} label="My Locations"/>
  </Stack.Navigator>
);

export default AccountNavigator; 