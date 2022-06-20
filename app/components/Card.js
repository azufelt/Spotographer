import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import defaultStyles from '../config/defaultStyles';
import AppText from './AppText';

function Card({ title, subTitle, image, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>

<View style={styles.card}>
  <Image style={styles.image} source ={image}/>
  <View style={styles.detailsContainer}>
  <AppText style={styles.title}>{title}</AppText>
  <AppText style={styles.subTitle}>{subTitle}</AppText>
  </View>
</View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: defaultStyles.colors.light,
    marginBottom: 20,
    overflow: "hidden"
  },
  detailsContainer: {
    padding: 20
  },
  image: {
    width: "100%",
    height: 200,
    overflow: "hidden"
  },
  subTitle: {
    color: defaultStyles.colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  }
})

export default Card;