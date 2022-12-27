import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'

const ListScreen = () => {
    // return <Text>some text</Text>\
    const arr = [
        {name: "Name1",age: 14},
        {name: "Name2",age: 14},
        {name: "Name4",age: 13},
        {name: "Name5",age: 14},
        {name: "Name6",age: 14},
        {name: "Name7",age: 14},
        {name: "Name8",age: 14},
        {name: "Name9",age: 14},
        {name: "Name10",age: 14},
        {name: "Name11",age: 14},
        {name: "Name12",age: 14},
        {name: "Name13",age: 14},
    ];
    return <FlatList 
    showsHorizontalScrollIndicator={false}
    keyExtractor={(nameObj) => nameObj.name}
    data={arr}
    renderItem = {({item}) => {
        return <Text style={styles.textStyle}>{item.name} - {item.age}</Text>
    }}>

    </FlatList>
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
})

export default ListScreen