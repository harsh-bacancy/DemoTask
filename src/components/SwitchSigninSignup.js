import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet, Text, AsyncStorage } from 'react-native'

export default class SwitchSigninSignup extends Component {
    constructor(props){
        super(props);
        this.state={
            signInPressStatus : props.signInPressStatus,
            RightText : props.RightText,
            LeftText : props.LeftText
        }
    }
    _onHideUnderlay = () => {
        let signInPressStatus = true;
        // console.warn(this.state.signInPressStatus);
        // let change = true;
        this.setState({ signInPressStatus });
        this.props.onChange(signInPressStatus)
    }
    _onShowUnderlay = () => {
        let signInPressStatus = false;
        // console.warn("true");
        // let change = false;
        this.setState({ signInPressStatus });
        this.props.onChange(signInPressStatus)
    }
    render() {
        const { signInPressStatus, RightText, LeftText} = this.state
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
const styles = StyleSheet.create({
    TopScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        marginVertical: 10

    },
    RightbuttonPress: {
        flex: 1,
        borderColor: "#005AFF",
        backgroundColor: "#005AFF",
        borderWidth: 1,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        marginRight: 40
    },
    Rightbutton: {
        flex: 1,
        borderColor: "#005AFF",
        borderWidth: 1,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        marginRight: 40
    },
    LeftbuttonPress: {
        flex: 1,
        borderColor: "#005AFF",
        backgroundColor: "#005AFF",
        borderWidth: 1,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        marginLeft: 40

    },
    Leftbutton: {
        flex: 1,
        borderColor: "#005AFF",
        borderWidth: 1,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        marginLeft: 40
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        color: "#000000"
    },
    welcomePress: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        color: "#ffffff"
    }
});