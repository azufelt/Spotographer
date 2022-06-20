import React from 'react';
import Constants from "expo-constants";
import {SafeAreaView, StyleSheet, View} from 'react-native';
import defaultStyles from '../config/defaultStyles';
// import constants statusbar height isn't working

function Screen({children, style}) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>
      {children}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: Constants.statusBarHeight,
    paddingTop: 20,
    flex: 1,
    backgroundColor: defaultStyles.colors.white
  }
})

export default Screen;