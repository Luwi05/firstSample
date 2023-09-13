import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <SafeAreaView style = {{flex: 1, backgroundColor: "#D7BDE2" }}>
    <ScrollView showsVerticalScrollIndicator={false} style={styles.background}>
    <View style = {styles.root}>
      
      <Text style = {styles.Title}>
        Privacy Policy
      </Text>

      <Text style = {styles.Sub}>
        Last updated August 29, 2023
      </Text>

      <Text style = {styles.Main}>
        This privacy notice for Servisyo ("Company," "we," "us," or "our"), describes how and why we
        might collect, store, use, and/or share ("process") your information when you use our services
        ("Services"), such as when you:
      </Text>

      <Text style = {styles.Main2}>
      ▪ Download and use our mobile application (Servisyo), or any other application of ours that
        links to this privacy notice
      </Text>

      <Text style = {styles.Main2}>
      ▪ Engage with us in other related ways, including any sales, marketing, or events
      </Text>

      <Text style = {styles.Main}>
      Questions or concerns? Reading this privacy notice will help you understand your privacy
      rights and choices. If you do not agree with our policies and practices, please do not use our
      Services. If you still have any questions or concerns, please contact us at
      ServisyoAdmin@gmail.com.    
      </Text>

      <Text style = {styles.Sub}>
      SUMMARY OF KEYPOINTS
      </Text>

      <Text style = {styles.Main}>
      This summary provides key points from our privacy notice, but you can find out more
      details about any of these topics by clicking the link following each key point or by using
      our table of contents below to find the section you are looking for.  
      </Text>

      <Text style = {styles.Main}>
      ▪ What personal information do we process? When you visit, use, or navigate our Services, we
      may process personal information depending on how you interact with Servisyo and the
      Services, the choices you make, and the products and features you use. Learn more
      about personal information you disclose to us. 
      </Text>

      <Text style = {styles.Main}>
      ▪ Do we process any sensitive personal information? We may process sensitive personal
        information when necessary with your consent or as otherwise permitted by applicable law.
        Learn more about sensitive information we process.
      </Text>

      <Text style = {styles.Main}>
      ▪ Do we receive any information from third parties? We may receive information from public
        databases, marketing partners, social media platforms, and other outside sources. Learn more
        about information collected from other sources.
      </Text>

      <Text style = {styles.Main}>
      ▪ How do we process your information? We process your information to provide, improve, and
        administer our Services, communicate with you, for security and fraud prevention, and to comply
        with law. We may also process your information for other purposes with your consent. We
        process your information only when we have a valid legal reason to do so. Learn more
        about how we process your information.
      </Text>

      <Text style = {styles.Main}>
      ▪ In what situations and with which parties do we share personal information? We may
        share information in specific situations and with specific third parties. Learn more about when
        and with whom we share your personal information.
      </Text>

      <Text style = {styles.Main}>
      ▪ How do we keep your information safe? We have organizational and technical processes and
        procedures in place to protect your personal information. However, no electronic transmission
        over the internet or information storage technology can be guaranteed to be 100% secure, so
        we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties
        will not be able to defeat our security and improperly collect, access, steal, or modify your
        information. Learn more about how we keep your information safe.
      </Text>

      <Text style = {styles.Main}>
      ▪ What are your rights? Depending on where you are located geographically, the applicable
        privacy law may mean you have certain rights regarding your personal information. Learn more
        about your privacy rights.
      </Text>

      <Text style = {styles.Main}>
      ▪ How do you exercise your rights? The easiest way to exercise your rights is by submitting
        a data subject access request, or by contacting us. We will consider and act upon any request in
        accordance with applicable data protection laws.
      </Text>

      {/* <Text style = {styles.Sub}>
      TABLE OF CONTENTS
      </Text>

      <Text style = {styles.Main}>
      1. WHAT INFORMATION DO WE COLLECT?
      </Text>

      <Text style = {styles.Main}>
      2. HOW DO WE PROCESS YOUR INFORMATION?
      </Text>

      <Text style = {styles.Main}>
      3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
      </Text>

      <Text style = {styles.Main}>
      4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
      </Text>

      <Text style = {styles.Main}>
      5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
      </Text>

      <Text style = {styles.Main}>
      6. HOW LONG DO WE KEEP YOUR INFORMATION?
      </Text>

      <Text style = {styles.Main}>
      7. HOW DO WE KEEP YOUR INFORMATION SAFE?
      </Text>

      <Text style = {styles.Main}>
      8. DO WE COLLECT INFORMATION FROM MINORS?
      </Text>

      <Text style = {styles.Main}>
      9. WHAT ARE YOUR PRIVACY RIGHTS?
      </Text>

      <Text style = {styles.Main}>
      10. CONTROLS FOR DO-NOT-TRACK FEATURES
      </Text>

      <Text style = {styles.Main}>
      11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
      </Text>

      <Text style = {styles.Main}>
      12. DO WE MAKE UPDATES TO THIS NOTICE?
      </Text>

      <Text style = {styles.Main}>
      13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
      </Text>

      <Text style = {styles.Main}>
      14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
      </Text>

      <Text style = {styles.Sub2}>
      SUMMARY OF KEYPOINTS
      </Text> */}


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
    justifyContent: 'space-evenly',
},
Title:{
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: '10%',
    alignSelf: 'center',
},
Sub:{
    fontSize: 20,
    marginLeft: '2%',
    marginTop: '2%',
    alignSelf: 'center',
},
Sub2:{
    fontSize: 20,
    marginLeft: '2%',
    marginTop: '2%',
},
Main:{
    fontSize: 15,
    marginLeft: '2%',
    marginTop: '2%',
    textAlign: 'justify',
},
Main2:{
    fontSize: 15,
    marginLeft: '5%',
    marginTop: '2%',
},
background:{
    backgroundColor: "#D7BDE2",
},

});

export default PrivacyPolicyPage;