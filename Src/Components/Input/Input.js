import React from "react";
import {View,TextInput} from "react-native";
import styles from './Input.style'
const Input=({placeholder,onType,value})=>{
    return(
        <View style={styles.mainView}>
            <TextInput placeholder={placeholder} onChangeText={onType} value={value} />
        </View>
    )
}

export default Input;
