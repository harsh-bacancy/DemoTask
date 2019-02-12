import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native'
import SwitchSigninSignup from '../components/SwitchSigninSignup'
import Signin from '../components/Signin'
import Signup from '../components/Signup'


export default class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signInPressStatus: true
        }
        console.log('log here', this.state.signInPressStatus)
    }
    render() {
        const { MainScreen, BottomScreen, } = styles
        return (
            <View style={MainScreen}>
                <View style={{ flex: .15 }}>
                    <SwitchSigninSignup
                        signInPressStatus={this.state.signInPressStatus}
                        onChange={(signInPressStatus) => this.setState({ signInPressStatus })}
                        RightText='Sign Up'
                        LeftText='Sign In'
                    />
                </View>
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
        flex: 1,
        backgroundColor: '#FFF',
    },
    Header: {
        flex: .5,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingBottom: 10
    },
    BottomScreen: {
        flex: 1,
        justifyContent: 'center',
    },
    BackImage: {
        height: 30,
        width: 30,
        margin: 10,
    }
});