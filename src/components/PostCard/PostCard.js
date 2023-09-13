import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, KeyboardAvoidingView, TouchableOpacity, Alert} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {firebase} from '../../../firebase';

const PostCard = () => {
    
  const [name, setName] = useState('');

  const onLikePressed = () =>{
    Alert.alert('Like!!')
  };

  const onCommentPressed = () =>{
    Alert.alert('Comment!!')
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

  return (
    <SafeAreaView style = {styles.container}>
    
    {/* first post */}
    <View style = {styles.avatarContainerFirst}>
        <Image source = {require("../../../assets/userprofile1.jpg")} style={styles.avatar}></Image>
        
        <View style = {styles.inputContainer}>
            <Text style = {styles.username}>{name.firstName} {name.middleName} {name.lastName}</Text>
            <Text style = {styles.dateText}>a month ago</Text>
            <Text style = {styles.txtPost}>Looking for Plumber at Sta. Cruz Area.        </Text>

            <View style = {styles.btn}>
            <TouchableOpacity 
              onPress={onLikePressed}>
              <MaterialCommunityIcons name='thumb-up-outline' size={30} color="#9B59B6"/>
            </TouchableOpacity>
            <Text style = {styles.textbtn1}>Like</Text>

            <TouchableOpacity 
              onPress={onCommentPressed}>
              <MaterialCommunityIcons name='comment-outline' size={30} color="#9B59B6"/>  
            </TouchableOpacity>
            <Text style = {styles.textbtn2}>Comment</Text>
            </View>
        </View>
    </View>

    {/* second post */}
    <View style = {styles.avatarContainer}>
        <Image source = {require("../../../assets/userprofile1.jpg")} style={styles.avatar}></Image>
        
        <View style = {styles.inputContainer}>
            <Text style = {styles.username}>{name.firstName} {name.middleName} {name.lastName}</Text>
            <Text style = {styles.dateText}>a month ago</Text>
            <Text style = {styles.txtPost}>Looking for Plumber at Sta. Cruz Area.        </Text>

            <View style = {styles.btn}>
            <TouchableOpacity 
              onPress={onLikePressed}>
              <MaterialCommunityIcons name='thumb-up-outline' size={30} color="#9B59B6"/>
            </TouchableOpacity>
            <Text style = {styles.textbtn1}>Like</Text>

            <TouchableOpacity 
              onPress={onCommentPressed}>
              <MaterialCommunityIcons name='comment-outline' size={30} color="#9B59B6"/>  
            </TouchableOpacity>
            <Text style = {styles.textbtn2}>Comment</Text>
            </View>
        </View>
    </View>

    {/* third post */}
    <View style = {styles.avatarContainer}>
        <Image source = {require("../../../assets/userprofile1.jpg")} style={styles.avatar}></Image>
        
        <View style = {styles.inputContainer}>
            <Text style = {styles.username}>{name.firstName} {name.middleName} {name.lastName}</Text>
            <Text style = {styles.dateText}>a month ago</Text>
            <Text style = {styles.txtPost}>Looking for Plumber at Sta. Cruz Area.        </Text>

            <View style = {styles.btn}>
            <TouchableOpacity 
              onPress={onLikePressed}>
              <MaterialCommunityIcons name='thumb-up-outline' size={30} color="#9B59B6"/>
            </TouchableOpacity>
            <Text style = {styles.textbtn1}>Like</Text>

            <TouchableOpacity 
              onPress={onCommentPressed}>
              <MaterialCommunityIcons name='comment-outline' size={30} color="#9B59B6"/>  
            </TouchableOpacity>
            <Text style = {styles.textbtn2}>Comment</Text>
            </View>
        </View>
    </View>

    {/* fourth post */}
    <View style = {styles.avatarContainer}>
        <Image source = {require("../../../assets/userprofile1.jpg")} style={styles.avatar}></Image>
        
        <View style = {styles.inputContainer}>
            <Text style = {styles.username}>{name.firstName} {name.middleName} {name.lastName}</Text>
            <Text style = {styles.dateText}>a month ago</Text>
            <Text style = {styles.txtPost}>Looking for Plumber at Sta. Cruz Area.        </Text>

            <View style = {styles.btn}>
            <TouchableOpacity 
              onPress={onLikePressed}>
              <MaterialCommunityIcons name='thumb-up-outline' size={30} color="#9B59B6"/>
            </TouchableOpacity>
            <Text style = {styles.textbtn1}>Like</Text>

            <TouchableOpacity 
              onPress={onCommentPressed}>
              <MaterialCommunityIcons name='comment-outline' size={30} color="#9B59B6"/>  
            </TouchableOpacity>
            <Text style = {styles.textbtn2}>Comment</Text>
            </View>
        </View>
    </View>

    {/* fifth post */}
    <View style = {styles.avatarContainer}>
        <Image source = {require("../../../assets/userprofile1.jpg")} style={styles.avatar}></Image>
        
        <View style = {styles.inputContainer}>
            <Text style = {styles.username}>{name.firstName} {name.middleName} {name.lastName}</Text>
            <Text style = {styles.dateText}>a month ago</Text>
            <Text style = {styles.txtPost}>Looking for Plumber at Sta. Cruz Area.        </Text>

            <View style = {styles.btn}>
            <TouchableOpacity 
              onPress={onLikePressed}>
              <MaterialCommunityIcons name='thumb-up-outline' size={30} color="#9B59B6"/>
            </TouchableOpacity>
            <Text style = {styles.textbtn1}>Like</Text>

            <TouchableOpacity 
              onPress={onCommentPressed}>
              <MaterialCommunityIcons name='comment-outline' size={30} color="#9B59B6"/>  
            </TouchableOpacity>
            <Text style = {styles.textbtn2}>Comment</Text>
            </View>
        </View>
    </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
container:{
    padding: 20,
    marginTop: -20,
},
avatarContainerFirst:{
    flexDirection: "row",
    backgroundColor: "#C39BD3",
    width: "100%",
    marginTop: -10,
    marginBottom: 20,
},
avatarContainer:{
    flexDirection: "row",
    backgroundColor: "#C39BD3",
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
},
inputContainer:{
    flexDirection: "column",
    textAlign: 'justify',
},
avatar:{
    alignItems: 'baseline',
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 16,
},
username:{
    fontSize: 15,
},
dateText:{
    color: "gray",
    fontSize: 13,
},
txtPost:{
    fontSize: 15,
    marginTop: 10,
},
btn:{
    marginTop: 20,
    flexDirection: "row",
},
textbtn1:{
    marginTop: 5,
    margin: 5,
    marginRight: 100,
},
textbtn2:{
    marginTop: 5,
    margin: 5,
},

});

export default PostCard;

