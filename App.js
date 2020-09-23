import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>

      <View style={styles.container}>

        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/en/c/c6/UNISON_logo.png',
          }}
          style={{ width: 200, height: 100, resizeMode: 'stretch', }} />
      </View> 

        <View style={styles.inputcontainer}>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            fontSize: 20,
          }}
          defaultValue=" Membership Number" />
      </View>
      <View style={styles.inputcontainer}>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            fontSize: 20,
          }}
          defaultValue=" Password" />
      </View> 
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => {
            alert('You tapped the button!');
          } }
          title="Login"
          color="green" />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          onPress={() => {
            alert('You tapped the button!');
          } }
          title="Forgotten details?"
          color="green" />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          onPress={() => {
            alert('Create account');
          } }
          title='Create account'
          color="green" />
      </View>

      </ScrollView>
    </View>
    
    
  );
}



const Stack = createStackNavigator();

function App()  {
  return (
    <NavigationContainer> 
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator> 
      
    </NavigationContainer>
  );
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  inputcontainer: {
    flex: 1,
    padding: 10
  },
  button: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 5
  },
  buttonContainer: {
    margin: 1,
    padding: 5,
    justifyContent: 'center',
    flexDirection: 'row'
  }
});

export default App;

