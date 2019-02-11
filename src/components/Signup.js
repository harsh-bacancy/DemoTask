import React from 'react'
import { View, TextInput, TouchableOpacity, Image, StyleSheet, Text, AsyncStorage, ScrollView } from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker'
import ValidationComponent from 'react-native-form-validator'
import moment from 'moment';
import { reduxForm, Field } from 'redux-form'
import { Actions } from 'react-native-router-flux'
import InputField from '../components/InputField'
import SwitchSigninSignup from '../components/SwitchSigninSignup'
import { KEY_USER_MAIL, KEY_USER_PASSWORD, } from '../helper/constant'



class Signup extends ValidationComponent {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            gender: '',
            signInPressStatus: false,
            isDateTimePickerVisible: false,
            birthDate: 'Birthdate',

        }
    }

    _validateData = () => {
        // let {signInPressStatus} =this.state
        {
            this.state.signInPressStatus
                ? this.setState({ gender: 'Male' })
                : this.setState({ gender: 'Female' })
        }
        console.warn(this.state.gender)
        // console.warn(this.state.signInPressStatus)
        if (
            this.validate({
                firstName: { required: true },
                lastName: { required: true },
                address: { required: true },
                gender: { required: true },
                email: { email: true, required: true },
                password: { minlength: 3, maxlength: 10, required: true }
            })
        ) {
            console.warn('--------------------', this.validate)
            this._signInAsync();
        }
    }
    _signInAsync = async () => {
        const { email, password } = this.state
        console.warn(this.state.email)
        console.warn(this.state.password)
        await AsyncStorage.setItem(KEY_USER_MAIL, email);
        await AsyncStorage.setItem(KEY_USER_PASSWORD, password);
        Actions.mainscreen();
    };
    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        let mDate = moment(date).format('L');
        this.setState({ birthDate: mDate })
        this._hideDateTimePicker();
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

        console.log("-------------------", birthDate)
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={MainView}>
                    <Field
                        component={InputField}
                        name='firstname'
                        fImageSource={require('../assets/image/ic_user.png')}
                        placeholder='First Name'
                        lImageSource={require('../assets/image/ic_cancel.png')}
                        inputChange={(firstName) => this.setState({ firstName })}
                        inputValue={this.state.firstName}
                        onPressC={(firstName) => this.setState({ firstName })}
                        error={this.getErrorsInField('firstName')}
                    />
                    <Field
                        component={InputField}
                        name='lastname'
                        fImageSource={require('../assets/image/ic_user.png')}
                        placeholder='Last Name'
                        lImageSource={require('../assets/image/ic_cancel.png')}
                        inputChange={(lastName) => this.setState({ lastName })}
                        inputValue={this.state.lastName}
                        onPressC={(lastName) => this.setState({ lastName })}
                        error={this.getErrorsInField('lastName')}
                    />
                    <Field
                        component={InputField}
                        name='address'
                        fImageSource={require('../assets/image/ic_home.png')}
                        placeholder='Address'
                        multiLine={true}
                        inputChange={(address) => this.setState({ address })}
                        inputValue={this.state.address}
                        onPressC={(address) => this.setState({ address })}
                        error={this.getErrorsInField('address')}
                    />
                    <View style={SwitchMaleFemale}>
                        <Text style={{ fontSize: 20, color: '#000' }}>Gender: </Text>
                        <SwitchSigninSignup
                            onChange={(signInPressStatus) => this.setState({ signInPressStatus })}
                            signInPressStatus={this.state.signInPressStatus}
                            LeftText='Male'
                            RightText='Female'
                        />
                    </View>
                    <View style={{ width: '90%', justifyContent: 'center', alignItems: 'center', marginBottom: 5, }}>
                        <Text style={{ color: 'red' }}>{this.getErrorsInField('gender')}</Text>
                    </View>
                    <View style={EmailInput}>
                        <TextInput
                            style={{ width: '90%' }}
                            placeholder='Email Address'
                            onChangeText={(email) => this.setState({ email })}
                            value={this.state.email}

                        />
                        <Image
                            style={ImageView}
                            source={require('../assets/image/ic_info.png')}
                        />
                    </View>
                    <View style={{ width: '90%', justifyContent: 'center', alignItems: 'center', marginBottom: 5, }}>
                        <Text style={{ color: 'red' }}>{this.getErrorsInField('email')}</Text>
                    </View>
                    <View style={PasswordInput}>
                        <Text>Password:</Text>
                        <TextInput
                            style={{ width: '80%' }}
                            placeholder='***'
                            onChangeText={(password) => this.setState({ password })}
                            value={this.state.password}
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={{ width: '90%', justifyContent: 'center', alignItems: 'center', marginBottom: 5, }}>
                        <Text style={{ color: 'red' }}>{this.getErrorsInField('password')}</Text>
                    </View>
                    <View style={DateSelect}>
                        <TouchableOpacity
                            style={{ flexDirection: 'column', alignItems: 'center' }}
                            onPress={this._showDateTimePicker}>
                            <Text style={{ color: '#000' }}>Select Birthdate</Text>
                            <Text style={{ color: '#000', fontSize: 20 }}>{birthDate}</Text>

                        </TouchableOpacity>
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
                            onPress={this._validateData}
                        >
                            <Text style={ButtonText}>Save</Text>

                        </TouchableOpacity>
                    </View>
                    {/* <View style={{ flex: 1, backgroundColor: 'red' }}>
                        <Text style={{ fontSize: 30, color: '#000', }}>
                            {this.getErrorMessages()}
                        </Text>
                    </View> */}
                </View>
            </ScrollView>

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
        width: '90%',
        padding: 10,
        margin: 10,
        // backgroundColor: 'red',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        borderWidth: 1,
    }
});

export default reduxForm({
    singupform: 'singupform',
})(Signup);