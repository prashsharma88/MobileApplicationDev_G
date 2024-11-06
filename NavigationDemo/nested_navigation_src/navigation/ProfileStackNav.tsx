import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/Profile";
import SettingScreen from "../screens/Settings";

type ProfileStackParams = {
    ProfileScreen : undefined,
    SettingScreen : undefined,
}

const ProfileStack = createNativeStackNavigator<ProfileStackParams>();


function ProfileNav() : React.JSX.Element {

    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
            <ProfileStack.Screen name="SettingScreen" component={SettingScreen} />
        </ProfileStack.Navigator>
    );
}

export default ProfileNav;