import React from "react";
import {
    View,
    Text,
    Button,
} from "react-native";
import { CommonStyles } from "../utils/CommonStyle";


function Home({route, navigation} : {route : any, navigation : any}) : React.JSX.Element {
    return (
        <View style={CommonStyles.screen}>
            <Text style={CommonStyles.txt}>Home Screen</Text>
            {/* add a button to navigate fro Home tab to Profile tab */}
            <Button title="Go to Profile" onPress={() => navigation.navigate("ProfileScreen", {
                key: "value"
            })} />
        </View>
    );
}

export default Home;