import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  // return <Text style={styles.text}>Hiiiiii!</Text>;
  return <View>
    <Text style={styles.text}>Hieiii!</Text>
    <Button title="Go to Components demo"
    onPress={() =>{
      console.log('Button pressed');
      navigation.navigate("Components")
    }}
    />
    <Button
    title="Go to List Screen"
    onPress={() => navigation.navigate('List')}/>
    <Button title="Go to image screen"
    onPress={() => navigation.navigate("Image")}
    />
    <Button title="Go to counter screen"
    onPress={() => navigation.navigate("Counter")}/>
    <Button title="Go to color screen"
    onPress={() => navigation.navigate("Color")}/>
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default HomeScreen;