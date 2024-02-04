import { StyleSheet, Text, View,Alert,TouchableOpacity, Image } from 'react-native';
import React, { useState ,useEffect,} from 'react';
import MapView, { Circle, Marker, PROVIDER_GOOGLE, Polygon, Polyline } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { getDistance } from 'geolib';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const MapScreen = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [size, setsize] = useState(false);

  const [ulatitude, setuLatitude] = useState(null);
  const [ulongitude, setuLongitude] = useState(null);
  let [pol,serpol]=useState([])
  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
        setuLatitude(latitude);
        setuLongitude(longitude);
        let poldata=[{
          latitude:33.63145738417599, 
          longitude:73.07348150646708 ,
        },
        {
          latitude:latitude, 
          longitude:longitude ,
        }]
        serpol(poldata)
       let v=getDistance({latitude:33.63154567626537,  longitude:73.07351848880384,},
        {latitude:latitude,longitude:longitude }, accuracy = 1)
       console.log(v); 
       if(v<50)
        {
          setsize(true)
          console.log("yes, your in Fit Computer institute");
        }else{
          setsize(false)
          console.log("No, your are not in  Fit Computer institute");
        } 
      },
      error => Alert.alert('Error', error.message),
    );
  }, []);

  const GOOGLE_MAPS_API_KEY ='AIzaSyA5_cQWLebAZtQ_B3_PjXWAcxJX69u87HE'
  const [markerslist, setMarkersList] = useState([
    {
      id: 1,
      latitude: 33.6316244038922,
      longitude: 73.07068905627607,
      title: 'team A',
      description: 'team A location',
    },
    {
      id: 2,
      latitude: 33.6283191914703,
      longitude: 73.07086069022968,
      title: 'team B',
      description: 'team B location',
    },
  ]);
const MyCustomMarkerView = () => {
  return(
    <Image style={{width:60,height:60}}
    source={require('./fit1.png')}/>
  )
}
  return (
    
    <View style={styles.container}>
       {/* <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: GOOGLE_MAPS_API_KEY,
        language: 'en',
      }}
      
      
    /> */}
    
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 33.631830785774916,
          longitude: 73.07314407475789,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        showsUserLocation
        onUserLocationChange={e=>{
          const { latitude, longitude } = e.nativeEvent.coordinate;
          console.log(`New Latitude: ${latitude}, New Longitude: ${longitude}`);
          setuLatitude(latitude);
          setuLongitude(longitude);
          let poldata=[{
            latitude:33.63145738417599, 
            longitude:73.07348150646708 ,
          },
          {
            latitude:latitude, 
            longitude:longitude ,
          }]
          serpol(poldata)
        }}
      >
        <Marker 
        coordinate={{
          latitude:33.63147617041746,  
          longitude:73.07347580739189,
        }}>
          <MyCustomMarkerView />
        </Marker>
        <Marker 
        coordinate={{
          latitude:ulatitude?ulatitude:33.6614573841759, 
          longitude:ulongitude?ulongitude:73.0734815064670 ,
        }}/>
        
        
        {/* {markerslist && markerslist.map((marker, index) => (
          <Marker
            key={marker.id}
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
            title={marker.title}
            description={marker.description}
            draggable
            onDragEnd={(e) => console.log({ x: e.nativeEvent.coordinate })}
          />
        ))} */}
        
        {/* <Circle center={{
          latitude:33.63981271523428,
          longitude: 73.07395430733672,
        }} 
        radius={400}
        fillColor='grey'
        strokeColor='red'/>
    */}
       <Polyline
        strokeWidth={2}
        strokeColor='red'
        coordinates={pol}
      />
      {/* <Polygon 
      strokeColor='red'
      coordinates={[
        {
          latitude:33.63176871460988, 
          longitude:73.0721935803098,
        },
        {
        latitude:33.62978557458759, 
        longitude:73.07154988739885,
        },
        {
          latitude:33.62739151916347, 
          longitude:73.07470407497468,
        },
        {
          latitude:33.630017775901266, 
          longitude:73.07747211806182,
        },
       
      ]}/> */}
      </MapView>
      {size?<TouchableOpacity style={{alignSelf:'center',}}>
        <View style={{backgroundColor:'#D44F25',height:heightPercentageToDP(8),width:widthPercentageToDP(40),
        borderRadius:25,marginTop:10}}>
      <Text style={{color:'white',fontSize:18,fontWeight:'bold',alignSelf:'center',marginTop:15}}>
        BTN
      </Text>
     
      </View>
      </TouchableOpacity> :null}
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    height: heightPercentageToDP(85),
    width: widthPercentageToDP(100),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    height: heightPercentageToDP(85),
    width: widthPercentageToDP(100),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
