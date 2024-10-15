import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { CommonStyle } from "../styles/styles";


type scoreCardPropsType = {
    playerName : string,
    maxScore : number,

    
    setScores : Array<number>,
    currentScore : number,
    updateCurrentScore : (val : number) => void,
    handleWinner : () => void,

};

function ScoreCard( props : scoreCardPropsType ) : React.JSX.Element {
    const playerName = props.playerName;
    const maxScore = props.maxScore;

    const scores = props.setScores;
    const currentScore = props.currentScore;
    const updateCurrentScore = props.updateCurrentScore; // function to update current score.
    const handleWinner = props.handleWinner; // function called on winner btn click.

    const [displayWinnerBtn, setDisplayWinnerBtn] = useState(false);

    // local state for current score.

    // const [currentScore, updateCurrentScore] = useState(0);

    function handleScoreUpdate(updateType : number) {
        let newScore = 0;
        if(updateType == 1) {
            // increment the score
            newScore = currentScore >=maxScore ? currentScore : currentScore+1;
        } else if(updateType == 2) {
            // decrement the score
            newScore = currentScore <= 0 ? 0 : currentScore-1;
        }
        
        setDisplayWinnerBtn(newScore >= maxScore ? true : false);

        updateCurrentScore(newScore);
    }

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
                <Text style={[CommonStyle.txt, styles.currentScoreTxt]}>{currentScore}</Text>
            </View>

            <View style={styles.btnView}>
                <TouchableOpacity 
                style={styles.btn}
                onPress={() => handleScoreUpdate(2)}
                >
                    <Text style={CommonStyle.txt}>-</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.btn}
                onPress={() => handleScoreUpdate(1)}
                >
                    <Text style={CommonStyle.txt}>+</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity 
            onPress={handleWinner}
            style={[styles.btn, {display: displayWinnerBtn?"flex" : "none"}]}
            >
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