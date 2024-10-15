import React, { useState } from "react";
import {
    View,
} from "react-native";
import ScoreCard from "./ScoreCard";
import { gameStateValues } from "../Main";

type playViewPropsType = {
    p1Name : string,
    p2Name : string,
    maxScore : number,
    updateGameState : ( val : gameStateValues) => void,
    setWinnerName : (val : string) => void,
};

let p1SetCount = 0;
let p2SetCount = 0;

function PlayView( props : playViewPropsType ): React.JSX.Element {

    const P1Name = props.p1Name;
    const P2Name = props.p2Name;
    const MaxScore = props.maxScore;
    const updateGameState = props.updateGameState;

    const [setScoreP1, updateSetScoreP1] = useState([0,0,0]);
    const [setScoreP2, updateSetScoreP2] = useState([0,0,0]);
    const [currentScoreP1, updateCurrentScoreP1] = useState(0);
    const [currentScoreP2, updateCurrentScoreP2] = useState(0);

    // state to keep track of current set number.
    const [currentSet, updateCurrentSet] = useState(0);

    function handleWinnerEvent() {
        // TODO:

        const newSetScoreP1 = [...setScoreP1];
        newSetScoreP1[currentSet] = currentScoreP1;
        updateSetScoreP1(newSetScoreP1);
        updateCurrentScoreP1(0);
        if(currentScoreP1>=MaxScore) {
            p1SetCount++;
        }

        const newSetScoreP2 = [...setScoreP2];
        newSetScoreP2[currentSet] = currentScoreP2;
        updateSetScoreP2(newSetScoreP2);
        updateCurrentScoreP2(0);
        if(currentScoreP2>=MaxScore) {
            p2SetCount++;
        }


        updateCurrentSet(currentSet+1);


        if(currentSet >= 2) {
            const winnerPlayerName = p1SetCount>p2SetCount ? P1Name : P2Name;
            props.setWinnerName(winnerPlayerName);
            updateGameState(gameStateValues.End);
        }
    }

    return (
        <View>
            <ScoreCard 
            playerName={P1Name} 
            maxScore={MaxScore}
            setScores={setScoreP1}
            currentScore={currentScoreP1}
            updateCurrentScore={updateCurrentScoreP1}
            handleWinner={handleWinnerEvent}
            />
            <ScoreCard 
            playerName={P2Name} 
            maxScore={MaxScore} 
            setScores={setScoreP2}
            currentScore={currentScoreP2}
            updateCurrentScore={updateCurrentScoreP2}
            handleWinner={handleWinnerEvent}
            />
        </View>
    );
}

export default PlayView;