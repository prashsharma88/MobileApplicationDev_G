import React from "react";
import {
    View,
    Text,
    Button,
} from "react-native";
import { CommonStyles } from "../utils/CommonStyle";


function Profile({route, navigation} : {route : any, navigation : any}) : React.JSX.Element {
    console.log(route.params);
    return (
        <View style={CommonStyles.screen}>
            <Text style={CommonStyles.txt}>Profile Screen</Text>
            <Button title="go to home" onPress={() => navigation.navigate("HomeScreen")} />
        </View>
    );
}

export default Profile;