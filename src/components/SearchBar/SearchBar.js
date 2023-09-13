import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const SearchBar = () => {
    
    const navigation = useNavigation();

    const onSearchBarPressed = () =>{
       navigation.navigate("SearchBarPage");
    };

    return (
    <SafeAreaView style ={{marginHorizontal:20,}}>
      <TouchableOpacity onPress={onSearchBarPressed} style = {styles.searchBox}>
        <Text>Search</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    searchBox: {
        paddingHorizontal: 20, 
        paddingVertical: 10, 
        borderColor: 'white', 
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#C39BD3",
        height: 40,
    },
});

export default SearchBar;