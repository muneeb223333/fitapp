import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { useState } from 'react';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import DropDownPicker from 'react-native-dropdown-picker'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
// import {useNavigation} from '@react-navigation/native';
import Fitpresent from './Fitpresent';
import FitSignin from './FitSignin';

const FitSignup= ({ navigation }) => {
  // const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([

    { label: 'Web Development', value: '2' },
    { label: 'Graphic Design', value: '3' },
    { label: 'App Development', value: '4' },
  ]);
  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);
  const [items1, setItems1] = useState([
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '6', value: '4' },
  ]);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const[Passwordvisible,setpasswordvisible] = useState(false);
  const iconpasswordvisible = ()=>{
    setpasswordvisible(!Passwordvisible);
  };

  return (
    <View>
      <View style={styles.SignContainer}>
        <Text style={styles.SignText}>Sign up</Text>
      </View>
      <DropDownPicker placeholder='Courses' style={{
        height: heightPercentageToDP(6), width: widthPercentageToDP(80),
        backgroundColor: '#E0E0E0', borderWidth: 0, marginTop:50, elevation: 5, alignSelf: 'center'
      }}
        textStyle={{
          fontSize: 17, color: 'black', fontWeight: 'bold',
        }}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
      <View style={styles.ScndContainer}>
        <TextInput style={styles.ScndContainerInput} placeholder='Name'
          placeholderTextColor={"black"} />
      </View>

      <View style={styles.ScndContainer2}>
        <TextInput style={styles.ScndContainer2Input} placeholder='CNIC'
          placeholderTextColor={'black'} keyboardType='numeric' />
      </View>
    
    <View>
    <DropDownPicker placeholder='Duration' style={{
        height: heightPercentageToDP(6), width: widthPercentageToDP(80),
        backgroundColor: '#E0E0E0', borderWidth: 0, marginTop: 30, elevation: 5, alignSelf: 'center',
      }}
        textStyle={{
          fontSize: 17, color: 'black', fontWeight: 'bold',
        }}
        open={open1}
        value={value1}
        items={items1}
        setOpen={setOpen1}
        setValue={setValue1}
        setItems={setItems1}
      />
    </View>
      

      <View style={styles.ScndContainer3}>
        
        <TextInput style={styles.ScndContainer3Input} secureTextEntry={!passwordVisible} 
          placeholder='Password'
          placeholderTextColor={'black'} />
          <View style={{marginTop:12}}>
          <FontAwesome5 onPress={togglePasswordVisibility} name='eye-slash' size={25} color='black' />
        </View>
      </View>

      <View style={styles.ScndContainer4}>
        <TextInput style={styles.ScndContainer4Input} placeholder='Confirm Password'
          placeholderTextColor={'black'} secureTextEntry={!Passwordvisible} />
          <View style={{marginTop:12}}>
          <FontAwesome5 onPress={iconpasswordvisible} name='eye-slash' size={25} color='black' />
        </View>
      </View>

      <TouchableOpacity style={{ alignSelf: 'center' }}>
        <View style={{
          backgroundColor: '#D44F25', height: heightPercentageToDP(8),
          width: widthPercentageToDP(43), borderRadius: 25, marginTop: 35
        }}>
          <Text style={{alignSelf: 'center', marginTop: 14, color: 'white', 
          fontWeight: 'bold',fontSize: 25}}
          onPress={()=>navigation.navigate(Fitpresent)}>
            Submit</Text>
        </View>
      </TouchableOpacity>
      <View style={{ marginTop: 20, flexDirection: 'row', alignSelf: 'center' }}>
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18, }}>Already have an account?</Text>
        <TouchableOpacity>
          <Text style={{ color: '#D44F25', fontWeight: 'bold', fontSize: 18 }}
          onPress={()=>navigation.navigate("FitSignin")}
           >Sign in</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default FitSignup

const styles = StyleSheet.create({
  SignContainer: {
    alignSelf: 'center', marginTop: 30
  },
  SignText: {
    fontSize: 40, color: '#D44F25', fontWeight: 'bold', elevation: 5
  },
  ScndContainer: {
    height: heightPercentageToDP(6), width: widthPercentageToDP(80), backgroundColor: '#E0E0E0'
    , alignSelf: 'center', marginTop: 30, borderRadius: 15, elevation: 5,
  },
  ScndContainerInput: { fontWeight: 'bold', fontSize: 17, paddingLeft: 15 ,color:'black' },

  ScndContainer2: {
    height: heightPercentageToDP(6), width: widthPercentageToDP(80), backgroundColor: '#E0E0E0'
    , alignSelf: 'center', marginTop: 30, borderRadius: 15, elevation: 5
  },
  ScndContainer2Input: { fontWeight: 'bold', fontSize: 17, paddingLeft: 15 ,color:'black'},

  ScndContainer3: {
    height: heightPercentageToDP(6), width: widthPercentageToDP(80), backgroundColor: '#E0E0E0',
  alignSelf:'center',justifyContent:'space-between',flexDirection:"row", marginTop: 30, borderRadius: 15, elevation: 5,
  },
  ScndContainer3Input: { fontWeight: 'bold', fontSize: 17, paddingLeft: 15 ,color:'black'},
  ScndContainer4: {
    height: heightPercentageToDP(6), width: widthPercentageToDP(80), backgroundColor: '#E0E0E0',
  alignSelf:"center",justifyContent:'space-between',flexDirection:"row", marginTop: 30, 
     borderRadius: 15, elevation: 5,
  },
  ScndContainer4Input: { fontWeight: 'bold', fontSize: 17, paddingLeft: 15 ,color:'black'}
})
