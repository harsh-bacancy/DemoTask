import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native'
import { Action } from 'react-native-router-flux'
import SwitchSigninSignup from '../components/SwitchSigninSignup'
import Signin from '../components/Signin'
import Signup from '../components/Signup'


export default class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signInPressStatus: true
        }
    }
    render() {
        const { MainScreen, Header, BottomScreen, BackImage, } = styles
        return (
            
                <View style={MainScreen}>
                    <View style={Header}>
                        <Image
                            style={BackImage}
                            source={require('../assets/image/ic_back.png')}
                        />
                        <Text style={{ fontSize: 24, color: '#005AFF', }}>Back</Text>
                    </View>
                    <SwitchSigninSignup
                        signInPressStatus={this.state.signInPressStatus}
                        onChange={(signInPressStatus) => this.setState({ signInPressStatus })}
                        RightText='Sign Up'
                        LeftText='Sign In'
                    />
                    <View style={BottomScreen}>
                        {this.state.signInPressStatus
                            ?
                            <Signin />
                            :
                            <Signup />
                        }
                    </View>
                </View>
            
        );
    }
}
const styles = StyleSheet.create({
    MainScreen: {
        flex:1,
        backgroundColor: '#FFF',
        position: 'relative'
    },
    Header: {
        flex: .5,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingBottom: 10
        
    },
    BottomScreen: {
        flex: 5,
        justifyContent: 'center',
    },
    BackImage: {
        height: 30,
        width: 30,
        margin: 10,
        
        
    }
});