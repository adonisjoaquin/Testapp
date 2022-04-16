import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer, StackActions} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

export default function App() {

  const stack = createNativeStackNavigator ();
  
  const Tab = createBottomTabNavigator();


  const bottomTabScreen = () => {
    return(
      <Tab.Navigator
      screenOptions={({route}) => {

      }}>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen/>

      </Tab.Navigator>
    )


  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="" Component={}/>
      </Stack.Navigator>
    </NavigationContainer>
  
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop:100
  },
});
