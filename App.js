import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';

class RedButton extends Component {
    render() {
        return (
            <Button title = "Click Me" color = "orange">
            </Button>
        )
    }
}

export default class App extends Component {
    render() {
        return (
            <View style = {{marginTop: 250}}>
                <Text>
                    First React Native
                </Text>
                <RedButton/>
            </View>
        )
    }
}