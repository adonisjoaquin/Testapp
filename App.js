import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer, StackActions} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from './src/components/screens/Home';
import Search from './src/components/screens/Search';
import Reels from './src/components/screens/reels';
import Activity from './src/components/screens/activity';
import Profile from './src/components/screens/Profile';

export default function App() {

  const stack = createNativeStackNavigator ();
  
  const Tab = createBottomTabNavigator();


  const bottomTabScreen = () => {
    return(
      <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel={false,
        tabBarStyle={
          height: 50
        },
        
        tabBarIcon: ({focused, size, colour}) => {
          let iconName;
          if (route,name=== "Home"){
            iconName= focused ? "home-sharp" : "home-outline";
            size = focused ? size + 8 : size + 2;
            
          }
        }
      })}>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Search" component={Search}/>
        <Tab.Screen name="Reels" component={Reels}/>
        <Tab.Screen name="Activity" component={Activity}/>
        <Tab.Screen name="Profile" component={Profile}/>



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
