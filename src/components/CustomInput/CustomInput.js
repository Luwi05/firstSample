import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { Controller } from 'react-hook-form';

const CustomInput = ({control, name, rules = {}, placeholder, secureTextEntry, keyboardType}) => {
  return (
      
    <Controller 
        control={control}
        name={name}
        rules={rules}
        render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
          <>
        <View style = {[styles.container, {borderColor: error ? 'red' : 'white'}]}> 
        
        <TextInput 
        value={value} 
        onChangeText={onChange} 
        onBlur={onBlur}
        keyboardType={keyboardType}
        placeholder={placeholder}
        style={[styles.input, {}]} 
        secureTextEntry={secureTextEntry}
        />
        </View>
        {error && (<Text 
        style={{color: 'red', alignSelf: 'stretch'}}> 
        {error.message || 'Error'}</Text>)}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#C39BD3",
        width: 350,
        height: 50,
        justifyContent: 'center',
        
        borderColor: 'white',
        borderWidth: 1, 
        borderRadius: 10,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    input:{
        
    },
});

export default CustomInput;