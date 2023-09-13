import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, Alert } from 'react-native'
import React, {useState} from 'react'
import Logo from '../../../assets/samplelogo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import { FIREBASE_AUTH } from '../../../firebase';
import { EmailAuthProvider, reauthenticateWithCredential, sendEmailVerification } from 'firebase/auth';

const EmailConfirmationPage = () => {
    
    const {control, handleSubmit} = useForm();

    const {height} = useWindowDimensions();

    const navigation = useNavigation();

    // //try
    // const route = useRoute();

    
    const auth = FIREBASE_AUTH;

    //try
    // const [verificationCode, setVerificationCode] = useState('');

    //try
    // const handleVerificationCodeChange = (text) => {
    //     setVerificationCode(text);
    // };

    const onLoginPressed = () =>{
        console.warn('Login!!');
        navigation.navigate("LoginPage");
    };

    const onConfirmPressed = async () =>{
        // try
        // try{
        //     const credential = EmailAuthProvider.credential(
        //         auth.currentUser.email,
        //         verificationCode
        //     );
        //     await reauthenticateWithCredential(currentUser,credential);
        //     Alert.alert('Success')
        // } catch (error){
        //     Alert.alert('Error');
        // }
    };

    const onResendPressed = async () =>{
        // try
        // try{
        //     await sendEmailVerification(currentUser);
        //     Alert.alert('Success');
        // } catch (error){
        //     Alert.alert('Error');
        // }
    };
  
    return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style = {styles.root}>
      <Text 
      style ={styles.title}>Confirm Your Email
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

      <CustomInput
      name="Code"
      control={control}
      placeholder= "Enter Your Confirmation Code"
      rules={{required: 'Confirmation code required.'}} 
      />    

      <CustomButton 
      text = "Confirm" 
      onPress={handleSubmit(onConfirmPressed)}
      />

      <CustomButton 
      text = "Resend Code" 
      onPress={onResendPressed}
      type = "SECONDARY"
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

export default EmailConfirmationPage;