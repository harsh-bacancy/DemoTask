import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet, Text, PixelRatio } from 'react-native'
import styles from '../assets/styles'


export default class SwitchSigninSignup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signInPressStatus: props.signInPressStatus,
            RightText: props.RightText,
            LeftText: props.LeftText
        }
    }
    _onHideUnderlay = () => {
        let signInPressStatus = true;
        this.setState({ signInPressStatus });
        this.props.onChange(signInPressStatus)
        console.log('hide--', signInPressStatus)
    }
    _onShowUnderlay = () => {
        let signInPressStatus = false;
        this.setState({ signInPressStatus });
        this.props.onChange(signInPressStatus)
        console.log('show--', signInPressStatus)
    }
    render() {
        const { signInPressStatus, RightText, LeftText } = this.state
        return (
            <View style={styles.TopScreen}>
                <TouchableOpacity
                    onPress={this._onHideUnderlay}
                    style={signInPressStatus ? styles.LeftbuttonPress : styles.Leftbutton}
                >
                    <Text style={signInPressStatus ? styles.welcomePress : styles.welcome}
                    >{LeftText}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this._onShowUnderlay}
                    style={!signInPressStatus ? styles.RightbuttonPress : styles.Rightbutton}
                >
                    <Text style={!signInPressStatus ? styles.welcomePress : styles.welcome}
                    >{RightText}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
