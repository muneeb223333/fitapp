import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, ActivityIndicator, StyleSheet } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import firestore from '@react-native-firebase/firestore';
import { launchImageLibrary } from 'react-native-image-picker';
import { uploadImage } from './services';
import { ScrollView } from 'react-native-gesture-handler';

const Inputform = () => {
  const [courseName, setCourseName] = useState("");
  const [Coursefee, setCoursefee] = useState("");
  const [Discountfee, setDiscountfee] = useState("");
  const [Typename, setTypename] = useState("");
  const [Typenamee, setTypenamee] = useState("");
  const [Typenameee, setTypenameee] = useState("");
  const [pickedDocument, setPickedDocument] = useState('');
  const [imageUri, setImageUri] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const pickDocument = async () => {
    setIsLoading(true);
    return new Promise((resolve, reject) => {
      const options = {
        mediaType: 'photo',
      };

      launchImageLibrary(options, (response) => {
        setIsLoading(false); // Set loading to false when document picking is done
        if (response.didCancel) {
          reject('User cancelled document picker');
        } else if (response.error) {
          reject(response.error);
        } else {
          setImageUri(response.assets[0].uri);
          console.log(response.assets[0].uri);
          resolve(response.uri);
        }
      });
    });
  };

  const add = async () => {
    setIsLoading(true); // Set loading to true when adding course

    try {
      var ref = imageUri.substring(imageUri.lastIndexOf('/') + 1);
      let url = await uploadImage(imageUri, 'Courses/' + ref);
      await firestore()
        .collection('course')
        .add({
          url,
          courseName,
          Coursefee,
          Discountfee,
          Typename,
          Typenamee,
          Typenameee,
          pickedDocument,
        });
      console.log('Course added successfully!');
    } catch (error) {
      console.error('Error adding course', error);
    } finally {
      setIsLoading(false); // Set loading to false when course is added
    }
  };

  return (
    <ScrollView>
     <View>
      <View>
        <Text style={{color:"black",alignSelf:'center',marginTop:20,fontWeight:"bold",
        fontSize:20}}>Input Form</Text>
      </View>
      <View style={styles.ScndContainer}>
        <TextInput
        onChangeText={e=>{
          setCourseName(e)
        }}
        style={styles.ScndContainerInput} placeholder='Designing Courses'
          placeholderTextColor={"black"} />
      </View>
      <View style={styles.ScndContainer1}>
        <TextInput 
         onChangeText={e=>{
          setCoursefee(e)
        }}
        style={styles.ScndContainerInput1} placeholder=' Course Fee'
          placeholderTextColor={"black"} />
      </View>
      <View style={styles.ScndContainer2}>
        <TextInput 
         onChangeText={e=>{
          setDiscountfee(e)
        }}
        style={styles.ScndContainerInput2} placeholder=' Discount Fee'
          placeholderTextColor={"black"} />
      </View>
      <View style={styles.ScndContainer2}>
        <TextInput
        onChangeText={e=>{
          setTypename(e)
        }}
         style={styles.ScndContainerInput2} placeholder=' Course Type'
          placeholderTextColor={"black"} />
      </View>
      <View style={styles.ScndContainer2}>
        <TextInput 
        onChangeText={e=>{
          setTypenamee(e)
        }}
        style={styles.ScndContainerInput2} placeholder=' Course Type'
          placeholderTextColor={"black"} />
      </View>
      <View style={styles.ScndContainer2}>
        <TextInput 
        onChangeText={e=>{
          setTypenameee(e)
        }}
        style={styles.ScndContainerInput2} placeholder=' Course Type'
          placeholderTextColor={"black"} />
      </View>

      <View style={{marginTop:20,width:widthPercentageToDP(50),alignSelf:'center'}}>
      <Button color={'#D44F25'} title="Pick Document" onPress={pickDocument} 
      onChangeText={e=>{
        setPickedDocument(e)
      }}/>
     
      </View>
      <TouchableOpacity onPress={add} style={{ alignSelf: 'center', marginTop: 50 }}>
        <View style={{ backgroundColor: '#D44F25', height: heightPercentageToDP(8), width: widthPercentageToDP(50), borderRadius: 23 }}>
          {isLoading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={{ alignSelf: 'center', marginTop: 18, fontSize: 20, fontWeight: 'bold', color: 'white' }}>Add Course</Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    ScndContainer: {
        height:heightPercentageToDP(6), width:widthPercentageToDP(80), backgroundColor: '#E0E0E0'
        , alignSelf: 'center', marginTop: 30, borderRadius: 15, elevation: 5,
      },
      ScndContainerInput: { fontSize: 17, paddingLeft: 15 ,color:'black' },
      ScndContainer1: {
        height:heightPercentageToDP(6), width:widthPercentageToDP(80), backgroundColor: '#E0E0E0'
        , alignSelf: 'center', marginTop: 30, borderRadius: 15, elevation: 5,
      },
      ScndContainerInput1: { fontSize: 17, paddingLeft: 15 ,color:'black' },
      ScndContainer2: {
        height:heightPercentageToDP(6), width:widthPercentageToDP(80), backgroundColor: '#E0E0E0'
        , alignSelf: 'center', marginTop: 30, borderRadius: 15, elevation: 5,
      },
      ScndContainerInput2: { fontSize: 17, paddingLeft: 15 ,color:'black' },
})
export default Inputform;