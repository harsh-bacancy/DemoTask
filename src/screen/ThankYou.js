import React, {Component} from 'react'
import { View, Text, StyleSheet, } from 'react-native'

export default class ThankYou extends Component{
    constructor(props){
        super();

    }
    render(){
        const {MainView} = styles
        return(
            <View style={MainView}>
                <Text>Thank You</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainView: {
        backgroundColor :'red',
        justifyContent: 'center',
        alignItems: 'center'
    }
});