import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionic from "react-native-vector-icons/Ionicons";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        hello world
      </Text>
      <Ionic name="play" style={{fontSize: 20}}/>
      <StatusBar style="auto" />
    </View>
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
