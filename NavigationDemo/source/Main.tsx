import React from "react";
import {
    Alert,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import Details from "./components/Details";


const Stack = createNativeStackNavigator();


function Main() : React.JSX.Element {

    function detailsScreenOptions() : any {
        const options = {
            title : "Details Screen",
            headerRight: () => headerRightButton("Count")
        };
        return options;
    }

    function headerRightButton( title: string) : React.JSX.Element {
        return (
            <TouchableOpacity
            onPress={() => Alert.alert("About App", "Version: 0.0.1")}
            >
                <Text style={{fontSize: 15, color: '#FFF'}}>{title}</Text>
            </TouchableOpacity>
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator 
            initialRouteName="Home"
            // Add common header style to all the screens.
            screenOptions={{
                headerTitleAlign: 'center',
                headerTintColor: 'orange',
                headerStyle: {backgroundColor: "black"},
                headerTitleStyle: {
                    fontSize: 30,
                    fontFamily: "cursive",
                    color: '#FFF',
                },
                
            }}
            >
                <Stack.Screen
                name="Home"
                component={Home}
                // options attribute takes an Object or a function that returns an Object
                options={{
                    title: "Home Screen",
                    headerRight: ()=>headerRightButton("About"),
                }}
                />

                <Stack.Screen
                name="Details"
                component={Details}
                // You can set initial paramters in route object.
                initialParams={{id: -1, desc: "default description"}}

                // using a function to set Options
                options={detailsScreenOptions}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Main;