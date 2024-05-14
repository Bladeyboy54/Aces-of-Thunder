import React from "react";
import { View, Text, StyleSheet, TextInput, Image, ImageBackground } from 'react-native';


export default function LoginScreen () {
    return (
        <View style = {styles.container}>
            <ImageBackground source={require('../assets/BackgroundTexture1.png')} style={styles.backgroundImage} resizeMode="cover">
                <View style = {styles.logoContainer}>
                    <Image 
                        style = {styles.logo}
                        source={require('../assets/LogoMain.png')}
                    />
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
        height: '30%',
        // marginTop: 35,
        // backgroundColor: 'green',
        alignItems: 'center'
    },
    logo: {
        width: '80%',
        height: '100%',
    }
})