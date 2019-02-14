import React from 'react'
import { View, TextInput, TouchableOpacity, Image, Text, AsyncStorage, ScrollView, Modal } from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker'
import ValidationComponent from 'react-native-form-validator'
import moment from 'moment';
import { Field } from 'redux-form'
import InputField from '../components/InputField'
import SwitchSigninSignup from '../components/SwitchSigninSignup'
import { KEY_USER_MAIL, KEY_USER_PASSWORD, } from '../helper/constant'
import styles from '../assets/styles'


export default class Signup extends ValidationComponent {
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
            setModalVisible: false,
            editable: true
        }
    }
    _validateData = () => {
        // let {signInPressStatus} =this.state
        {
            this.state.signInPressStatus
                ? this.setState({ gender: 'Male' })
                : this.setState({ gender: 'Female' })
        }
        console.log(this.state.gender)
        console.log('here data', this.getErrorsInField('firstName'))
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
            console.log('--------------------', this.validate)
            this.setisEditable(!this.state.editable);
            this._signInAsync();
        }
    }
    _signInAsync = async () => {
        const { email, password } = this.state
        console.warn(this.state.email)
        console.warn(this.state.password)
        await AsyncStorage.setItem(KEY_USER_MAIL, email);
        await AsyncStorage.setItem(KEY_USER_PASSWORD, password);
        // Actions.mainscreen();
    };
    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        let mDate = moment(date).format('L');
        this.setState({ birthDate: mDate })
        this._hideDateTimePicker();
    };
    setModalVisible(visible) {
        this.setState({ setModalVisible: visible })
    }
    setisEditable(isEditable) {
        console.warn(this.state.editable)
        this.setState({ editable: isEditable })
    }
    render() {
        const { birthDate, setModalVisible, editable } = this.state
        const {
            MainView,
            SwitchMaleFemale,
            EmailInput,
            PasswordInput,
            ButtonArea,
            ButtonView,
            ButtonViewDisable,
            ButtonText,
            ImageView,
            DateSelect
        } = styles

        console.log("-------------------", birthDate)
        return (
            //Main View
            <ScrollView style={{ flex: 1 }} keyboardShouldPersistTaps='handled'>
                {/* modelView start */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={setModalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(!setModalVisible)
                    }}>
                    <TouchableOpacity
                        style={{ flex: 1, backgroundColor: '#FFFFFF99' }}
                        onPress={() => this.setModalVisible(!setModalVisible)}>
                    </TouchableOpacity>
                    <View style={{ flex: .4, backgroundColor: '#EEE', alignItems: 'center', justifyContent: 'flex-end', borderTopEndRadius: 30, borderTopStartRadius: 30, marginHorizontal: 5, }}>
                        <Text style={{ fontSize: 20, padding: 10 }}>Ex. Example@example.com</Text>
                        <View style={{ height: 40 }}>

                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                this.setModalVisible(!setModalVisible);
                            }}>
                            <Image
                                style={ImageView}
                                source={require('../assets/image/ic_cancel.png')}
                            />
                        </TouchableOpacity>
                        <View style={{ height: 20 }}>

                        </View>
                    </View>
                </Modal>
                {/* modelView over */}
                <View style={MainView}>
                    <Field
                        component={InputField}
                        name='firstname'
                        fImageSource={require('../assets/image/ic_user.png')}
                        placeholder='First Name'
                        lImageSource={require('../assets/image/ic_cancel.png')}
                        inputChange={(firstName) => { this.setState({ firstName }) }}
                        inputValue={this.state.firstName}
                        onPressC={() => this.setState({ firstName: '' })}
                        error={this.getErrorsInField('firstName')}
                        editable={editable}
                    />
                    <Field
                        component={InputField}
                        name='lastname'
                        fImageSource={require('../assets/image/ic_user.png')}
                        placeholder='Last Name'
                        lImageSource={require('../assets/image/ic_cancel.png')}
                        inputChange={(lastName) => this.setState({ lastName })}
                        inputValue={this.state.lastName}
                        onPressC={() => this.setState({ lastName: '' })}
                        error={this.getErrorsInField('lastName')}
                        editable={editable}
                    />
                    <Field
                        component={InputField}
                        name='address'
                        fImageSource={require('../assets/image/ic_home.png')}
                        lImageSource={require('../assets/image/ic_cancel.png')}
                        placeholder='Address'
                        multiLine={true}
                        inputChange={(address) => this.setState({ address })}
                        inputValue={this.state.address}
                        onPressC={() => this.setState({ address: '' })}
                        error={this.getErrorsInField('address')}
                        editable={editable}
                    />

                    <View style={SwitchMaleFemale}>
                        <Text style={this.state.signInPressStatus ? { fontSize: 20, color: 'blue' } : { fontSize: 20, color: '#ff16b5' }}>Gender: </Text>
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
                            editable={editable}
                        />
                        <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                            <Image
                                style={ImageView}
                                source={require('../assets/image/ic_info.png')}
                            />
                        </TouchableOpacity>
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
                            editable={editable}
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
                            style={!editable ? ButtonView : ButtonViewDisable}
                            onPress={() => this.setisEditable(!editable)}
                            disabled={editable}
                        >
                            <Text style={ButtonText}>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={editable ? ButtonView : ButtonViewDisable}
                            onPress={this._validateData}
                            disabled={!editable}
                        >
                            <Text style={ButtonText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

        );
    }
}
