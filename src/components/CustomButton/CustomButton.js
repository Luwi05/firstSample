import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, type = "PRIMARY", bgColor, fgColor}) => {
  return (
    <Pressable 
    onPress={onPress} 
    style = {[
        styles.container, 
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
    ]}>
    <Text style = {[
        styles.text, styles[`text_${type}`],
        fgColor ? {color: fgColor} : {},
        ]}>{text}
    </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        
        borderColor: 'white',
        borderWidth: 1, 
        borderRadius: 10,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    container_PRIMARY:{
        backgroundColor: "#633974",
        borderRadius: 10,
    },
    container_SECONDARY:{
        borderColor: "#633974",
        borderWidth: 2,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    container_TERTIARY:{
        borderColor: 'rgba(0, 0, 0, 0)',
        borderRadius: 10,
    },
    text:{
        fontWeight: 'bold',
        color: 'white',
    },
    text_SECONDARY:{
        color: "#633974",
    },
    text_TERTIARY:{
        color: 'white'
    },
});

export default CustomButton;