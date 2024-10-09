import React from "react";
import {
    View,
    StyleSheet,
} from "react-native";
import StartForm from "./components/StartForm";
import { CommonStyle } from "./styles/styles";
import PlayView from "./components/PlayView";

function Main() : React.JSX.Element {
    return (
        <View style={CommonStyle.app}>
            {/* <StartForm /> */}

            <PlayView />
        </View>
    );
}


export default Main;