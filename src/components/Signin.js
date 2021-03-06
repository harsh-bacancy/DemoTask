import React, { Component } from 'react'
import { View, BackHandler, Text, TouchableOpacity, AsyncStorage, ScrollView, Platform } from 'react-native'
import ToggleSwitch from 'toggle-switch-react-native'
import InputField from '../components/InputField'
import { Actions } from 'react-native-router-flux'
import { KEY_USER_MAIL, KEY_USER_PASSWORD, } from '../helper/constant'
import RNExitApp from 'react-native-exit-app'
import styles from '../assets/styles'

export default class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            getemail: '',
            getpassword: '',
            isPasswordVisible: false,
            isOnState: true
        }
    }
    _isChangeState = () => {
        const { isOnState } = this.state
        this.setState({ isOnState: !isOnState });
        console.warn(isOnState)
    }

    async componentWillMount() {
        this.setState({ getemail: await AsyncStorage.getItem(KEY_USER_MAIL) });
        this.setState({ getpassword: await AsyncStorage.getItem(KEY_USER_PASSWORD) });
    }
    _validateLogin = () => {
        if (this.state.getemail == this.state.email && this.state.getpassword == this.state.password) {
            Actions.thankyou();
        }
        else {
            console.warn('email:', this.state.getemail, ' password', this.state.getpassword);
            Actions.mainscreen();
        }
    };

    render() {
        const {
            MainView,
            ToggleSwitchView,
            ButtonView,
            ButtonArea,
            ButtonText
        } = styles
        return (
            <ScrollView keyboardShouldPersistTaps='handled'>
                <View style={MainView}>
                    <InputField
                        fImageSource={require('../assets/image/ic_user.png')}
                        placeholder='Enter User Name or Email'
                        lImageSource={require('../assets/image/ic_cancel.png')}
                        inputChange={(email) => this.setState({ email: email })}
                        inputValue={this.state.email}
                        onPressC={() => this.setState({ email: '' })}
                        error={this.state.getemail}
                        editable={true}
                    />
                    <InputField
                        fImageSource={require('../assets/image/ic_password.png')}
                        placeholder='Password'
                        lImageSource={this.state.isPasswordVisible ? require('../assets/image/ic_invisible.png') : require('../assets/image/ic_visible.png')}
                        inputChange={(password) => this.setState({ password })}
                        inputValue={this.state.password}
                        secureTextEntry={this.state.isPasswordVisible}
                        onPressC={() => this.setState({ isPasswordVisible: !this.state.isPasswordVisible })}
                        error={'ex.' + this.state.getpassword}
                        editable={true}
                    />
                    <View style={ToggleSwitchView}>
                        <ToggleSwitch
                            isOn={this.state.isOnState}
                            onColor='#00DE62'
                            offColor='gray'
                            label='Save Password'
                            labelStyle={{ color: 'black', fontWeight: '900' }}
                            size='medium'
                            onToggle={this._isChangeState}
                        />
                    </View>
                    <View style={ButtonArea}>
                        <TouchableOpacity
                            style={ButtonView}
                            onPress={(Platform.OS == 'ios') ? () => RNExitApp.exitApp() : () => BackHandler.exitApp()}
                        >
                            <Text style={ButtonText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={ButtonView}
                            onPress={this._validateLogin}
                        >
                            <Text style={ButtonText}>Log In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

        );
    }
}
