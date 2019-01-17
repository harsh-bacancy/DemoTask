import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Image, StyleSheet, Text, } from 'react-native'
import InputField from '../components/InputField'
import SwitchSigninSignup from '../components/SwitchSigninSignup'
import DateTimePicker from 'react-native-modal-datetime-picker'
import { Actions } from 'react-native-router-flux'
import { KEY_USER_MAIL, KEY_USER_PASSWORD, } from '../helper/constant'

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            signInPressStatus: false,
            isDateTimePickerVisible: false,
            birthDate: [],
        }
    }
    _signInAsync = async () => {
        await AsyncStorage.setItem(KEY_USER_MAIL, this.state.email);
        await AsyncStorage.setItem(KEY_USER_PASSWORD, this.state.password);
        Actions.mainscreen();
    };
    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        alert(date);
        // this.setState({birthDate : date});
        this._hideDateTimePicker();
        this.setState((state) => {
            birthDate: (date)
        });

    };
    render() {
        const { birthDate } = this.state
        const {
            MainView,
            SwitchMaleFemale,
            EmailInput,
            PasswordInput,
            ButtonArea,
            ButtonView,
            ButtonText,
            ImageView,
            DateSelect
        } = styles
        return (
            
                <View style={MainView}>
                    <InputField
                        fImageSource={require('../assets/image/ic_user.png')}
                        placeholder='First Name'
                        lImageSource={require('../assets/image/ic_cancel.png')}
                    />
                    <InputField
                        fImageSource={require('../assets/image/ic_user.png')}
                        placeholder='Last Name'
                        lImageSource={require('../assets/image/ic_cancel.png')}
                    />
                    <InputField
                        fImageSource={require('../assets/image/ic_home.png')}
                        placeholder='Address'
                        multiLine={true}
                    />
                    <View style={SwitchMaleFemale}>
                        <Text style={{ fontSize: 20, color: '#000' }}>Gender: </Text>
                        <SwitchSigninSignup
                            onChange={({ signInPressStatus }) => this.setState({ signInPressStatus })}
                            signInPressStatus={this.state.signInPressStatus}
                            LeftText='Male'
                            RightText='Female'
                        />
                    </View>
                    <View style={EmailInput}>
                        <TextInput
                            placeholder='Email Address'
                            onChangeText={({ email }) => this.setState({ email })}
                            value={this.state.email}
                        />
                        <Image
                            style={ImageView}
                            source={require('../assets/image/ic_info.png')}
                            
                        />
                    </View>
                    <View style={PasswordInput}>
                        <Text>Password:</Text>
                        <TextInput
                            placeholder='***'
                            onChangeText={({ password }) => this.setState({ password })}
                            value={this.state.password}
                        />
                    </View>
                    <View style={DateSelect}> 
                        <TouchableOpacity onPress={this._showDateTimePicker}>
                            <Text style={{color:'#000'}}>Select Birthdate</Text>
                        </TouchableOpacity>
                        <Text>Date: {birthDate}</Text>
                        <DateTimePicker
                            isVisible={this.state.isDateTimePickerVisible}
                            onConfirm={this._handleDatePicked}
                            onCancel={this._hideDateTimePicker}
                        />
                    </View>
                    <View style={ButtonArea}>
                        <TouchableOpacity
                            style={ButtonView}
                        >
                            <Text style={ButtonText}>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={ButtonView}
                            onPress={this._signInAsync}
                        >
                            <Text style={ButtonText}>Save</Text>
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
        // backgroundColor : 'red'

    },
    SwitchMaleFemale: {
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 10,
        // backgroundColor: 'red'
    },
    EmailInput: {
        width: '90%',
        // backgroundColor:'red',
        borderTopColor: 'gray',
        borderTopWidth: 1,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    PasswordInput: {
        width: '90%',
        // backgroundColor:'red',
        borderTopColor: 'gray',
        borderTopWidth: 1,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    ButtonArea: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-evenly',

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
    },
    ImageView: {
        height: 30,
        width: 30
    },
    DateSelect: {
        width:'90%',
        padding: 10,
        margin: 10,
        // backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent : 'space-evenly',
        borderRadius : 40,
        borderWidth: 1,
    }
});