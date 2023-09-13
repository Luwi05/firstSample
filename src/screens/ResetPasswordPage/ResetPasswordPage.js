import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, BackHandler } from 'react-native'
import React, {useState} from 'react'
import Logo from '../../../assets/samplelogo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation, useFocusEffect} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const ResetPasswordPage = () => {
    const {control, handleSubmit} = useForm();
    
    const {height} = useWindowDimensions();

    const navigation = useNavigation();

    //clicking mobile back button mapapapunta sa home
    useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.navigate('ForgotPasswordPage');
        return true;
      };

      const backHandler = BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => {
        backHandler.remove();
      };
    }, [navigation])
    );

    const onLoginPressed = () =>{
        console.warn('Login!!');
        navigation.navigate("LoginPage");
    };

    const onSubmitPressed = () =>{
        console.warn('Submit!!');
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
      name="Code"
      control={control} 
      placeholder= "Code"
      rules={{required: 'Confirmation code is required.'}} 
      />   

      <CustomInput
      name="Enter New Password"
      control={control}
      placeholder= "Enter New Password" 
      secureTextEntry={true}
      rules={{required: 'Password is required.',
      minLength: {value: 5, message: 'Password should be minimum 6 characters long.'}}}
      />  

      <CustomButton 
      text = "Submit" 
      onPress={handleSubmit(onSubmitPressed)}
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
        alignItems: 'center',
        padding: 20,
        backgroundColor: "#D7BDE2",
    },
    logo: {
        width: '100%',
        maxWidth: 300,
        maxHeight: 200,
        marginBottom: '5%',
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        margin: 18,
        marginTop: '10%',
        marginBottom: '10%',
    },
    text:{
        color: 'gray',
        marginVertical: 10,
    },
    link:{
         color: "#F1948A",
    },
    bottom:{
        marginBottom: '44%',
    },
});

export default ResetPasswordPage;