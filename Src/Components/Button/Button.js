import React from "react";
import {Text,View,TouchableWithoutFeedback} from "react-native";
import styles from './Button.style'

const Button =({text,onClick})=>{
    return(
        <View style={styles.ButtonView}>
            <TouchableWithoutFeedback style={styles.ButtonView} onPress={onClick}>
                <Text style={styles.ButtonText}>
                    {text}
                </Text>
            </TouchableWithoutFeedback>

        </View>
    )
}

export default Button;
