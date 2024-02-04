// HomeScreen.js
import React from 'react';
import { View, Text, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <ImageBackground style={{height:heightPercentageToDP(45),width:widthPercentageToDP(100)}} 
      source={require('./Home.jpg')}/>
      
      <View style={{height:heightPercentageToDP(20),width:widthPercentageToDP(90),backgroundColor:'#E0E0E0',
      elevation:5,alignSelf:'center',borderRadius:20}}>
        <Text style={{color:'black',fontSize:20,fontWeight:'bold',alignSelf:'center',marginTop:8}}>
                Find Out Your Inner Skill
                </Text>
                <Text style={{color:'black',marginTop:20,paddingLeft:20}}>
                  Anyone can join the milions of member in our community to learn cutting edge skill....
                </Text>
      </View>

      <TouchableOpacity style={{alignSelf:'center',marginTop:50}}>
      <View style={{backgroundColor:'#D44F25',height:heightPercentageToDP(9),
                  width:widthPercentageToDP(60),borderRadius:23,}}>
        
          <Text style={{alignSelf:'center',marginTop:23,fontSize:20,fontWeight:'bold',
                    color:'white',}}
                    
                    >Get's Started</Text>
          </View>
        </TouchableOpacity>
    
    </View>
  );
};

export default HomeScreen;
