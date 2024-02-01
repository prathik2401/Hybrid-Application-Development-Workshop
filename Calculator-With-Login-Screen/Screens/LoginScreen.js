import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function LoginScreen({ navigation }) {
    return (
      <View style={styles.container}>
        {/* Image View */}
        <View style={styles.imageContainer}>
          <Image style={{width: 350, height: 80, justifyContent: 'center'}} source={require('../assets/logo (1).png')}/>
        </View>
  
        {/* Email Input View */}
        <Text style={{paddingTop: 40, paddingLeft: 10, fontWeight: 'semibold', fontSize: 18}}>E-mail</Text>
        <TextInput style={styles.emailInputContainer} placeholder='Enter your e-mail'></TextInput>
  
        {/* Email Input View */}
        <Text style={{paddingTop: 40, paddingLeft: 10, fontWeight: 'semibold', fontSize: 18}}>Password</Text>
        <TextInput style={styles.emailInputContainer} placeholder='Enter your password' secureTextEntry={true}></TextInput>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Calculator')}>
            <Text style={{color: 'white'}}>Submit</Text>
            </TouchableOpacity> 
          </View>
      </View>
    );
  }
  
  // Your styles here
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      margin: 20
    },
    imageContainer: {
      marginTop: 150,
      justifyContent: 'center',
      alignItems: 'center',
    },
    emailInputContainer: {
      borderRadius: 50,
      borderColor: '#1F2544',
      borderWidth: 1.2,
      width: 370,
      height: 50,
      paddingLeft: 20,
    },
    buttonContainer: {
      marginTop: 40,
      height: 50,
      width: 100,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0f92c7',
      borderRadius: 50,
    }
  },
  );
  