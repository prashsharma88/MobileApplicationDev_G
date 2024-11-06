import React from "react";
import {
    View,
    Text,
    Button,
} from "react-native";

function ProfileScreen({route, navigation} : {route : any, navigation : any}) : React.JSX.Element {
    return (
        <View
        style={{
            flex:1,
            justifyContent: 'center',
            alignItems: 'center',
        }}
        >
            <Text
            style={{
                fontSize: 30,
                fontWeight: '600',
            }}
            >Profile Screen</Text>

            <Button title="Go to Settings" onPress={() => navigation.navigate("FeedsScreen")}/>
        </View>
    );
}

export default ProfileScreen;