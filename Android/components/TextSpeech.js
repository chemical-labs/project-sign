import React, { Component } from 'react'
import { View, Text, StatusBar, TextInput, Image, TouchableOpacity } from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'
import * as Speech from 'expo-speech'
import * as Clipboard from 'expo-clipboard'

export default class TextSpeech extends Component{
    constructor(props){
        super(props)

        this.state = {
            data: null
        }
    }

    speak(){
        Speech.speak(this.state.data)
    }

    copy(){
        Clipboard.setString(this.state.data)
        alert('Text Copied !')
    }

    render(){
        return(
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#191A19' }}>
                <StatusBar barStyle={"light-content"} backgroundColor={"#191A19"} />
                <View style={{ alignItems: 'center', marginTop: 10 }}>
                    <Icons name='text-outline' size={30} color="white" />
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>Text To Speech</Text>
                    <Text style={{ color: 'white' }}>In here you can communicate with people</Text>
                    <Text style={{ color: 'white' }}>With Text To Speech</Text>
                </View>

                <View style={{ backgroundColor: 'black', padding: 5, height: 220, color: 'white', elevation: 15, marginTop: 65 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5 }}>
                        <Icons name='volume-high-outline' size={20} color="white" />
                        <Text style={{ color: 'white', fontSize: 13, marginLeft: 5, }}>English</Text>
                    </View>
                    <TextInput style={{ color: 'white', marginTop: 10, fontSize: 18 }} multiline={true} onChangeText={(val) => this.setState({ data: val })} placeholder="Type Something..." placeholderTextColor="grey" />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
                    <TouchableOpacity onPress={() => this.speak()}>
                        <Icons name="mic-outline" size={30} color={"white"} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.copy()}>
                        <Icons name='copy-outline' size={30} color={"white"} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
 }
