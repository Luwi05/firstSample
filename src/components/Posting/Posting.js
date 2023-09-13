import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import React, {useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomInput from '../CustomInput/CustomInput';
import {useForm} from 'react-hook-form';


const Posting = () => {

  const [post, setPost] = useState('');

  //const {control, handleSubmit, watch} = useForm();

  return (
    
    <SafeAreaView style = {styles.container}>
      
      <KeyboardAvoidingView style = {styles.inputContainer}>
        <Image source = {require("../../../assets/userprofile1.jpg")} style={styles.avatar}></Image>
        
        <TextInput 
          style={styles.post}
          placeholder="Looking For?                                     ">
        </TextInput>

        {/* <CustomInput
        name="Post"
        control={control}
        placeholder= "Looking For?"
        onChangeText={(post) => setPost(post)}
        rules={{minLength: {value: 5,
        maxLength: {value: 11,}}}} 
        /> */}
    
        <TouchableOpacity style = {styles.postbtn}>
          <Text style = {styles.textbtn}>Post</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop: -20,
    padding: 20,
  },
  inputContainer:{
    margin: 32,
    flexDirection: "row",
    borderColor: "black",
    borderRadius: 5,
    borderStyle: 'solid',
  },
  avatar:{
    alignItems: 'baseline',
    marginTop: -33,
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 16,
  },
  post:{
    marginLeft: -12,
    marginTop: -30,
    paddingHorizontal: 20, 
    paddingVertical: 10, 
    borderColor: 'white', 
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#C39BD3",
    height: 40,
  },
  postbtn:{
    marginTop: -20,
    marginLeft: 10,
  },
  textbtn:{
    fontWeight: 'bold',
  },
});

export default Posting;

