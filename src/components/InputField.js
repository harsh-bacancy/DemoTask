import React from 'react'
import { View, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native'


export default InputField = ({
    fImageSource,
    placeholder,
    lImageSource,
    multiLine,
    inputChange,
    inputValue,
    secureTextEntry, }) => {
    const {
        Input,
        ic_Image,
        ic_PasswordImage,
        inputcss
    } = styles
    _clearInput = () => {
        console.warn('-------');
    }
    return (
        <View style={Input}>
            <Image style={ic_Image} source={fImageSource} />
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                <TextInput
                    style={inputcss}
                    onChangeText={inputChange}
                    value={inputValue}
                    placeholder={placeholder}
                    multiline={multiLine}
                    secureTextEntry={secureTextEntry}
                />
                <TouchableOpacity onPress={this._clearInput}>
                    <Image style={ic_PasswordImage} source={lImageSource} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    MainView: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Input: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
        borderBottomWidth: 2,
        borderBottomColor: 'gray'
    },
    inputcss: {
        width: '100%',
        // backgroundColor: 'red',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
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