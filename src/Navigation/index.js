import { View, Text, StyleSheet, Alert } from 'react-native';
import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation,} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import LoginPage from '../screens/LoginPage';
import RegisterPage from '../screens/RegisterPage';
import EmailConfirmationPage from '../screens/EmailConfirmationPage';
import ForgotPasswordPage from '../screens/ForgotPasswordPage';
import ResetPasswordPage from '../screens/ResetPasswordPage';
import HomePage from '../screens/HomePage';

import NewsFeedPage from '../screens/NewsFeedPage';
import AgreementServicePage from '../screens/AgreementServicePage';
import MessagingPage from '../screens/MessagingPage';
import UserProfilePage from '../screens/UserProfilePage';

import NotificationPage from '../screens/NotificationPage';

import SearchbarPage from '../screens/SearchbarPage';

import EditProfilePage from '../screens/EditProfilePage';

import PrivacyPolicyPage from '../screens/PrivacyPolicyPage';

import PostingPage from '../screens/PostingPage';

import TermsOfUsePage from '../screens/TermsOfUsePage';

import { TouchableOpacity } from 'react-native-gesture-handler';

import {firebase} from '../../firebase';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const DrawerNav = createDrawerNavigator();

function Navigation  () {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name ="LoginPage" component={LoginPage} />
        <Stack.Screen name='BottomNav' component={BottomNav} />
        <Stack.Screen name ="RegisterPage" component={RegisterPage} />
        <Stack.Screen name ="EmailConfirmationPage" component={EmailConfirmationPage} />
        <Stack.Screen name ="ForgotPasswordPage" component={ForgotPasswordPage} />
        <Stack.Screen name ="ResetPasswordPage" component={ResetPasswordPage} />
        <Stack.Screen name ="NotificationPage" component={NotificationPage} />
        <Stack.Screen name = "SearchBarPage" component={SearchbarPage} />
        <Stack.Screen name = "EditProfilePage" component={EditProfilePage} />
        <Stack.Screen name='PrivacyPolicyPage' component={PrivacyPolicyPage} />
        <Stack.Screen name='TermsOfUsePage' component={TermsOfUsePage} />
        <Stack.Screen name='PostingPage' component={PostingPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function BottomNav () {

  return(
    <Tab.Navigator 
    screenOptions={{
      tabBarShowLabel: false,
      showIcon: true,
      tabBarActiveTintColor: "#9B59B6",
      tabBarInactiveTintColor: 'gray',
      tabBarLabelStyle: {
        fontSize: 12,
      },
      tabBarStyle: {
        position: 'absolute',
        backgroundColor: "#D7BDE2",
        height: 60,
        ...styles.shadow
      },
      headerStyle: {
        backgroundColor: "#D7BDE2",  
      },
      headerShown: true,
      headerTitleAlign: 'center',
      }}>
       
       <Tab.Screen 
       name="HomePageBttmNav" 
       component={Drawer}
       options={{title: 'Home',
       headerShown: false,
      tabBarIcon:({size, color})=>(
        <MaterialCommunityIcons name="home" size={size} color={color} />
      )
       }}
     />

     <Tab.Screen 
       name="NewsFeedPageBttmNav" 
       component={NewsFeedPage}
       options={{title: 'News Feed',
       tabBarIcon:({size, color})=>(
        <MaterialCommunityIcons name="post" size={size} color={color} />
      )
       }}
     />

      <Tab.Screen 
       name="AgreementServicePageBttmNav" 
       component={AgreementServicePage}
       options={{title: 'Add To Cart',
       tabBarIcon:({size, color})=>(
        <MaterialCommunityIcons name="handshake-outline" size={size} color={color} />
      )
       }}
     />

      <Tab.Screen 
       name="MessagingPageBttmNav" 
       component={MessagingPage}
       options={{title: 'Message',
       tabBarIcon:({size, color})=>(
        <MaterialCommunityIcons name="message-text" size={size} color={color} />
      )
       }}
     />

      <Tab.Screen 
       name="UserProfilePageBttmNav" 
       component={UserProfilePage}
       options={{title: 'User Profile',
       tabBarIcon:({size, color})=>(
        <MaterialCommunityIcons name="account-heart" size={size} color={color} />
      )
       }}
     />
     </Tab.Navigator>
  );
};

function Drawer () {
  
  const [name, setName] = useState('');

  const navigation = useNavigation();
  
  const onNotifPressed = () =>{
    console.warn('Notification Page');
    navigation.navigate("NotificationPage");
  };

useEffect(() =>{
  firebase.firestore().collection('users')
  .doc(firebase.auth().currentUser.uid).get()
  .then((snapshot) =>{
    if(snapshot.exists){
      setName(snapshot.data())
    }
    else{
      console.log('User does not exist')
    }
  })
},[])
 
return(
    <DrawerNav.Navigator 
    screenOptions={{
      drawerActiveTintColor: "#9B59B6",
      drawerInactiveTintColor: 'gray',
      headerStyle: {
        backgroundColor: "#D7BDE2",
      },
      drawerStyle: {
        ...styles.background 
      }}}>
      
      <DrawerNav.Screen 
      name='HomePage' 
      component={HomePage}
      options={{title: 'Welcome ' + name.firstName + '!', headerRight: () => (
        <TouchableOpacity onPress={onNotifPressed}>
          <MaterialCommunityIcons name="bell" size={30} color='black' />
        </TouchableOpacity>
      ), headerRightContainerStyle:{
        marginRight: 15,
      }}}
      />

    </DrawerNav.Navigator>
  );
};

const styles = StyleSheet.create({
    shadow:{
      shadowColor: "#7F5DF0",
      shadowOffset:{
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5,
    },
    background:{
      backgroundColor: "#D7BDE2",
    },
});

export default Navigation;