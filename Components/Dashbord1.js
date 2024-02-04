import { View, Text } from 'react-native'
import React from 'react'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'

const Dashboard1 = () => {
  return (
    <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:15}}>
        <View style={{height:heightPercentageToDP(10),width:widthPercentageToDP(45),
        backgroundColor:'#5CB0BA',borderRadius:8,elevation:5}}>
            <Text style={{color:"white",fontSize:20,fontWeight:'300',marginLeft:8}}>Positive score factors</Text>
        </View>
        <View style={{height:heightPercentageToDP(10),width:widthPercentageToDP(45),
        backgroundColor:'#E3625F',borderRadius:8,elevation:5}}>
            <Text style={{color:"white",fontSize:20,fontWeight:'300',marginLeft:8}}>Negative score factors</Text>
        </View>
    </View>
  )
}

export default Dashboard1