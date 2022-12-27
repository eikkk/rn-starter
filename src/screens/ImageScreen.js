import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return <View>
            <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')} score = {1}/>
            <ImageDetail title="Mountain"  imageSource={require('../../assets/beach.jpg')} score = "10"/>
            <ImageDetail title="River"  imageSource={require('../../assets/mountain.jpg')} score = "9"/>
            <ImageDetail title="Rock"  imageSource={require('../../assets/forest.jpg')} score = "9"/>
        </View>
};

export default ImageScreen