import React, { Component } from 'react';
import { StyleSheet, Image, ImageBackground, TouchableOpacity, Text, Alert } from 'react-native';

export default class Login extends Component {

    onPressLogin() {
        console.log('on press login');
        Alert.alert('You tapped the button!')
    }

    render() {
        return (
            <ImageBackground style={styles.container} source={require('../../img/login_background.png')}>
                <Image source={require('../../img/login_icon.png')} />
                <TouchableOpacity style={[styles.button, { marginTop: 40, backgroundColor: '#01A3AE' }]}
                    onPress={this.onPressLogin}>
                    <Text style={styles.text}>LOGIN TO FEEDLY</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { marginTop: 8, backgroundColor: '#AAAAAA' }]}
                    onPress={() => this.props.navigation.navigate('Introduce')}>
                    <Text style={styles.text}>TRY THINGS OUT</Text>
                </TouchableOpacity>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 250,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
    }
});
