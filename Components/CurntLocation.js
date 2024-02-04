import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';
import { getDistance } from 'geolib';
const CurntLocation = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [size, setsize] = useState(false);


  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
       let v=getDistance({latitude:33.63154567626537,  longitude:73.07351848880384,},
        {latitude:latitude,longitude:longitude }, accuracy = 1)
       console.log(v); 
       if(v<100)
        {
          setsize(true)
          console.log("yes");
        }else{
          setsize(false)
          console.log("no");
          
        }
         
      },
      error => Alert.alert('Error', error.message),
    );
  }, []);

  return (
    <View>
      <Text>Latitude: {latitude}</Text>
      {size?<TouchableOpacity style={{alignSelf:'center'}}>
        <View style={{backgroundColor:'black',paddingHorizontal:50,paddingVertical:20,
        borderRadius:15,}}>
      <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>
        BTN
      </Text>
     
      </View>
      </TouchableOpacity> :null}
      <Text>Longitude: {longitude}</Text>
    </View>
  );
};

export default CurntLocation;

const styles = StyleSheet.create({});