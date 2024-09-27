import React from "react";
import { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
} from "react-native";
import MyTxtInput from "./components/MyTxtInput";

import BouncyCheckbox from "react-native-bouncy-checkbox";


function Main() : React.JSX.Element {

    console.log("Main Component UI refreshed");

    // useState hook from react.
    // useState() returns an Array.
    // const [stateVariable, updateStateMethod] = useState(initState);

    const [counter, setCounter] = useState(0);

    function handlePress() {

        const newCounterValue = counter == 4 ? counter : counter + 1; // what are we doing here ??

        setCounter(newCounterValue);
    }

    return (
        <View style={style.mainScreen}>

            {/* <Text style={style.txt}>{counter}</Text>

            <Button 
            onPress={() => handlePress()}
            title="Increment" 
            />  */}

            <MyTxtInput placeholder="User Name" isPassword={false} />
            <MyTxtInput placeholder="Password" isPassword={true} />

            <View style={style.TnC}>
                <BouncyCheckbox
                size={25}
                fillColor="green"
                unFillColor="#FFFFFF"
                iconStyle={{ borderColor: "red" }}
                innerIconStyle={{ borderWidth: 2 }}
                textStyle={{ fontFamily: "JosefinSans-Regular" }}
                onPress={(isChecked: boolean) => {console.log(isChecked)}}
                />
                <Text>Terms and Conditions</Text>
            </View>

        </View>
    );
}

const style = StyleSheet.create({

    mainScreen: {
        flex: 1,
        backgroundColor: '#FFCFB3',
        alignItems: 'center',
        justifyContent: 'center',
    },

    txt: {
        fontSize: 25,
        fontWeight: '600',
        marginVertical: 20,
    },

    TnC: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    }
});


export default Main;