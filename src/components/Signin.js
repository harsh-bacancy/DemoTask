import React, { Component } from 'react'
import { View, TextInput, Image, Text, StyleSheet, TouchableOpacity, ScrollView, AsyncStorage } from 'react-native'
import ToggleSwitch from 'toggle-switch-react-native'
import InputField from '../components/InputField'
import { Actions } from 'react-native-router-flux'
import { KEY_USER_MAIL, KEY_USER_PASSWORD, } from '../helper/constant'

export default class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            getemail: '',
            getpassword: '',
            isOnState: true
        }
    }
    // _isChangeState = () => {
    //     const { isOnState }=this.state
    //     this.setState({isOnState :!isOnState});
    //     isOn={isOnState}
    //     console.warn(isOnState)
    // }

    async componentWillMount() {
        this.setState({ getemail: await AsyncStorage.getItem(KEY_USER_MAIL) });
        this.setState({ getpassword: await AsyncStorage.getItem(KEY_USER_PASSWORD) });
    }
    _ValidateLogin = () => {
        if (this.state.getemail == this.state.email && this.state.getpassword == this.state.password) {
            Actions.thankyou();
        }
        else {
            console.warn(this.state.getemail, this.state.getpassword);
            Actions.mainscreen();
        }
    };
    render() {
        const { MainView,
            EmailInput,
            PasswordInput,
            ic_Image,
            ic_CancleImage,
            ic_PasswordImage,
            ToggleSwitchView,
            ButtonView,
            ButtonArea,
            ButtonText
        } = styles
        return (
            
                <View style={MainView}>
                    <InputField
                        fImageSource={require('../assets/image/ic_user.png')}
                        placeholder='Enter User Name or Email'
                        lImageSource={require('../assets/image/ic_cancel.png')}
                        inputChange={(email) => this.setState({ email })}
                        inputValue={this.state.email}
                    />
                    <InputField
                        fImageSource={require('../assets/image/ic_password.png')}
                        placeholder='Password'
                        lImageSource={require('../assets/image/ic_invisible.png')}
                        inputChange={(password) => this.setState({ password })}
                        inputValue={this.state.password}
                    />
                    {/* <View style={PasswordInput}>
                        <Image style={ic_Image} source={require('../assets/image/ic_password.png')} />
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <TextInput
                                placeholder='Password'
                            />
                            <Image style={ic_PasswordImage} source={require('../assets/image/ic_invisible.png')} />
                        </View>
                    </View> */}
                    <View style={ToggleSwitchView}>
                        <ToggleSwitch
                            isOn={true}
                            onColor='#00DE62'
                            offColor='gray'
                            label='Save Password'
                            labelStyle={{ color: 'black', fontWeight: '900' }}
                            size='medium'
                            onToggle={(isOn) => console.log('changed to : ', isOn)}
                        />
                    </View>
                    <View style={ButtonArea}>
                        <TouchableOpacity
                            style={ButtonView}
                        >
                            <Text style={ButtonText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={ButtonView}
                            onPress={this._ValidateLogin}
                        >
                            <Text style={ButtonText}>Log In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            
        );
    }
}
const styles = StyleSheet.create({
    MainView: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    EmailInput: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
        borderBottomWidth: 2,
        borderBottomColor: 'gray'
    },
    PasswordInput: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
        borderBottomWidth: 2,
        borderBottomColor: 'gray'
    },
    ic_Image: {
        height: 20,
        width: 20,
        margin: 10
    },
    ic_CancleImage: {
        height: 20,
        width: 20,
        margin: 10,
    },
    ic_PasswordImage: {
        height: 20,
        width: 20,
        margin: 10,
    },
    ToggleSwitchView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '90%',
        marginVertical: 10
    },
    ButtonArea: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-evenly',
        marginVertical: 40
    },
    ButtonView: {
        backgroundColor: '#005AFF',
        padding: 15,
        borderRadius: 50,
        width: '35%',
        margin: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ButtonText: {
        color: '#FFF'
    }
});