import React from "react";
import {
    View,
} from "react-native";
import ScoreCard from "./ScoreCard";

type playViewPropsType = {
    p1Name : string,
    p2Name : string,
    maxScore : number,
};

function PlayView( props : playViewPropsType ): React.JSX.Element {

    const P1Name = props.p1Name;
    const P2Name = props.p2Name;
    const MaxScore = props.maxScore;

    return (
        <View>
            <ScoreCard playerName={P1Name} maxScore={MaxScore}/>
            <ScoreCard playerName={P2Name} maxScore={MaxScore} />
        </View>
    );
}

export default PlayView;