// import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
// import {useState} from 'react'
// import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
// import FitSignup from './FitSignup'
// import { useNavigation } from '@react-navigation/native'
// import Fitpresent from './Fitpresent'
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

// const FitSignin = () => {
//   const navigation = useNavigation();
//   const[Passwordvisible,setpasswordvisible] = useState(false);
//   const iconpasswordvisible = ()=>{
//     setpasswordvisible(!Passwordvisible);
//   };

//     return (
//       <View>
//         <View style={styles.SignContainer}>
//           <Text style={styles.SignText}>Sign in</Text>
//         </View>
//         <View style={styles.ScndContainer}>
//         <TextInput style={styles.ScndContainerInput} placeholder='CNIC'
//         placeholderTextColor={"black"} keyboardType='numeric'/>
//         <View/>
//             <View style={styles.ScndContainer1}>
//               <TextInput style={styles.ScndContainer1Input} placeholder='Password'
//               placeholderTextColor={'black'} secureTextEntry={!Passwordvisible}/>
//               <View style={{marginTop:12}}>
//           <FontAwesome5 onPress={iconpasswordvisible} name='eye-slash' size={25} color='black' />
//         </View>
//             </View>
            
//               <TouchableOpacity style={{alignSelf:'center'}}>
//                   <View style={{backgroundColor:'#D44F25',height:heightPercentageToDP(8),
//                   width:widthPercentageToDP(43),borderRadius:25,marginTop:40}}>
//                       <Text style={{alignSelf:'center',marginTop:14,color:'white',fontWeight:'bold',
//                   fontSize:25}}
//                   onPress={()=>navigation.navigate("Fitpresent")}>Submit</Text>
//                   </View>
//               </TouchableOpacity>
//             <View style={{marginTop:15,flexDirection:'row'}}>
//               <Text style={{color:'black',fontWeight:'bold',fontSize:18}}>Don't have any account?</Text>
//               <TouchableOpacity>
//                   <Text style={{color:'#D44F25',fontWeight:'bold',fontSize:18,}}
//                   onPress={()=>navigation.navigate("Home")}>Sign up</Text>
//               </TouchableOpacity>
//             </View>
            
//         </View>

//       </View>
//     )
//   }
  
//   export default FitSignin
  
//   const styles = StyleSheet.create({
//       SignContainer:{alignSelf:'center',marginTop:30
//   },
//       SignText:  {fontSize:40,color:'#D44F25',fontWeight:'bold',elevation:5
//   },
//       ScndContainer:{height:heightPercentageToDP(6),width:widthPercentageToDP(80),backgroundColor:'#E0E0E0'
//         ,alignSelf:'center',marginTop:60,borderRadius:15,elevation:5
//       },
//       ScndContainerInput:{fontWeight:'bold',fontSize:17,paddingLeft:15,color:'black'},
//       ScndContainer1:{height:heightPercentageToDP(6),width:widthPercentageToDP(80),backgroundColor:'#E0E0E0'
//       ,alignItems:'center',justifyContent:'space-between',flexDirection:'row',marginTop:30,borderRadius:15,elevation:5
//     },
//     ScndContainer1Input:{fontWeight:'bold',fontSize:17,paddingLeft:15,color:'black'},
//     })






import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

const YourComponent = () => {
  const [pickedDocument, setPickedDocument] = useState(null);

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      console.log(result);

      setPickedDocument(result);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the document picker
        console.log('Document picker cancelled');
      } else {
        console.error('Error picking document', err);
      }
    }
  };

  return (
    <View>
      <Button title="Pick Document" onPress={pickDocument} />
      {pickedDocument && (
        <View>
          <Text>Selected Document:</Text>
          <Text>Name: {pickedDocument.name}</Text>
          <Text>Size: {pickedDocument.size} bytes</Text>
          <Text>Type: {pickedDocument.type}</Text>
          <Text>URI: {pickedDocument.uri}</Text>
        </View>
      )}
    </View>
  );
};

export default YourComponent;
