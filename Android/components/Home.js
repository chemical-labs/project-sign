import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, StatusBar, TextInput } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icons from 'react-native-vector-icons/Ionicons'
import axios from 'axios'

export default class Menu extends Component{
    render(){
        let Tabs = createBottomTabNavigator()
        return(
            <Tabs.Navigator labeled={false} screenOptions={({ route }) => ({
                activeTintColor: 'red',
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: 'white',
                    elevation: 0,
                    width: 300,
                    marginLeft: 25,
                    marginRight: 25,
                    borderRadius: 20,
                    marginBottom: 25,
                    position: 'absolute'
                },
            })}>
                <Tabs.Screen name="Index" component={Index} options={{ headerShown: false, tabBarIcon: ({ color, size }) => (
                    <Icons name='home-outline' size={30} color="black" />
                ) }}/>

                <Tabs.Screen name="Settings" component={Settings} options={{ headerShown: false, tabBarIcon: ({ color, size }) => (
                    <Icons name='cog-outline' size={30} color="black" />
                ) }}/>
            </Tabs.Navigator>
        )
    }
}

class Settings extends Component{
    render(){
        return(
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#191A19' }}>
            </View>
        )
    }
}

class Index extends Component{
    render(){
        return(
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#191A19' }}>
                <StatusBar barStyle={'light-content'} backgroundColor={"#191A19"} animated={true} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ marginTop: 25, marginLeft: 20, flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity>
                            <Image source={{ uri: "https://66.media.tumblr.com/8e62088f156fa2f2588593aac770ee97/tumblr_pc2dwbi4u91rsbo1mo1_500.jpg" }} style={{ width: 50, height: 50, borderRadius: 100, borderWidth: 2, borderColor: 'white' }} />
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                            <Text style={{ color: 'white', fontSize: 16 }}>Wellcome Back</Text>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Fajar Firdaus</Text>
                        </View>
                    </View>

                    <View style={{ marginTop: 30, marginRight: 30 }}>
                        <TouchableOpacity>
                            <Icons name='notifications-outline' size={30} color='white' />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ marginTop: 55, marginLeft: 10}}>
                    <View>
                        <Text style={{ fontSize: 23, color: "white", fontWeight: 'bold' }}>What are we gonna talking</Text>
                        <Text style={{ fontSize: 23, color: 'white', fontWeight: 'bold' }}>About today ? </Text>
                    </View>

                    <View style={{ flexDirection: 'column', marginTop: 10 }}>
                        <Text style={{ color: 'white' }}>Last Interactions</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={{ flexDirection: 'column', marginTop: 10, alignItems: 'center' }}>
                                <Image source={require('../assets/icons/example.jpg')} style={{ width: 50, height: 50, borderRadius: 50, borderColor: 'white', borderWidth: 2 }}/>
                                <Text style={{ color: 'white', marginTop: 5 }}>@James</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'column', marginTop: 15, padding: 10, borderRadius: 5 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <TouchableOpacity style={{ alignItems: 'center', padding: 10,  }} onPress={() => this.props.navigation.navigate('Record')}>
                                <Icons name="mic-outline" size={30} color="white" />
                                <Text style={{ color: 'white' }}>Record</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ alignItems: 'center', padding: 10,  }} onPress={() => this.props.navigation.navigate('TextSpeech')}>
                                <Icons name="text-outline" size={30} color="white" />
                                <Text style={{ color: 'white' }}>Text</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ alignItems: 'center', padding: 10, }}>
                                <Icons name="ear-outline" size={30} color="white" />
                                <Text style={{ color: 'white' }}>Interact</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 25 }}>
                            <TouchableOpacity style={{ alignItems: 'center', padding: 10 }}>
                                <Icons name="chatbubbles-outline" size={30} color="white" />
                                <Text style={{ color: 'white' }}>Chats</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
