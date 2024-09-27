/**
 * Creating custom text input field and using useState hook to keep track of user input
 */

import React, { useState } from "react";
import {
    TextInput,
    StyleSheet,
    View,
} from "react-native";

// accept placeholder text and isPassword boolean as props in this component.

type myTxtInputProps = {
    placeholder : string,
    isPassword : boolean,
};

function MyTxtInput(props : myTxtInputProps) : React.JSX.Element {

    const placeholder = props.placeholder;
    const isPassword = props.isPassword;

    const [inputVal, setInputVal] = useState("");

    function handleChangeTxt(newTxt : string) {
        console.log(`txt changed: ${newTxt}`);

        setInputVal(newTxt); // updating the state of my component
    }

    return (
        <View>
            <TextInput 
            placeholder={placeholder}
            value={inputVal}
            style={style.inputBox} 
            secureTextEntry={isPassword}
            onChangeText={handleChangeTxt}
            />
        </View>
    );
}

const style = StyleSheet.create({

    inputBox: {
        width: 250,
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: '#FFF',
        marginVertical: 20,
        fontSize: 20,
        fontWeight: '600',
        padding: 10,
    }
});


export default MyTxtInput;