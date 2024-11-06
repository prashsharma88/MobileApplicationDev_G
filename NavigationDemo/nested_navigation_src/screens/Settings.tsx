import React from "react";
import {
    View,
    Text,
} from "react-native";

function SettingScreen() : React.JSX.Element {
    return (
        <View
        style={{
            flex:1,
            justifyContent: 'center',
            alignItems: 'center',
        }}
        >
            <Text
            style={{
                fontSize: 30,
                fontWeight: '600',
            }}
            >Setting Screen</Text>
        </View>
    );
}

export default SettingScreen;