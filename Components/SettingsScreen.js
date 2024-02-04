// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
// } from 'react-native';
// import DocumentPicker from 'react-native-document-picker';
// import storage from '@react-native-firebase/storage';
 
// import { launchImageLibrary } from 'react-native-image-picker';
// import { uploadImage } from './services';

// const SettingsScreen = () => {
//   const [imageUri, setImageUri] = useState(null);

//   const pickDocument = async () => {
//     try {
//       const result = await DocumentPicker.pick({
//         type: [DocumentPicker.types.images],
//       });
 
//       setImageUri(result[0].uri);
//     } catch (err) {
//       if (DocumentPicker.isCancel(err)) {
      
//       } else {
//         console.error('Error picking document:', err);
//       }
//     }
//   };
//   const pickDocument2 = async () => {
//     return new Promise((resolve, reject) => {
//       const options = {
//         mediaType: 'photo',
//       };
  
//       launchImageLibrary(options, (response) => {
//         if (response.didCancel) {
//           reject('User cancelled document picker');
//         } else if (response.error) {
//           reject(response.error);
//         } else {
//       setImageUri(response.assets[0].uri);
//           console.log(response.assets[0].uri);
//           resolve(response.uri);
//         }
//       });
//     });
//   };
//   const uploadImage2 = async () => {      
//   var ref = imageUri.substring(imageUri.lastIndexOf('/') + 1);
//   let url = await uploadImage(imageUri, 'Courses/' + ref);
//   console.log(url);
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={async()=>{
//           console.log(await pickDocument2());
//         }}
//       >
//         <Text style={styles.buttonText}>Pick an Image</Text>
//       </TouchableOpacity>

//       {imageUri ? (
//         <>
//           <Image source={{ uri: imageUri }} style={styles.image} />
//           <TouchableOpacity
//             style={styles.uploadButton}
//             onPress={uploadImage2}
//           >
//             <Text style={styles.buttonText}>Upload Image</Text>
//           </TouchableOpacity>
//         </>
//       ):null}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   button: {
//     backgroundColor: '#3498db',
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 20,
//   },
//   uploadButton: {
//     backgroundColor: '#2ecc71',
//     padding: 15,
//     borderRadius: 10,
//     marginTop: 20,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//   },
//   image: {
//     width: 200,
//     height: 200,
//     borderRadius: 10,
//     marginVertical: 20,
//   },
// });


import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [animation, setAnimation] = useState(new Animated.Value(0));

  const toggleAccordion = () => {
    const toValue = isOpen ? 0 : 1;

    Animated.timing(animation, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();

    setIsOpen(!isOpen);
  };

  const rotateArrow = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={toggleAccordion}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <Animated.View style={{ transform: [{ rotate: rotateArrow }] }}>
            <Text>▼</Text>
          </Animated.View>
        </View>
      </TouchableOpacity>

      {isOpen && (
        <Animated.View style={{ height: animation.interpolate({ inputRange: [0, 1], outputRange: [0, 200] }) }}>
          <Text style={styles.content}>{content}</Text>
        </Animated.View>
      )}
    </View>
  );
};

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <AccordionItem  title=" GRAPHIC DESIGNING COURSES" content="HTML,CSS, WORD PRESS." 
      />
      <AccordionItem title=" Item 2" content="This is the content for item 2." />
      {/* Add more AccordionItem components as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  itemContainer: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    color:"black",
    
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    color:"black",
    

  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'black'
    
  },
  content: {
    padding: 10,
    color:'black'
  },
});


// import React, { useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import Collapsible from 'react-native-collapsible';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

// const SettingsScreen = () => {
//   const [isExpanded, setExpanded] = useState(false);

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.header} onPress={() => setExpanded(!isExpanded)}>
//         <Text style={{color:"red"}}>Accordion Header</Text>
//       </TouchableOpacity>
//       <Collapsible style={{backgroundColor:'pink',borderColor:'red',height:heightPercentageToDP(10),
//       width:widthPercentageToDP(60)}} collapsed={!isExpanded}>
//         <Text style={{color:'black'}}>Accordion Content</Text>
//       </Collapsible>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginVertical: 10,
//   },
//   header: {
//     backgroundColor: '#f2f2f2',
//     padding: 10,
//   },
//   headerText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color:'black'
//   },
//   content: {
//     backgroundColor: '#f2f2f2',
//     padding: 10,
   
//   },
//   contentText: {
//     fontSize: 16,
//     color:'black'
//   },
// });




export default SettingsScreen




{/* <View style={styles.ScndContainer}>


                <Text style={styles.Attendence}>
                    Our Course Contant
                </Text>
            </View>
            <View style={{ marginTop: 40,paddingHorizontal:10}}>
                <Text style={{ color: "black", fontSize: 16,fontWeight:"400" }}>FIT institute is a computer institute where you 
                learn market level best computer courses.through theses computer short courses you also get 
                project through online platforms like freelance ,fiver and upwark etc. graphic design computer 
                institute provide all help to his student to earn money.we biuld Developers web development 
                computer institute providing computer short courses in rawalpindi islamabad from 2021.
                </Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:30}}>
            <View style={styles.Contantcard1}>
            <Image style={{height:heightPercentageToDP(12),width:widthPercentageToDP(40),marginTop:5,alignSelf:'center'}} 
      source={require('./hmlt1.png')}/>
             <Text style={{fontSize:24,fontWeight:"bold",paddingHorizontal:5,color:'white',
            }}>Front End Web Design Course</Text>
            <Text style={{color:'white',alignSelf:'center',}}>HTML & CSS</Text>
            <Text style={{color:"white",alignSelf:'center'}}>JavaScript</Text>
            <Text style={{color:'white',alignSelf:'center'}}>WordPress </Text>
            <Text style={{color:'white',fontSize:21,alignSelf:'center',fontWeight:"bold"
               }}>Discounted Fee</Text>
               <Text style={{color:"black",alignSelf:'center',fontWeight:'600',fontSize:17}}>25,000 PKR</Text>
               <Text style={{color:'white',marginTop:5,fontSize:21,alignSelf:'center',fontWeight:"bold"
               }}>Course Fee</Text>
               <Text style={{color:"black",alignSelf:'center',fontWeight:'600',fontSize:17}}>30,000 PKR</Text>
            </View >
            <View style={styles.Contantcard2}>
            <Image style={{height:heightPercentageToDP(10),width:widthPercentageToDP(45),alignSelf:'center'}} 
      source={require('./office1.png')}/>
             <Text style={{fontSize:24,fontWeight:"bold",color:'white',alignSelf:'center',marginTop:15
            }}>Microisoft office  Course</Text>
            <Text style={{color:'white',alignSelf:'center',}}>MS Word</Text>
            <Text style={{color:"white",alignSelf:'center'}}>MS Excel</Text>
            <Text style={{color:'white',alignSelf:'center'}}>MS Power Point </Text>
            <Text style={{color:'white',fontSize:21,alignSelf:'center',fontWeight:"bold"
               }}>Discounted Fee</Text>
               <Text style={{color:"black",alignSelf:'center',fontWeight:'600',fontSize:17}}>10,500 PKR</Text>
               <Text style={{color:'white',marginTop:5,fontSize:21,alignSelf:'center',fontWeight:"bold"
               }}>Course Fee</Text>
               <Text style={{color:"black",alignSelf:'center',fontWeight:'600',fontSize:17}}>15,000 PKR</Text>
            </View>
        
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:30}}>
            <View style={styles.Contantcard3}>
          
            </View > */}
            {/* <View style={styles.Contantcard4}>
         
            </View> */}
        
            {/* </View> */}