import React, {useEffect} from "react";
import {View, Text} from "react-native";

export default function ({route, navigation}) {
    const {itemText} = route.params;
    useEffect(() => {
        navigation.setOptions({
            title: itemText,
        });

    }, [])
    return (
        <View>
            <Text>
                Hello React Native
            </Text>
        </View>
    )
}
