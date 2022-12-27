import React from "react";
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
const  greeting = 'Some greeting text and stuff'
const name = 'Peter'

    return <View>
    <Text style={styles.textStyle}>{greeting}</Text>
    <Text style={styles.nameStyle}> My name is {name}</Text>
    </View>
};
// const ComponentsScreen = () => {
//     return <Text style={{fontSize: 30}}>Tsdfthe components screen</Text>;
// };

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 45
    },
    nameStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;