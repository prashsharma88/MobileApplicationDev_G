import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { CommonStyle } from "../styles/styles";


function EndGame() : React.JSX.Element {
    const winnerPlayer = "john";
    return (
        <View>
            <Text style={CommonStyle.txt}>Winner is {winnerPlayer}!!!</Text>
            <TouchableOpacity style={styles.btn}>
                <Text style={CommonStyle.txt}>Restart</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    btn: {
        borderWidth: 2,
        borderColor: '#FFF',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
    }
});

export default EndGame;