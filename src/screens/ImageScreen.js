import React, { Component } from 'react'
import {View,Text,StyleSheet} from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImageScreen =()=>{
    return (
        <View>
            <ImageDetail title="Forest a" imageSource={require('../../assets/forest.jpg')} />
            <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')} />
            <ImageDetail title = "Mountain" imageSource={require('../../assets/mountain.jpg')} />
        </View>
    )
}
const style = StyleSheet.create({

})
export default ImageScreen