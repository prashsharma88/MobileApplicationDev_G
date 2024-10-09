import React, { useState } from "react";
import {
    View,
    TextInput,
    StyleSheet,
} from "react-native";

type MyTextInputProps = {
    placeholder : string,
    inputVal : string,
    updateInputVal : (val : string) => void
};

export default function MyTextInput(props : MyTextInputProps) : React.JSX.Element {
   
    // const [userInput, setUserInput] = useState('');  // local state management
   
    const placeholder = props.placeholder;
    // State-Lifting
    const inputVal = props.inputVal;                // state variable from Parent component
    const updateInputVal = props.updateInputVal;    // update state method from Parent component
   
    return (
        <View style={styles.txtInputView}>
            <TextInput
                style={styles.input}
                value={inputVal}
                placeholder={placeholder}
                onChangeText={updateInputVal}
            />
        </View>
    );
}
 
 

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#000',
        fontSize: 25,
        fontWeight: '600',
        paddingHorizontal: 10,
    },
    txtInputView: {
        marginVertical: 10,
        padding: 10,
    }
});

// export default MyTextInput;