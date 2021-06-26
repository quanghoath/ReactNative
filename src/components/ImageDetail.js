import React, { Component } from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'

const ImageDetal =({title,imageSource})=>{
    return (
        <View>
            <Image source={imageSource} />
            <Text>{title}</Text>
        </View> 
    )
}
const style = StyleSheet.create({

})
export default ImageDetal