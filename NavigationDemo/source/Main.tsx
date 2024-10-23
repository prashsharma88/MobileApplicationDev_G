import React from "react";
import {
    View,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import Details from "./components/Details";


const Stack = createNativeStackNavigator();


function Main() : React.JSX.Element {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                name="Home"
                component={Home}
                >
                </Stack.Screen>

                <Stack.Screen
                name="Details"
                component={Details}
                >
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Main;