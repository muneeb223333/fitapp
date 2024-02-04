import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import {useEffect, useState} from 'react'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import firestore from '@react-native-firebase/firestore';

const FitCourseContant = () => {

    const [Data ,setData,url] = useState([1,2,3,4,5,6,7]);
useEffect(()=>{get()},[])
    const get=async()=>{      
firestore()
.collection('course')
.get()
.then(querySnapshot => {
  console.log('Total users: ', querySnapshot.size);
let data=[]
  querySnapshot.forEach(documentSnapshot => {
    data.push(documentSnapshot.data())
    console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
  });
  setData(data)
});
    }
    return (
        <ScrollView>
        <View>
            <View style={styles.FitContainer}>
                <Text style={styles.FitText}>FIT</Text>
            
            </View>
            <View style={{height:heightPercentageToDP(8),width:widthPercentageToDP(80),
                backgroundColor:'#E0E0E0',elevation:5,borderRadius:10,alignSelf:"center",marginTop:20}}>
                    <Text style={{color:'black',alignSelf:'center',marginTop:15,fontWeight:'bold',fontSize:20}}>Our Course Contant</Text>
                </View>
           
        
        <FlatList
          data={Data}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={{justifyContent:'space-around',alignSelf:'center'}}
          renderItem={({ item }) =>{
            console.log(item );
            return (
                <View >
             
                    <View style={{flexDirection:'row',marginTop:20,marginLeft:10}}>
                    <View style={{paddingHorizontal:10,paddingVertical:10,width:widthPercentageToDP(45),
                backgroundColor:'#E0E0E0',elevation:5,borderRadius:8}}>
                    <Image source={{uri:item.url}} style={{width:100,height:100,borderRadius:100}}/>

                    <Text style={{color:'black',alignSelf:'center',marginTop:10,fontWeight:'bold',fontSize:20}}>
                        {item.courseName}
                    </Text>
                    <Text style={{color:'black',alignSelf:'center',marginTop:10,fontSize:16}}>{item.Discountfee}</Text>
                    <Text style={{color:'black',alignSelf:'center',marginTop:10,fontSize:16}}>{item.Coursefee}</Text>
                    <Text style={{color:'black',alignSelf:'center',marginTop:10,fontSize:16}}>{item.Typename}</Text>
                    <Text style={{color:'black',alignSelf:'center',marginTop:10,fontSize:16}}>{item.Typenamee}</Text>
                    <Text style={{color:'black',alignSelf:'center',marginTop:10,fontSize:16}}>{item.Typenameee}</Text>
                    </View>
                    
                 
                    </View>
                </View>
               
              )
          }}
        />
        </View>
            </ScrollView>
        
        
    )
}

export default FitCourseContant
const styles = StyleSheet.create({
    FitContainer: {
        alignSelf: 'center', marginTop: 15
    },
    FitText: {
        fontSize: 50, color: '#D44F25', fontWeight: 'bold', elevation: 5
    }, ScndContainer: {
        height: heightPercentageToDP(6), width: widthPercentageToDP(80), backgroundColor: '#E0E0E0'
        , alignSelf: 'center', marginTop: 35, borderRadius: 15, elevation: 5
    },
    Attendence: {
        color: 'black', paddingLeft: 15, marginTop: 12, fontSize: 17, fontWeight: 'bold',
        alignSelf: 'center',
    },
    // Contantcard1:{
    //     height:heightPercentageToDP(45),width:widthPercentageToDP(47),backgroundColor:'#CC431A',
    //     elevation:5,borderRadius:5
        
    // },

})