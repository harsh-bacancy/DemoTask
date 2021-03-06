import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux';
import styles from '../assets/styles'

export default class ThankYou extends Component {
    constructor(props) {
        super();

    }
    render() {
        const { MainView, button } = styles
        return (
            <View style={MainView}>
                <View style={{ flex: 1, }}>
                    <Image
                        style={{ height: 64, width: 64, marginVertical: 40, }}
                        source={require('../assets/image/ic_stackofpapers.png')}
                    />
                </View>
                <Text style={{ color: '#005aff', marginVertical: 90 }}>Thank You for Sign-in</Text>
                <View style={{
                    flex: 1, justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    marginBottom: 40
                }}>
                    <Image
                        style={{ height: 30, width: 30, marginVertical: 90, }}
                        source={require('../assets/image/ic_checkmark.png')}
                    />
                    <TouchableOpacity
                        style={button}
                        onPress={() => Actions.popTo('mainscreen')}
                    >
                        <Text style={{ color: '#FFF', }}>Log Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
