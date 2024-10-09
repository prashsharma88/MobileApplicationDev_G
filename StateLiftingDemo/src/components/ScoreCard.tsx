import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { CommonStyle } from "../styles/styles";

function ScoreCard() : React.JSX.Element {
    const playerName = "John"
    const scores = [10,20,30];

    const CurrentScore=0;

    return (
        <View style={styles.scoreCardView}>
            <Text style={[CommonStyle.txt, styles.playerNameView]}>{playerName}</Text>
            
            <View style={styles.setScoreView}>
                <Text style={CommonStyle.txt}>Sets: </Text>
                {scores.map((item, index) => {
                    return (
                        <View key={index}>
                            <Text style={CommonStyle.txt}> {item} </Text>
                        </View>
                    );
                })}
            </View>

            <View>
                <Text style={[CommonStyle.txt, styles.currentScoreTxt]}>{CurrentScore}</Text>
            </View>

            <View style={styles.btnView}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={CommonStyle.txt}>-</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}>
                    <Text style={CommonStyle.txt}>+</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.btn}>
                <Text style={CommonStyle.txt}>Winner</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    scoreCardView:  {
        padding: 15,
        marginVertical: 10,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
    },

    playerNameView: {
        fontSize: 30,
        textDecorationLine: 'underline',
    },

    setScoreView: {
        flexDirection: 'row',
        justifyContent: 'center'
    },

    currentScoreTxt:  {
        fontSize: 80,
    },

    btnView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '70%',
        alignItems: 'center'
    },

    btn: {
        borderWidth: 2,
        borderColor: '#FFF',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
    }
});

export default ScoreCard;