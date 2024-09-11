import React from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";


const AppHeader = () : React.JSX.Element => {
    return (
        <View style={styles.headerArea}>
            <Text style={styles.headerTxt}> UI Demo </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerTxt: {
        color: '#1A4870',
        fontSize: 30,
        fontWeight: '600',
        borderBottomWidth: 2,
        borderColor: '#000',
    },

    headerArea: {
        alignItems: 'center',
    }
});

export default AppHeader;