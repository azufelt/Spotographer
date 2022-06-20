import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ListItem from "../components/lists/ListItem";
import ListItemDelete from "../components/lists/ListItemDelete";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import Screen from "../components/Screen";

const initialLocations =  [
  {
    id: 1,
    title: "Yellow Field",
    location: "location",
    category: "Rural",
    image: require("../assets/field.jpg"),
    description: "This is a really cool spot"
  },
  {
    id: 2,
    title: "Red Barn",
    location: "location",
    category: "Rural",
    image: require("../assets/barn.jpg"),
    description: "This is a really cool spot"
  },
  {
    id: 3,
    title: "Graffit Wall",
    location: "location",
    category: "Urban",
    image: require("../assets/grafiti.jpg"),
    description: "This is a really cool spot"
  },
  {
    id: 4,
    title: "Yellow Door",
    location: "location",
    category: "Suburban",
    image: require("../assets/door.jpg"),
    description: "This is a really cool spot"
  },
  {
    id: 5,
    title: "Rainbow Tunnel",
    location: "location",
    category: "Urban",
    image: require("../assets/rainbow.jpg"),
    description: "This is a really cool spot"
  },
  {
    id: 6,
    title: "Country Road w/ Tree",
    location: "location",
    category: "Rural",
    image: require("../assets/tree.jpg"),
    description: "This is a really cool spot"
  },
];
   
function LocationsScreen(props) {
  const [locations, setLocations] = useState(initialLocations);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (location) => {
    // Delete the Location from  array
    // Call the server to Delete
    // state hook
    setLocations(locations.filter((m) => m.id !== location.id));
  };

  return (
    <Screen>
      <FlatList
        data={locations}
        keyExtractor={(location) => location.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Location Selected", item)} //this will take the user to a different screen
            renderRightActions={() => (
              <ListItemDelete onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setLocations([
            {
              id: 2,
              title: "Username",
              description: "Description of Location",
              image: require("../assets/profilepic.jpg"),
            },
          ]);
        }} //this is where we call the backend to give us a list of locations
      />
    </Screen>
  );
}
const styles = StyleSheet.create({});

export default LocationsScreen;
