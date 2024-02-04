import { View, Text } from 'react-native'
import React from 'react'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import AntDesign from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Dashboard2 = () => {
  return (
    <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
      <View style={{height:heightPercentageToDP(20),width:widthPercentageToDP(43),
    backgroundColor:'#E3E6E8',borderRadius:8,elevation:5}}>
        <View style={{alignSelf:'center',marginTop:20}}>
        <AntDesign name="desktop-mac-dashboard" size={45} color="#5CB0BA" />
        </View>
        <Text style={{alignSelf:'center',marginTop:22,fontWeight:'bold',fontSize:18,color:'black'}}>Website Report</Text>
        <Text style={{alignSelf:'center',marginTop:7,color:'#5CB0BA'}}>73/100</Text>
      </View>
      <View style={{height:heightPercentageToDP(20),width:widthPercentageToDP(43),
    backgroundColor:'#E3E6E8',borderRadius:8,elevation:5}}>
        <View style={{alignSelf:'center',marginTop:20}}>
        <Ionicons name="speedometer-outline" size={45} color="#EB9244" />
        </View>
        <Text style={{alignSelf:'center',marginTop:22,fontWeight:'bold',fontSize:18,color:"black"}}>Page Speed</Text>
        <Text style={{alignSelf:'center',marginTop:7,color:"#EB9244"}}>3.42s</Text>
        
      </View>
    </View>
  )
}

export default Dashboard2