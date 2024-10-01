import React from "react";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import PasswordInput from "./components/PasswordInput";


function Main() : React.JSX.Element {
    return (
        <SafeAreaView>
            <View style={styles.headerArea}>
                <Text style={styles.headerTxt}>Password Strength</Text>
            </View>
            <View>
                <PasswordInput />
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    headerArea: {
        width: '100%',
        paddingVertical: 15,
        marginBottom: 20,
        alignItems: 'center',
    },

    headerTxt: {
        fontWeight: '600',
        fontSize: 30,
        color: '#3B3030',

    },

    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Main;