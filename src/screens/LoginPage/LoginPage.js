import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput, Alert } from 'react-native';
import React, {useEffect, useState} from 'react';
import Logo from '../../../assets/samplelogo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton/SocialSignInButton';
import { useNavigation } from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
//import { FIREBASE_AUTH } from '../../../firebase';
//import {signInWithEmailAndPassword } from 'firebase/auth';
import {firebase} from '../../../firebase';




const EMAIL_REGEX = /^[\w.-]+@gmail\.com$/i

const LoginPage = () => {

    const {height} = useWindowDimensions();
    
    const navigation = useNavigation();

    const {control, handleSubmit, formState: {error}} = useForm();

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');
    
    const [loading, setLoading] = useState(false);
    
    const [loading2, setLoading2] = useState(false);

    //const auth = FIREBASE_AUTH;

    //try handle user state changes
    const [initializing, setInitializing] = useState(true);
    
    const [user, setUser] = useState();

    function onAuthStateChanged(user){
        setUser(user);
        if(initializing) setInitializing(false);
    }

    useEffect(() =>{
        const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    if (initializing) return null;

    

    const onLoginPressed = async (data) =>{
        
        if (loading){
            return;
        }
        setLoading(true);

        try {
            const response = await firebase.auth().signInWithEmailAndPassword(data.Email, data.Password);
                
                console.log(response);
                navigation.replace("BottomNav");
                   
        } catch (error) {
            Alert.alert('Oops', error.message);
        } finally{
            setLoading(false);
        }
    };    
    
    const onForgotPasswordPressed = async (data) =>{
        if (loading2){
            return;
        }
        setLoading2(true);

        try {
            await firebase.auth().sendPasswordResetEmail(data.Email);

            Alert.alert('Forgot Password', 'Check your email to change your password.');
                         
        } catch (error) {
            Alert.alert('Oops', error.message);
        } finally{
            setLoading2(false);
        }
    };

    const onRegisterPressed = async () =>{
        //console.warn('Create Account');
        navigation.navigate("RegisterPage");
    };
  
    return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style = {styles.root}>
      <Image 
      source={Logo} 
      style = {[styles.logo, {height: height * 0.3}]} 
      resizeMode="contain"
      />

      <CustomInput 
      name="Email"
      placeholder= "Email"
      control={control}
      onChangeText = {(text) => setEmail(text)}
      rules={{required: 'Email is required.',
      pattern: {value: EMAIL_REGEX, message: 'Email is invalid.'},}}
      />
      
      <CustomInput 
      name="Password"
      placeholder= "Password"
      secureTextEntry={true}
      onChangeText={(text) => setPassword(text)}
      control={control}
      rules={{required: 'Password is required.', 
      minLength: {value: 6, message: 'Password should be minimum 6 characters long.'}}} 
      /> 

      <CustomButton 
      text = {loading ? 'Loading...' : 'Log in'}
      onPress={handleSubmit(onLoginPressed)}
      />
      
      <CustomButton 
      text = {loading2 ? 'Loading...' : 'Forgot Password?'}
      onPress={handleSubmit(onForgotPasswordPressed)}
      type = "TERTIARY"
      />

      <SocialSignInButton/>

      <CustomButton 
      text = "Don't have an account? Create one" 
      onPress={onRegisterPressed}
      type = "TERTIARY"
      />

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
        marginTop: '30%',
        marginBottom: '15%',
    }
});

export default LoginPage;