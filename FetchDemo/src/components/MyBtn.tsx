import React from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

type MyBtnParamType = {
    title : string,
    onPress : () => void,
}

function MyBtn( params : MyBtnParamType ) : React.JSX.Element {
    return (
        <View>
            <TouchableOpacity style={style.btnView} onPress={params.onPress}>
                <Text style={style.btnTxt}>{params.title}</Text>
            </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    btnView: {
        width: 150,
        padding: 10,
        marginVertical: 5,
        backgroundColor: 'lightblue',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    btnTxt: {
        fontSize: 25,
        fontWeight: '400',
        color: '#FFF',
    }
});

export default MyBtn;