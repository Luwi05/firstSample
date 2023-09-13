import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, BackHandler, SafeAreaView, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
//import { FIRESTORE_DB } from '../../../firebase';
//import { FIREBASE_AUTH } from '../../../firebase';
import {firebase} from '../../../firebase';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const UserProfilePage = () => {

  const navigation = useNavigation();

  const [name, setName] = useState('');

  const onLogoutPressed = () =>{
    firebase.auth().signOut;
    navigation.replace("LoginPage");
  };

  const onChangePasswordPressed = () =>{
    firebase.auth().sendPasswordResetEmail(firebase.auth().currentUser.email)
    .then(() =>{
      alert('Check your email to change your password.')
    }).catch((error) =>{
      alert(error)
    })
  };

  const onWalletPressed = () =>{
    Alert.alert('Wallet!!')
  };

  const onLocationPressed = () =>{
    Alert.alert('Location!!')
  };

  const onSchedulePressed = () =>{
    Alert.alert('Schedule!!')
  };

  const onJobPressed = () =>{
    Alert.alert('Job!!')
  };

  const onCredentialsPressed = () =>{
    Alert.alert('Credentials!!')
  };

  const onFeedbacksPressed = () =>{
    Alert.alert('Feedbacks!!')
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
  
  //clicking mobile back button mapapapunta sa home
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.navigate('HomePage');
        return true;
      };

      const backHandler = BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => {
        backHandler.remove();
      };
    }, [navigation])
  );
    
  return (
    <SafeAreaView style = {{flex: 1, backgroundColor: "#D7BDE2" }}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.background}>
        
        <View style = {styles.root}>
        <Image 
        style = {styles.userProfilePicture}
        source={require('../../../assets/userprofile1.jpg')}
         />

        <Text style = {styles.userName}> Name: {name.firstName} {name.middleName} {name.lastName}</Text>
        <Text style = {styles.aboutUSer}> Email: {firebase.auth().currentUser?.email}</Text>
        <Text style = {styles.aboutUSer}> Skilled Service Offered: {name.job}</Text>
        <Text style = {styles.aboutUSer}> User Id: {firebase.auth().currentUser?.uid}</Text>

        <View style = {styles.activity}>
          <Text style = {styles.activityText}> Activity</Text>
        </View>

        {/* //first */}
        <View style = {styles.userInfoWrapperFirst}>
          <View style = {styles.userInfoItem}>
            <Text style = {styles.userInfoTitle}>22</Text>
            <Text style = {styles.userInfoSubtitle}>Hired</Text>
          </View>
          <View style = {styles.userInfoItem}>
            <Text style = {styles.userInfoTitle}>4.9</Text>
            <Text style = {styles.userInfoSubtitle}>Ratings</Text>
          </View>
          <View style = {styles.userInfoItem}>
            <Text style = {styles.userInfoTitle}>0</Text>
            <Text style = {styles.userInfoSubtitle}>Cancelled</Text>
          </View>
        </View>

        {/* //second */}
        <View style = {styles.userInfoWrapperSecond}>
          <View style = {styles.userInfoItem}>
            <TouchableOpacity
              onPress = {onWalletPressed}>
              <MaterialCommunityIcons name='wallet-outline' size={40} color="black"/>
            </TouchableOpacity>
            <Text style = {styles.userInfoSubtitle}>Wallet</Text>
          </View>
          <View style = {styles.userInfoItem}>
            <TouchableOpacity
              onPress={onLocationPressed}>
              <MaterialCommunityIcons name='map-marker' size={40} color="black"/>
            </TouchableOpacity>
            <Text style = {styles.userInfoSubtitle}>Location</Text>
          </View>
          <View style = {styles.userInfoItem}>
            <TouchableOpacity
              onPress={onSchedulePressed}>  
              <MaterialCommunityIcons name='calendar-check-outline' size={40} color="black"/>
            </TouchableOpacity>
            <Text style = {styles.userInfoSubtitle}>Schedule</Text>
          </View>
        </View>

        {/* //third */}
        <View style = {styles.userInfoWrapperSecond}>
          <View style = {styles.userInfoItem}>
            <TouchableOpacity
              onPress={onJobPressed}>
              <MaterialCommunityIcons name='briefcase-variant' size={40} color="black"/>
            </TouchableOpacity>
            <Text style = {styles.userInfoSubtitle}>Job</Text>
          </View>
          <View style = {styles.userInfoItem}>
            <TouchableOpacity
              onPress={onCredentialsPressed}>
              <MaterialCommunityIcons name='card-account-details-outline'size={40} color="black"/>
            </TouchableOpacity>
            <Text style = {styles.userInfoSubtitle}>Credentials</Text>
          </View>
          <View style = {styles.userInfoItem}>
            <TouchableOpacity
              onPress={onFeedbacksPressed}>
              <MaterialCommunityIcons name='emoticon-outline'size={40} color="black"/>
            </TouchableOpacity>
            <Text style = {styles.userInfoSubtitle}>Feedbacks</Text>
          </View>
        </View>
        
        <View style = {styles.userBtnWrapper}>
          <TouchableOpacity 
          style = {styles.userButton}
          onPress={onChangePasswordPressed}>
            <Text style = {styles.userBtnText}>Change Password</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          style = {styles.userButton}
          onPress={onLogoutPressed}>
            <Text style = {styles.userBtnText}>Log Out</Text>
          </TouchableOpacity>
        </View>  
        
        {/* <CustomButton
        text = {'Change Password'}
        onPress={onChangePasswordPressed}
        /> */}
      
        {/* <CustomButton
        text = {'Log out'}
        onPress={onLogoutPressed}
        /> */}

        </View>

      </ScrollView>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  root:{
    alignItems: 'center',
    padding: 20,
    backgroundColor: "#D7BDE2",
    flex: 1,
    justifyContent: 'center',   
  },
  activity:{
    alignSelf: 'baseline',
    backgroundColor: "#C39BD3",
    width: '100%',
  },
  activityText:{
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    color: 'black',
  },
  userProfilePicture:{
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  userName:{
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  aboutUSer:{
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10,
  },
  userBtnWrapper:{
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginTop: 50,
  },
  userButton:{
    borderColor: 'white',
    backgroundColor: "#C39BD3",
    borderWidth: 2,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
  },
  userBtnText:{
    color: 'black'
  },
  userInfoWrapperFirst:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
    backgroundColor: "#C39BD3",
  },
  userInfoWrapperSecond:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 1,
    marginVertical: 20,
    backgroundColor: "#C39BD3",
  },
  userInfoWrapperThird:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 1,
    marginVertical: 20,
    backgroundColor: "#C39BD3",
  },
  userInfoItem:{
    justifyContent: 'center',
  },
  userInfoTitle:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  userInfoSubtitle:{
    fontSize: 12,
    textAlign: 'center',
  },
  background:{
    backgroundColor: "#D7BDE2",
  },
});

export default UserProfilePage;