import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Components
import Home from './components/Home.js'
import Record from './components/Record.js'
import TextSpeech from './components/TextSpeech.js'

export default class App extends Component{
    render(){
        const Stack = createNativeStackNavigator();
        return(
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} options={{
                        headerShown: false
                    }} />
                    <Stack.Screen name="Record" component={Record} options={{
                        headerTitle: '',
                        headerTintColor: 'white',
                        headerStyle: {
                            elevation: 0,
                            backgroundColor: '#191A19'
                        },
                    }} />
                    <Stack.Screen name="TextSpeech" component={TextSpeech} options={{
                        headerTitle: '',
                        headerTintColor: 'white',
                        headerStyle: {
                            elevation: 0,
                            backgroundColor: '#191A19'
                        },
                    }} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
