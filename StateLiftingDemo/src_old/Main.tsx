import React, { useState } from "react";
import { 
    View, 
    StyleSheet,
    Button,
} from "react-native";
import CheckBox from "./components/CheckBox";
import MyTextInput from "./components/MyTextInput";
import Output from "./components/Output";

function Main() : React.JSX.Element {


    // To provide data to output component we have to do State-Lifting
    // Move the state from individual components and keep it in the Parent (Main) component

    const [userInputVal, setUserInputVal] = useState('');
    const [checkboxVal, setCheckboxVal] = useState(false);

    const [outputState, updateOutputState] = useState({
        inputVal : '',
        checkedVal : '',
    });

    function updateCheckBox(status : boolean) {
        console.log(`checked status: ${status}`);
        setCheckboxVal(status);
    }

    function handleSubmit() {
        updateOutputState({
            inputVal: userInputVal,
            checkedVal : checkboxVal ? "Checked" : "Not-Checked"
        });
    }

    return (
        <View style={style.appBG}>
            {/* Import multiple child components */}
            <MyTextInput placeholder="InputText" inputVal={userInputVal} updateInputVal={setUserInputVal} />
            <CheckBox label="Checkbox 1" checkedStatus={checkboxVal} updateCheckedStatus={updateCheckBox} />
            <Button title="Submit" onPress={handleSubmit} />
            <Output inputVal={outputState.inputVal} checkboxVal={outputState.checkedVal} />
        </View>
    );
}

const style = StyleSheet.create({
    appBG: {
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    }
});

export default Main;