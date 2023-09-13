import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton/CustomButton'

const SocialSignInButton = () => {
    
    const onLoginGmailPressed = () =>{
        console.warn('Login w/ Gmail');
    };
  
    return (
    <>
      <CustomButton 
      text = "Log in with GMAIL" 
      onPress={onLoginGmailPressed}
      bgColor= "#F1948A"
      fgColor= "#DD4D44"
      />
    </>
  )
}

export default SocialSignInButton