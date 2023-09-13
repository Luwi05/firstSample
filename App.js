import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Navigation from './src/Navigation';



const App = () => {
  
  return (
    
    <SafeAreaView style={styles.container}>
     <Navigation/>
      <StatusBar style="auto" />
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D7BDE2",
  },
});

export default App;
