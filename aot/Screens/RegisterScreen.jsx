import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


const RegisterScreen = ({ navigation }) => {

    return (
        <KeyboardAwareScrollView
            resetScrollToCoords={{ x: 0, y: 0 }}
            contentContainerStyle = {styles.container}
        >

        </KeyboardAwareScrollView>
    )

}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {

    }
})