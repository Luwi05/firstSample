import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, {useState} from 'react'
import Logo from '../../../assets/samplelogo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const ForgotPasswordPage = () => {
    const {control, handleSubmit} = useForm();
    
    const {height} = useWindowDimensions();

    const navigation = useNavigation();

    const onLoginPressed = () =>{
        console.warn('Login!!');
        navigation.navigate("LoginPage");
    };

    const onSendPressed = () =>{
        console.warn('Password Send');
        navigation.navigate("ResetPasswordPage");
    };

    return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style = {styles.root}>
      <Text 
      style ={styles.title}>Reset Your Password
      </Text>

      <Image 
      source={Logo} 
      style = {[styles.logo, {height: height * 0.3}]} 
      resizeMode="contain"
      />

      <CustomInput
      name="Email"
      control={control} 
      placeholder= "Email"
      rules={{required: 'Email is required.'}} 
      />    

      <CustomButton 
      text = "Send" 
      onPress={handleSubmit(onSendPressed)}
      />
      
      <View style = {styles.bottom}>
      <CustomButton 
      text = "Back to Log In" 
      onPress={onLoginPressed}
      type = "TERTIARY"
      />
      </View>

    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    root:{
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: "#D7BDE2",
    },
    logo: {
        width: '100%',
        maxWidth: 300,
        maxHeight: 200,
        marginBottom: '15%',
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        margin: 18,
        marginTop: '15%',
        marginBottom: '15%',
    },
    bottom:{
        marginBottom: '44%',
    },
});

export default ForgotPasswordPage;