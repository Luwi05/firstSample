import { View, StyleSheet, BackHandler } from 'react-native';
import React from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

const AgreementServicePage = () => {

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
    <View style = {styles.root}>
  
    </View>
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

export default AgreementServicePage;