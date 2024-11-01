import React from "react";
import {
    View,
    Image,
    StyleSheet
} from "react-native";

type TabIconParamsType = {
    route : string,
    focused: boolean,
    color: string,
    size: number,
};

function TabIcon( params : TabIconParamsType ) : React.JSX.Element {
    const routeName = params.route;
    const iconSize = params.size;
    const isFocused = params.focused;
    const tintColor = params.color;
    return (
        <View style={[
                style.iconView,
                {
                    borderWidth: 1,
                    borderColor: isFocused ? tintColor : '#FFF',
                }
            ]}>
            <Image 
            style={[
                style.iconImg,
                {
                    height: iconSize,
                    width: iconSize,
                }
            ]}
            source={routeName=='HomeScreen' ? 
                require("../assets/icons/ic_home.png") : 
                require("../assets/icons/ic_profile.png")}
                alt="Tab Icon" 
            />
        </View>
    );
}

const style = StyleSheet.create({
    iconView: {
        borderRadius: 10,
        overflow: "hidden",
        padding: 5,
    },
    iconImg: {
        resizeMode: 'contain',
    }
});

export default TabIcon;