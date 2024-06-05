import { Image, StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
        navigation.navigate('Home');
    }, 2000)
}, [])
  return (
    <View style={{flex:1}}>
      <Image
        source={require('../asset/images/Splashscreen.jpg')}
        style={{width:'100%',height:'100%',flex:1}}
      />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})