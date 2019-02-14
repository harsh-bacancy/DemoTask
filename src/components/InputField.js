import React from 'react'
import { View, TextInput, Image, TouchableOpacity, Text } from 'react-native'
import styles from '../assets/styles'

export default InputField = ({
    fImageSource,
    placeholder,
    lImageSource,
    multiLine,
    inputChange,
    inputValue,
    secureTextEntry,
    onPressC,
    error,
    editable
}) => {
    const {
        Input,
        ic_Image,
        ic_PasswordImage,
        inputcss
    } = styles
    _clearInput = () => {
        console.warn('-------');
    }
    function isEmpty(obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }
    console.log('error---', isEmpty(error));
    return (
        <View>
            <View style={Input}>
                <Image style={ic_Image} source={fImageSource} />
                <View style={!multiLine ? { flex: 1, flexDirection: 'row', justifyContent: 'space-between' } : { flex: 1, flexDirection: 'row', justifyContent: 'space-between', height: 100 }}>
                    <TextInput
                        style={inputcss}
                        onChangeText={inputChange}
                        value={inputValue}
                        placeholder={placeholder}
                        multiline={multiLine}
                        secureTextEntry={secureTextEntry}
                        returnKeyType='done'
                        editable={editable}
                    />
                    <TouchableOpacity onPress={onPressC}>
                        <Image style={ic_PasswordImage} source={lImageSource} />
                    </TouchableOpacity>
                </View>
            </View>
            {!isEmpty(error) ?
                <View style={{ width: '90%', justifyContent: 'center', alignItems: 'center', marginBottom: 5, }}>
                    <Text style={{ color: 'red' }}>{error}</Text>
                </View>
                : null
            }
        </View>
    )
}
