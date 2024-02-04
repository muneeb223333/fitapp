import { View, Text } from 'react-native'
import React from 'react'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Dashboard3 = () => {
  return (
    <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
        <View style={{height:heightPercentageToDP(20),width:widthPercentageToDP(43),
        backgroundColor:"#E3E6E8",borderRadius:8,elevation:5}}>
          <View style={{alignSelf:'center',marginTop:20}}>
          <MaterialCommunityIcons name="security" size={45} color='#5CB0BA' />
          </View>
          <Text style={{alignSelf:'center',marginTop:22,fontSize:18,
        fontWeight:'bold',color:'black'}}>Security</Text>
          <Text style={{alignSelf:'center',marginTop:7,color:"#5CB0BA"}}>Safe</Text>
        </View>

        <View style={{height:heightPercentageToDP(20),width:widthPercentageToDP(43),
        backgroundColor:"#E3E6E8",borderRadius:8,elevation:5}}>

<View style={{alignSelf:'center',marginTop:20}}>
          <FontAwesome5 name="desktop" size={45} color='#5CB0BA' />
          </View>
          
          
          <Text style={{alignSelf:'center',marginTop:22,fontSize:18,fontWeight:'bold',color:'black'}}>
            Desktop PageSpeed
          </Text>
          <Text style={{alignSelf:'center',marginTop:7,color:"#5CB0BA"}}>84/100</Text>
        </View>
      

    </View>
  )
}

export default Dashboard3