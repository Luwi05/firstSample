import React, {useEffect} from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Alert, BackHandler} from 'react-native';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchbarPage from '../../screens/SearchbarPage';



const HomePage = () => {
  
  //pindot doubleback button ng device para mag alert ng exit sa app
  this.exitAppTimer = null;
  React.useEffect(() =>{
    const backAction = () => {
      if(this.exitAppTimer){
        clearTimeout(this.exitAppTimer);
        this.exitAppTimer = null;
        Alert.alert("Exit", "Are you sure you want to close the app?",[
          {
            text: "No",
            onPress: (null),
            style: "cancel"
          },
          {
            text: "Yes",
            onPress:() => BackHandler.exitApp()
          }
        ]);
      } else {
        this.exitAppTimer = setTimeout(() =>{
          clearTimeout(this.exitAppTimer);
          this.exitAppTimer = null;
        }, 1000);
      }
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    )
  },[])

  return (
    <SafeAreaView style = {styles.root}>
      <SearchBar/>
    </SafeAreaView>
    
    
  );
};

const styles = StyleSheet.create({
  root:{
    marginTop: -30,
    backgroundColor: "#D7BDE2",
    width: "100%",
    height: "100%",
  },
});

export default HomePage;