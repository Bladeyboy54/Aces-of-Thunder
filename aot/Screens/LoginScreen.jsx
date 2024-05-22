import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { handleLogin } from "../services/authService";

TouchableOpacity.defaultProps = { activeOpacity: 0.5 };



const LoginScreen = ({navigation}) => {

    const [isChecked, setChecked] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async () => {
        const success = await handleLogin( email, password )
        if (success) {
            navigation.navigate('Home');
        } else {
            console.log("Error on login")
        }
    }

    const LoginButton = ({ onPress, title }) => (
        <TouchableOpacity onPress={login} style={styles.submitBtnContainer}>
            <Text style={styles.submitBtn}>{title}</Text>
        </TouchableOpacity>
    );

    return (
        
        <KeyboardAwareScrollView 
            resetScrollToCoords={{ x: 0, y: 0 }}
            contentContainerStyle = {styles.container}
            scrollEnabled={true}
        >
            {/* <ScrollView> */}
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
                                onChangeText={newText => setEmail(newText)}
                            />
                        </View>
                        <View style = {styles.inputContainer}>
                            <Text style = {styles.loginText}>Password</Text>
                            <TextInput
                                style = {styles.inputField}
                                secureTextEntry = {true}
                                placeholderTextColor={'#CFD8DC'}
                                onChangeText={newText => setPassword(newText)}
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
                        <Text 
                            style={styles.footerText}
                            onPress={() => navigation.navigate('Register')}
                        >
                            Don't Have Account?
                            <Text style={styles.signup}>  
                                Sign Up
                            </Text>
                        </Text>
                    </View>
                        
                        
                </ImageBackground>    
            {/* </ScrollView> */}
            
                
        </KeyboardAwareScrollView>
        
    )
}
export default LoginScreen 

const styles = StyleSheet.create({
    container: {
        width: 360,
        height: 752,
        // paddingTop: 35,
        // alignItems: 'center',
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
        height: '43%',
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
        height: '17%',
        alignItems: 'center',
        // backgroundColor: 'red'
    },
    submitBtnContainer: { 
        width: '55%',
        height: '50%',
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
    },
    footerText : {
        textAlign: "center",
        color : "gray",
        paddingTop: 15
      },
      signup : {
        color : "red",
        fontSize : 13
      }
})