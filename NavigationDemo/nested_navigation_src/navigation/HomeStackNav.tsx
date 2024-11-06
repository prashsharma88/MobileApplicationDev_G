import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home";
import FeedsScreen from "../screens/Feeds";

type HomeStackParams = {
    HomeScreen : undefined,
    FeedsScreen : undefined,
}

const HomeStack = createNativeStackNavigator<HomeStackParams>();


function HomeNav() : React.JSX.Element {

    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
            <HomeStack.Screen name="FeedsScreen" component={FeedsScreen} />
        </HomeStack.Navigator>
    );
}

export default HomeNav;