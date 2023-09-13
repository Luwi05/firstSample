import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, Alert, BackHandler, KeyboardAvoidingView } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton/SocialSignInButton';
import { useNavigation, useFocusEffect} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
//import { createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth';
//import { FIREBASE_AUTH } from '../../../firebase';
//import { FIRESTORE_DB } from '../../../firebase';
import {firebase} from '../../../firebase';

const EMAIL_REGEX = /^[\w.-]+@gmail\.com$/i

const RegisterPage = () => {
    // const {control, handleSubmit, watch} = useForm({defaultValues: {Email: '@gmail.com',},}); auto may @gmail.com
    
    const {control, handleSubmit, watch} = useForm();

    const pwd = watch("Password");

    const [ email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const [firstName, setFirstName] = useState('');

    const [middleName, setMiddleName] = useState('');

    const [lastName, setLastName] = useState('');

    const [age, setAge] = useState('');

    const [contactNo, setContactNo] = useState('');

    const [address, setAddress] = useState('');

    const [job, setJob] = useState('');
    
    const navigation = useNavigation();

    //const auth = FIREBASE_AUTH;

    //clicking mobile back button mapapapunta sa login
    useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.navigate('LoginPage');
        return true;
      };

      const backHandler = BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => {
        backHandler.remove();
      };
    }, [navigation])
    );

    const onLoginPressed = () =>{
        //console.warn("LoginPage");
        navigation.navigate("LoginPage");
    };

    //real
    const onRegisterPressed = async (data,) =>{
    
       await firebase.auth().createUserWithEmailAndPassword(data.Email, data.Password)
      .then(() =>{
        firebase.auth().currentUser.sendEmailVerification({
          handleCodeInApp: true,
          url: 'https://skilled-45f58.firebaseapp.com',
        })
        .then(() => {
          alert('Verification email sent. Check your email before logging in.')
        }).catch((error) =>{
          alert(error.message)
        })
        .then( async () =>{
          await firebase.firestore().collection('users')
          .doc(firebase.auth().currentUser.uid)
          .set({
            firstName: data.FirstName,
            middleName: data.MiddleName,
            lastName: data.LastName,
            age: data.Age,
            contactNo: data.ContactNumber,
            address: data.Address,
            job: data.Job,
            email: data.Email,
            uid: firebase.auth().currentUser.uid,
          })
        })
        .catch((error) =>{
          alert(error.message)
        })
      })
      .catch((error) =>{
        alert(error.message)
      })

      navigation.replace('LoginPage');
    };

    const onTermsOfUsePressed = () =>{
        navigation.navigate('TermsOfUsePage');
    };

    const onPrivacyPolicyPressed = () =>{
        navigation.navigate('PrivacyPolicyPage');
    };


    //fake
    // const onRegisterPressed = async (data) =>{
    //   try{
    //       const response = await createUserWithEmailAndPassword(auth, data.Email, data.Password)
    //       .then(() =>{
    //         auth.currentUser.sendEmailVerification({
    //           handleCodeInApp: true,
    //           url: 'skilled-45f58.firebaseapp.com',
    //         })
    //       .then(() =>{
    //         alert('Verification email sent. Check your email.')
    //       }).catch((error) =>{
    //         alert(error.message)
    //       }).then(() =>{
    //           FIRESTORE_DB.collection('users')
    //         .doc(auth.currentUser.uid)
    //         .set({
    //           firstName,
    //           middleName,
    //           lastName,
    //           age,
    //           contactNo,
    //           address,
    //           job,
    //           email,
    //         })
    //       })
    //       .catch((error) =>{
    //         alert(error.message)
    //       })
    //       })
    //       .catch((error) =>{
    //         alert(error.message)
    //       })
    //   } catch (error){
    //       Alert.alert('Oops', error.message);
    //   } 
    // };

    // const onTermsOfUsePressed = () =>{
    //   console.warn('TERMS AND CONDITION');
    // };

    // const onPrivacyPolicyPressed = () =>{
    //   console.warn('PRIVACY POLICY');
    // };
  
    return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <KeyboardAvoidingView style = {styles.root}>
      <Text 
      style ={styles.title}>Create an Account
      </Text>

      <CustomInput 
      name="FirstName"
      control={control}
      placeholder= "First Name"
      onChangeText={(firstName) => setFirstName(firstName)}
      rules={{required: 'First Name is required.'}} 
      />

      <CustomInput
      name="MiddleName"
      control={control}
      placeholder= "Middle Name"
      onChangeText={(middleName) => setMiddleName(middleName)}
      />

      <CustomInput 
      name="LastName"
      control={control}
      placeholder= "Last Name"
      onChangeText={(lastName) => setLastName(lastName)}
      rules={{required: 'Last Name is required.'}} 
      />

      <CustomInput 
      name="Age"
      control={control}
      keyboardType='numeric'
      placeholder= "Age"
      onChangeText={(age) => setAge(age)}
      rules={{required: 'Age is required.',
      maxLength: {value: 2, message: 'Input your age honestly.'}}} 
      />

      <CustomInput
      name="ContactNumber"
      control={control}
      keyboardType='numeric'
      placeholder= "Contact Number" 
      onChangeText={(contactNo) => setContactNo(contactNo)}
      rules={{required: 'Contact Number is required and must start with 09.',
      maxLength: {value: 11, message: 'Contact Number must consist of 11 digits only.',
      minLength: {value: 11, message: 'Contact Number must consist of 11 digits only.'}}}}
      />

      <CustomInput
      name="Address"
      control={control}
      placeholder= "Address"
      onChangeText={(address) => setAddress(address)}
      rules={{required: 'Address is required.'}} 
      />

      <CustomInput
      name="Job"
      control={control}
      onChangeText={(job) => setJob(job)}
      placeholder= "Skilled Service Offered"
      />

      <CustomInput
      name="Email"
      control={control}
      placeholder= "Email"
      value = {email} 
      autoCapitalize="none"
      onChangeText = {(text) => setEmail(text)}
      rules={{required: 'Email is required.',
      pattern: {value: EMAIL_REGEX, message: 'Email is invalid.'},}}
      />
      
      <CustomInput
      name="Password"
      placeholder= "Password" 
      secureTextEntry={true}
      control={control}
      value = {password}
      onChangeText={(text) => setPassword(text)}
      rules={{required: 'Password is required.',
      minLength: {value: 6, message: 'Password should be minimum 6 characters long.'}}}
      />

      <CustomInput
      name="RepeatPassword"
      placeholder= "Repeat Password" 
      secureTextEntry={true}
      control={control}
      rules={{validate: value => value === pwd || 'Password do not match.'}}
      />

      <CustomButton 
      text = "Register"
      onPress={handleSubmit(onRegisterPressed)}
      />
      
      <Text 
      style = {styles.text}>
        By registering, you confirm 
        that you accept our{' '}
        <Text 
        style = {styles.link} 
        onPress = {onTermsOfUsePressed}>Terms of Use
        </Text> 
        {' '} and {' '} 
        <Text 
        style = {styles.link} 
        onPress = {onPrivacyPolicyPressed}>Privacy Policy.</Text>
      </Text>

      <SocialSignInButton/>

      <CustomButton 
      text = "Have an account? Log in" 
      onPress={onLoginPressed}
      type = "TERTIARY"
      />

    </KeyboardAvoidingView>
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
    },
    text:{
        color: 'gray',
        marginVertical: 10,
    },
    link:{
         color: "#F1948A",
    },
});

export default RegisterPage;