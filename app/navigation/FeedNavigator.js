import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import LocationScreen from "../screens/LocationScreen";
import LocationDetailsScreen from "../screens/LocationDetailsScreen";


const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false, presentation: "modal"}}>
    <Stack.Screen name="Locations" component={LocationScreen}/>
    <Stack.Screen name="LocationDetails" component={LocationDetailsScreen}/>
  </Stack.Navigator>
);

export default FeedNavigator;