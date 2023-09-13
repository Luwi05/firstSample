import { View, Text, StyleSheet, BackHandler} from 'react-native';
import React from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

const NotificationPage = () => {
  
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
    <View style={styles.root}>
      <Text style ={styles.text}>Notification Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root:{
    alignItems: 'center',
    padding: 50,  
    backgroundColor: "#D7BDE2",
    width: "100%",
    height: "100%",
  },
  text:{
    fontSize: 20,
  }
});

export default NotificationPage