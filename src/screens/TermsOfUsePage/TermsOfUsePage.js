import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

const TermsOfUsePage = () => {
  return (
    <SafeAreaView style = {{flex: 1, backgroundColor: "#D7BDE2" }}>
    <ScrollView showsVerticalScrollIndicator={false} style={styles.background}>
    <View style = {styles.root}>
      
      <Text style = {styles.Title}>
        Terms Of Use
      </Text>

      <Text style = {styles.Sub}>
        Last updated August 29, 2023
      </Text>

      <Text style = {styles.Sub2}>
        AGREEMENT TO OUR LEGAL TERMS
      </Text>

      <Text style = {styles.Main}>
      We are Servisyo ("Company," "we," "us," "our"), a company registered in the Philippines at Sta. Cruz, Laguna 4009.
      </Text>

      <Text style = {styles.Main}>
      We operate the mobile application Servisyo (the "App"), as well as any other related products
      and services that refer or link to these legal terms (the "Legal Terms") (collectively, the
      "Services").
      </Text>

      <Text style = {styles.Main}>
      You can contact us by phone at 09217140004, email at ServisyoAdmin@gmail.com, or by mail to Sta. Cruz, Laguna 4009, Philippines.
      </Text>

      <Text style = {styles.Main}>
      These Legal Terms constitute a legally binding agreement made between you, whether
      personally or on behalf of an entity ("you"), and Servisyo, concerning your access to and use of
      the Services. You agree that by accessing the Services, you have read, understood, and agreed
      to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL
      TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND
      YOU MUST DISCONTINUE USE IMMEDIATELY.
      </Text>

      <Text style = {styles.Main}>
      We will provide you with prior notice of any scheduled changes to the Services you are using.
      The modified Legal Terms will become effective upon posting or notifying you by
      ServisyoAdmin@gmail.com, as stated in the email message. By continuing to use the Services
      after the effective date of any changes, you agree to be bound by the modified terms.
      </Text>

      <Text style = {styles.Main}>
      The Services are intended for users who are at least 18 years old. Persons under the age of 18
      are not permitted to use or register for the Services.
      </Text>

      <Text style = {styles.Main}>
      We recommend that you print a copy of these Legal Terms for your records.
      </Text>

    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
root:{
    alignItems: 'flex-start',
    padding: 20,
    backgroundColor: "#D7BDE2",
    flex: 1,
},
background:{
    backgroundColor: "#D7BDE2",
},
Title:{
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: '10%',
    alignSelf: 'center',
},
Sub:{
    fontSize: 20,
    marginTop: '2%',
    alignSelf: 'center',
},
Sub2:{
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: '5%',
},
Main:{
    fontSize: 15,
    marginTop: '2%',
    textAlign: 'justify',
},
});

export default TermsOfUsePage;

