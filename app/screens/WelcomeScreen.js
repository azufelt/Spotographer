import React from 'react';
import { Image, ImageBackground, StyleSheet,View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppButton from '../components/AppButton';
import colors from '../config/colors';
import routes from '../navigation/Routes';
import LocationScreen from './LocationScreen';
import RegisterScreen from './RegisterScreen';


function WelcomeScreen({ navigation}) {
  return (
<ImageBackground 
blurRadius={5}
source={require('../assets/background.jpg')}
style={styles.background}
>
  <View style={styles.logoContainer}>
  <Image style={styles.logo}source={require('../assets/logo.png')}/>
  <Text style={styles.title}>Spotography</Text>
  <Text style={styles.tagline}>Keep track of perfect photography locations!</Text>
      
  </View>
  <View styles={styles.buttonsContainer}>
  <AppButton 
  title="Login" 
  onPress={() => navigation.navigate('./LocationScreen')}/>
  <AppButton 
  title="Register" 
  color="secondary"
   onPress={() => navigation.navigate('RegisterScreen')}/>
  </View>
</ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { //container
    flex: 1, //takes entire screen
    justifyContent: "flex-end",
    alignItems: "center"
  },
  buttonsContainer: {
    width: "100%",
    padding: 20
  },
  logo: {
    width: 150,
    height: 150
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
    backgroundColor: "rgba(253, 253, 253, .5)",
    opacity: "5%"
  },
  tagline: {
    fontSize: 20,
    fontWeight: "600",
    paddingVertical: 20,
    color: colors.black,
    width: 250,
    textAlign: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: "900",
    color: colors.secondary,
  }
})
export default WelcomeScreen;