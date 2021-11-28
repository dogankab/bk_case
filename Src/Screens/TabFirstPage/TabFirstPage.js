import React, {useState} from "react";
import {View, Text, TouchableOpacity, TextInput} from "react-native";
import styles from './TabFirstPage.style'
import Button from "../../Components/Button";
import Input from "../../Components/Input";

export default function TabFirstPage({navigation}) {

    const [itemText, setitemText] = useState();
    const saveText = (text) => {
        setitemText(text)
    }

    const handleClick = () => {
        navigation.navigate("TitlePage",{itemText})
    }
    return (
        <View style={styles.container}>

            <Input value={itemText} placeholder={"Enter Title..."} onType={saveText}/>
            <Button text={"GO TITLE PAGE"} onClick={handleClick}/>


        </View>
    )
}
