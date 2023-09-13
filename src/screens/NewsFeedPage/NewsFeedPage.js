import { View, StyleSheet, BackHandler, ScrollView, Text, FlatList, SafeAreaView, Alert} from 'react-native';
import React, {useEffect, useState}from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import Posting from '../../components/Posting/Posting';
import PostCard from '../../components/PostCard/PostCard';
//import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
//import Icon from 'react-native-ionicons';
//import PostCard from '../../components/PostCard/PostCard';
//import {firebase} from '../../../firebase';
//import { Container } from '../../components/Styles/FeedStyle';


const NewsFeedPage = () => {

  const navigation = useNavigation();

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
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style = {styles.root}>
    <Posting/>
    <PostCard/>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root:{
    alignItems: 'center',
    padding: 20,  
    backgroundColor: "#D7BDE2",
    width: "100%",
    height: "100%",
  },
});

export default NewsFeedPage;