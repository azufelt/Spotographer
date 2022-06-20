import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import colors from '../config/colors';

function NewListingButton({onPress}) {
  return (
    <TouchableOpacity onpress={onPress}>
    <View style={styles.container}>
      <MaterialCommunityIcons 
      name="plus-circle"
      color={colors.white}
      size={50}
      />
    </View>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderRadius: 40, 
    borderWidth: 10,
    bottom: 30,
    height: 70,
    justifyContent: 'center',
    width: 70,

  }
});

export default NewListingButton;