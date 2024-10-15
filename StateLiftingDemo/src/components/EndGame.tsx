import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { CommonStyle } from "../styles/styles";
import { gameStateValues } from "../Main";

type EndGameViewPropsType = {
    name : string,
    updateGameState : (val : gameStateValues) => void,
};

function EndGame(props : EndGameViewPropsType) : React.JSX.Element {
    const winnerPlayer = props.name;
    const updateGameState = props.updateGameState;
    return (
        <View>
            <Text style={CommonStyle.txt}>Winner is {winnerPlayer}!!!</Text>
            <TouchableOpacity 
            onPress={() => updateGameState(gameStateValues.Start)}
            style={styles.btn}
            >
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