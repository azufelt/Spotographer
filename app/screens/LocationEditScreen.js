import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import * as Location  from 'expo-location';

import {
  AppForm ,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen"
import FormImagePicker from "../components/forms/FormImagePicker";
 
const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please Select at least one image")
});

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "tree",
    label: "Rural",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "city-variant-outline",
    label: "Urban",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "barn",
    label: "Architecture",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "waves",
    label: "Water",
    value: 4,
  },
 
];

function LocationEditScreen() {
  const [location, setLocation] = useState();

const getLocation = async () => {
  const { granted } = await Location.requestBackgroundPermissionsAsync();
if (!granted) return;
const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
setLocation({latitude, longitude});
}
  useEffect(() => {
    getLocation()
  }, [])

 
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(values) => console.log(location)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          name="location"
          placeholder="Location"
        />
        <AppFormPicker
         items={categories} 
         name="category" 
         placeholder="Category" />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default LocationEditScreen;
