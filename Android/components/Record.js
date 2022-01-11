import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, TextInput, StatusBar } from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'
import axios from 'axios'
import * as Animatable from 'react-native-animatable'

export default class Record extends Component{
    constructor(props){
        super(props)

        this.state = {
            velocity: 0
        }
    }

    componentDidMount(){

    }


    render(){
        return(
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#191A19' }}>
                <StatusBar barStyle={"light-content"} backgroundColor={"#191A19"} nimated={true} />
                
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <Icons name='hand-left-outline' size={60} style={{ marginTop: 15 }} color="white" />
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>Record</Text>
                    <Text style={{ color: 'white' }}>In here you can add some</Text>
                    <Text style={{ color: 'white' }}>Sign Language to make easier people</Text>
                    <Text style={{ color: 'white' }}>To Undestand</Text>
                </View>

                <View style={{ alignItems: 'center' }}>
                    {/*
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>Waiting For Sensors...</Text>
                    */}

                    <Animatable.View animation={{
                        from: {
                            opacity: 0
                        },
                        to: {
                            opacity: 1
                        }
                    }} iterationCount={Infinity} style={{ padding: 10, borderRadius: 100, borderWidth: 3, borderColor: 'white' }}>
                        <View style={{ padding: 10, borderRadius: 100, borderWidth: 3, borderColor: 'white' }}>
                            <View style={{ backgroundColor: 'white', padding: 10, borderRadius: 100 }}>
                            </View>
                        </View>
                    </Animatable.View>
                </View>

                <View style={{ alignItems: 'center', marginBottom: 15 }}>
                    <TextInput style={{ backgroundColor: 'white', elevation: 15, padding: 5, borderRadius: 5, color: 'black', width: 110, textAlign: 'center' }} placeholder="Name Sign" />
                    <TouchableOpacity style={{ backgroundColor: 'white', marginTop: 10, padding: 5, borderRadius: 5,  }}>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>Apply</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
