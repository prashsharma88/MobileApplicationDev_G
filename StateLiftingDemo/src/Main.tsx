import React, { useState } from "react";
import {
    View,
    StyleSheet,
    ScrollView,
} from "react-native";
import StartForm from "./components/StartForm";
import { CommonStyle } from "./styles/styles";
import PlayView from "./components/PlayView";
import EndGame from "./components/EndGame";

enum gameStateValues {
    Start = 0,
    Play,
    End,
}

// global variables, not state
let P1Name = "";
let P2Name = "";
let MaxScore = 0;


function Main() : React.JSX.Element {


    // local variables, not state
    // let P1Name = "";
    // let P2Name = "";
    // let MaxScore = 0;

    // Game State Management
    const [gameState, updateGameState] = useState(gameStateValues.Start);

    const [p1Name, setP1Name] = useState('');

    function handleStartFormData(p1:string, p2:string, ms:number) {

        console.log(`${p1}:${p2}:${ms}`);
        P1Name = p1;
        P2Name = p2;
        MaxScore = ms;

        // update game state to change screen.
        updateGameState(gameStateValues.Play);
    }

    // Array of Screens
    const screens : Array<React.JSX.Element> = 
    [
        <StartForm handleData={handleStartFormData}/>, 
        <PlayView p1Name={P1Name} p2Name={P2Name} maxScore={MaxScore}/>, 
        <EndGame />
    ];

    return (
        // <View style={CommonStyle.app}>
        //      <ScrollView>
        //         <StartForm /> {/**Screen 1 */}
        //         {/* <PlayView /> */} {/**Screen2 */}
        //         {/* <EndGame />      */} {/**Screen 3 */}
        //     </ScrollView>
        // </View>
        <View style={CommonStyle.app}>
            {screens[gameState]}
        </View>
    );
}



export default Main;