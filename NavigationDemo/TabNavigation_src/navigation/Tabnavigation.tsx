import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import TabIcon from "../components/TabIcon";


const Tabs = createBottomTabNavigator();

function Tabnavigation() : React.JSX.Element {
    return(
        <NavigationContainer>
            <Tabs.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size} : 
                    {focused : boolean, color : string, size : number}) => {
                    
                    return (
                    <TabIcon 
                    route={route.name} 
                    focused={focused}
                    color={color}
                    size={size}
                    />
                );
                },
                tabBarShowLabel: false,
                tabBarActiveTintColor: 'orange',
                tabBarInactiveTintColor: 'grey',
            })}
            >
                <Tabs.Screen name="HomeScreen" component={Home} />
                <Tabs.Screen 
                name="ProfileScreen" 
                component={Profile} 
                options={{
                    tabBarBadge: 3,
                }}
                />
            </Tabs.Navigator>
        </NavigationContainer>
    );
}

export default Tabnavigation;