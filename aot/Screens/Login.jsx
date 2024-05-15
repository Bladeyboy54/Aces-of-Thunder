import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput, Image, ImageBackground, Button, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';

TouchableOpacity.defaultProps = { activeOpacity: 0.5 };

const LoginButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.submitBtnContainer}>
        <Text style={styles.submitBtn}>{title}</Text>
    </TouchableOpacity>
);

export default function LoginScreen () {

    const [isChecked, setChecked] = useState(false);

    return (
        <View style = {styles.container}>
            <ImageBackground source={require('../assets/BackgroundTexture1.png')} style={styles.backgroundImage} resizeMode="cover">
                <View style = {styles.logoContainer}>
                    <Image 
                        style = {styles.logo}
                        source={require('../assets/LogoMain.png')}
                    />
                </View>
                <View style = {styles.loginContainer}>
                    <View style = {styles.inputContainer}>
                        <Text style = {styles.loginText}>Email</Text>
                        <TextInput
                            style = {styles.inputField}
                            placeholder = "email@example.com"
                            placeholderTextColor={'#CFD8DC'}
                            keyboardType="email-address"
                        />
                    </View>
                    <View style = {styles.inputContainer}>
                        <Text style = {styles.loginText}>Password</Text>
                        <TextInput
                            style = {styles.inputField}
                            secureTextEntry = {true}
                            placeholderTextColor={'#CFD8DC'}
                            
                        />
                    </View>
                    <View style = {styles.loginBox}>
                        <Checkbox 
                            style = {styles.checkBox}
                            value = {isChecked}
                            onValueChange = {setChecked}
                            color={isChecked ? '#E53935' : undefined}
                        />
                        <Text style = {styles.checkBoxText}>
                            Keep me logged in
                        </Text>
                    </View>
                </View>
                <View style = {styles.btnMainBox}>
                    <LoginButton title={"LOG IN"}/>
                </View>
                    
                    
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        // paddingTop: 35,
        alignItems: 'center',
        backgroundColor: '#2F2F2F',
    
    },
    backgroundImage: {
        width: '100%',
        height: '100%'
    },
    logoContainer: {
        width: '100%',
        height: '40%',
        paddingTop: 50,
        // backgroundColor: 'green',
        alignItems: 'center'
    },
    logo: {
        width: '80%',
        height: '100%',
    },
    loginContainer: {
        width: '100%',
        height: '45%',
        // backgroundColor: 'purple',
        // paddingTop: 35,
        alignItems: 'center'
    },
    inputContainer: {
        width: '85%',
        // color: '#FFFFFF'
        marginTop: 35
    },
    loginText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',

    },
    inputField: {
        color: '#FFFFFF',
        borderColor: '#E53935',
        borderWidth: 1,
        width: '100%',
        height: 50,
        backgroundColor: '#171717',
        padding: 10,
        borderRadius: 15,
        marginTop: 10
    },
    loginBox: {
        width: "85%",
        height: "8%",
        marginTop: 30,
        // backgroundColor: 'green',
        alignItems: 'center',
        flexDirection: 'row'
    },
    checkBox: {
        width: 25,
        height: 25,
        borderRadius: 5,
        borderColor: '#E53935',
        borderWidth: 1,
        backgroundColor: '#171717'
    },
    checkBoxText: {
        color: '#FFFFFF',
        marginLeft: 10
    },
    btnMainBox: {
        width: '100%',
        height: '15%',
        alignItems: 'center',
        // backgroundColor: 'red'
    },
    submitBtnContainer: { 
        width: '60%',
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#171717',
        borderRadius: 20,
        borderColor: '#E53935',
        borderWidth: 2
    },
    submitBtn: {
        alignSelf: 'center',
        // backgroundColor: 'blue',
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold'
    }
})