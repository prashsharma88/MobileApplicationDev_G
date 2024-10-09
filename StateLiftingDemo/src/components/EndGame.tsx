import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from "react-native";


function EndGame() : React.JSX.Element {
    const winnerPlayer = "john";
    return (
        <View>
            <Text>Winner is {winnerPlayer}!!!</Text>
            <TouchableOpacity style={styles.btn}>
                <Text>Restart</Text>
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