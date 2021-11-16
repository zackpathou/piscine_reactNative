import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Image
            style={styles.academy}
            source={require('./assets/akademy.png')}
        />
        <TextInput
             style={styles.input}
             placeholder="Email"
        />
        <TextInput
             style={styles.input}
             placeholder="Password"
                />
        <Image
             style={styles.Login}
            source={require('./assets/login.png')}
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',

  },
  academy: {
     width: 250,
     height: 250,
     margin: 50,
     },

    Login: {
         width: 200,
         height: 50,
         margin: 10,
         borderRadius: 15,
         },
    input: {
        width: 200,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 15,
      },
});
