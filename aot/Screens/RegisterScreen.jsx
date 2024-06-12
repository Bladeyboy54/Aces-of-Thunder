import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { handleRegester } from "../services/authService";


const RegisterScreen = ({ navigation }) => {

    const [gailinId, setGaijinId] = useState('')
    const [gamerTag, setGamerTag] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const regester = () => {
        handleRegester( email, password)
            .then(async (response) => {
                const userid = response.user.uid
                console.log('This is the UID ==> ', userid)
                setTimeout(() => {
                    navigation.navigate('Home')
                }, 3000)
                try {
                    await setDoc(doc(db, "users", userid), {
                        gaijinId: gailinId,
                        gamerTag: gamerTag,
                        fullName: '',
                        profileImg: '',
                        playerLevel: ''
                    })
                } catch (e) {
                    console.error(" Error Adding document ==> ", e)
                }
            })
            .catch((error) => {
                console.log('Error Registering User ==> ', error)
            })
    }

    const RegesterButton = ({ onPress, title }) => (
        <TouchableOpacity onPress={regester} style={styles.submitBtnContainer}>
            <Text style={styles.submitBtn}>{title}</Text>
        </TouchableOpacity>
    );

    return (
        <KeyboardAwareScrollView
            resetScrollToCoords={{ x: 0, y: 0 }}
            contentContainerStyle = {styles.container}
            scrollEnabled = {true}
        >
            <ImageBackground
                source={require('../assets/BackgroundTexture1.png')}
                style={styles.backgroundImage}
                resizeMode="cover"
            >
                <View style={styles.logoContainer}>
                    <Image
                        style = { styles.logo }
                        source={require('../assets/LogoMain.png')}
                    />
                </View>
                <View style = {styles.registerContainer}>
                    <View style = {styles.inputContainer}>
                        <Text style = {styles.registerText}>Gaijin ID</Text>
                        <TextInput
                            style = {styles.inputField}
                            placeholder = "000000000"
                            placeholderTextColor={'#CFD8DC'}
                            keyboardType="number-pad"
                            onChangeText={newText => setGaijinId(newText)}
                        />
                    </View>
                    <View style = {styles.inputContainer}>
                        <Text style = {styles.registerText}>Gamer Tag</Text>
                        <TextInput
                            style = {styles.inputField}
                            placeholder = "CheeseMaster355"
                            placeholderTextColor={'#CFD8DC'}
                            keyboardType="default"
                            onChangeText={newText => setGamerTag(newText)}
                        />
                    </View>
                    <View style = {styles.inputContainer}>
                        <Text style = {styles.registerText}>Email</Text>
                        <TextInput
                            style = {styles.inputField}
                            placeholder = "email@example.com"
                            placeholderTextColor={'#CFD8DC'}
                            keyboardType="email-address"
                            onChangeText={newText => setEmail(newText)}
                        />
                    </View>
                    <View style = {styles.inputContainer}>
                        <Text style = {styles.registerText}>Password</Text>
                        <TextInput
                            style = {styles.inputField}
                            placeholder = "Must have at least 6 characters"
                            placeholderTextColor={'#CFD8DC'}
                            keyboardType="default"
                            onChangeText={newText => setPassword(newText)}
                        />
                    </View>
                </View>
                <View style = {styles.btnMainBox}>
                    <RegesterButton title={"Sign Up"}/>
                    <Text 
                        style={styles.footerText}
                        onPress={() => navigation.navigate('Login')}
                    >
                        Have an Account?
                        <Text style={styles.signup}>  
                            Log In
                        </Text>
                    </Text>
                </View>    
            </ImageBackground>
        </KeyboardAwareScrollView>
    )

}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        width: 360,
        height: 752,
        backgroundColor: '#2F2F2F',
    },

    backgroundImage: {
        width: '100%',
        height: '100%'
    },
    logoContainer: {
        width: '100%',
        height: '25%',
        paddingTop: 50,
        // backgroundColor: 'green',
        alignItems: 'center'
    },
    logo: {
        width: '60%',
        height: '100%',
    },
    registerContainer: {
        width: '100%',
        height: '58%',
        alignItems: 'center',
        // backgroundColor: 'green'
    },
    inputContainer: {
        width: '85%',
        // color: '#FFFFFF'
        marginTop: 15
    },
    registerText: {
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