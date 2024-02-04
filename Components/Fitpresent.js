import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import {useNavigation} from '@react-navigation/native';
import FitSignup from './FitSignup';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Fitpresent = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.FitContainer}>
        <Text style={styles.FitText}>FIT</Text>
      </View>
      
      <View style={styles.ScndContainer}>
        <TouchableOpacity>
      
      <Text style={styles.Attendence}>
                VIEW ATTENDENCE</Text>
                </TouchableOpacity>
                </View>
          
          <View style={styles.ScndContainer1}>
            <TouchableOpacity>
            <Text style={styles.Content}
            onPress={()=>navigation.navigate("Home")}>
                VIEW COURSE CONTENT</Text> 
                </TouchableOpacity>
                
          </View>
          <View style={styles.ScndContainer2}>
            <Text style={styles.Absent} >
              PRESENT/ABSENT
              </Text>   
              
                
          </View>
          
          
        
    </View>
  )
}

export default Fitpresent

const styles = StyleSheet.create({
    FitContainer:{alignSelf:'center',marginTop:30
},
    FitText:  {fontSize:50,color:'#D44F25',fontWeight:'bold',elevation:5
},
    ScndContainer:{height:heightPercentageToDP(6),width:widthPercentageToDP(80),backgroundColor:'#E0E0E0'
      ,alignSelf:'center',marginTop:80,borderRadius:15,elevation:5
    },
  
  ScndContainer1:{height:heightPercentageToDP(6),width:widthPercentageToDP(80),backgroundColor:'#E0E0E0'
    ,alignSelf:'center',marginTop:50,borderRadius:15,elevation:5
  },
  ScndContainer2:{height:heightPercentageToDP(6),width:widthPercentageToDP(80),backgroundColor:'#E0E0E0'
  ,alignSelf:'center',marginTop:50,borderRadius:15,elevation:5
},
Attendence:{
    color:'black',paddingLeft:15,marginTop:12,fontSize:17,fontWeight:'bold',
            alignSelf:'center',
},
Content:{color:'black',paddingLeft:15,marginTop:12,fontSize:17,fontWeight:'bold',
alignSelf:'center'
},
Absent:{color:'black',paddingLeft:15,marginTop:12,fontSize:17,fontWeight:'bold',
},
})












// import {} from 'react-native'
// import { useState } from 'react';
// import DropDownPicker from 'react-native-dropdown-picker';

// function NewAppFit() {
//   const [open, setOpen] = useState(false);
//   const [value, setValue] = useState(null);
//   const [items, setItems] = useState([
//      { label: 'ice-cream', value: '1' },
//      { label: 'strawberry', value: '2' },
//      { label: 'grapes', value: '3' },
//      { label: 'fruit salad', value: '4' },
//      { label: 'jello', value: '5' },
//      { label: 'apple', value: '6' },
//   ]);

//   return (
//     <DropDownPicker
//       open={open}
//       value={value}
//       items={items}
//       setOpen={setOpen}
//       setValue={setValue}
//       setItems={setItems}
//     />
//   );
// }
// export default NewAppFit;