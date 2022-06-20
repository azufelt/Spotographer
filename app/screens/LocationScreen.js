import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Card from '../components/Card';
import colors from '../config/colors'
import routes from '../navigation/Routes';
import Screen from '../components/Screen';

const locations = [
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
]

function LocationScreen({navigation}) {
  return (
<Screen stle={styles.screen}>
  <FlatList
  data={locations}
  keyExtractor={location => location.id.toString()}
  renderItem={({item}) =>
    <Card 
    title={item.title}
    subTitle={ item.category}
    image={item.image}
    onPress={() => navigation.navigate(routes.LOCATION_DETAILS, item) }
    />
}
  />
</Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light
  }
})
export default LocationScreen;