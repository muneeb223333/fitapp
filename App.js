/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Fitpresent from './Components/Fitpresent'
import FitSignup from './Components/FitSignup'
import FitSignin from './Components/FitSignin'
import {NavigationContainer} from '@react-navigation/native';
import{createStackNavigator} from'@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from './Components/HomeScreen'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import SettingsScreen from './Components/SettingsScreen'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MapScreen from './Components/MapScreen'
import Inputform from './Components/Inputform'
import FitCourseContant from './Components/FitCourseContant'
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const  DaraweApp=()=>
{
  return(
<Drawer.Navigator
screenOptions={{ 

  drawerStyle:{
    backgroundColor:'#E0E0E0',
    width:250,
  },
  headerStyle:{
    backgroundColor:"#CC431A"

  },
  headerTintColor: 'white',
 headerTitleStyle:{
  fontWeight:"bold",
 },
 drawerActiveTintColor:'red',
 drawerLabelStyle:{
  color:'black'
 }
}}
>
  <Drawer.Screen name='Home' component={HomeScreen}
  options={{drawerIcon: () =>( 
 <FontAwesome name='home' size={20} color='black'/>
    )
  }}/>
  <Drawer.Screen  name='Sign Up' component={FitSignup}
  options={{drawerIcon: () =>( 
    <FontAwesome5 name='sign-out-alt' size={20} color='black'/>
       )
     }}/>
  <Drawer.Screen name='Sign In' component={FitSignin}
  options={{drawerIcon: () =>( 
    <FontAwesome5 name='sign-out-alt' size={20} color='black'/>
       )
     }}/>
  <Drawer.Screen name='Present/Absent' component={Fitpresent}
      options={{drawerIcon: () =>( 
        <Ionicons name='checkmark-done-outline' size={20} color='black'/>
           )
         }}/>
  <Drawer.Screen
  name='Setting'
  options={{
    drawerLabel:'Setting',
    title:'Setting',
    drawerIcon: () =>(
      <Ionicons name='settings' size={20} color='black'/>    
    )
  }}
  component={SettingsScreen}/>
<Drawer.Screen name='Map' component={MapScreen}/>
<Drawer.Screen name='Inputform' component={Inputform}/>
<Drawer.Screen name='Course Contant' component={FitCourseContant}/>
</Drawer.Navigator>
  )
}
const App = () => {
  
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="Homi" component={DaraweApp} />
    <Stack.Screen name="Signin" component={FitSignin} />
    <Stack.Screen name="present" component={Fitpresent} />
  </Stack.Navigator>
  </NavigationContainer>
  

  )
}

export default App