import React, { useState } from "react";
import {
    View,
    TextInput,
    StyleSheet,
    Text,
    TouchableOpacity,
} from "react-native";


type startFormParamType = {
    handleData : (p1:string,p2:string,ms:number) => void,
    // setP1NameFunc : (newTxt : string) => void,
    // p1NameValue : string,
};

function StartForm(props : startFormParamType) : React.JSX.Element {

    const [p1Name, setP1Name] = useState("");
    const [p2Name, setP2Name] = useState("");
    const [maxScore, setMaxScore] = useState("");

    function handleSubmit() {

        // 1.) Check the value of maxScore, if NaN then don't proceed.

        const maxScoreValue = Number(maxScore); // converting maxScore from string to number.
        console.log(isNaN(maxScoreValue));
        if(isNaN(maxScoreValue) || maxScoreValue > 30) {
            // We can show some error to user, but for now we just put a log and return.
            console.log("Not a valid Max Score entered");
            return;
        }

        // 2.) return data to Main Component.

        props.handleData(p1Name, p2Name,maxScoreValue);
    }

    return (
        <View>
            <View style={styles.FormView}>
                <Text style={styles.labelTxt}>
                    Player 1:
                </Text>

                <TextInput
                style={styles.txtInput}
                inputMode="text"
                maxLength={50}
                value={p1Name}
                onChangeText={setP1Name}
                />
            </View>

            <View style={styles.FormView}>
                <Text style={styles.labelTxt}>
                    Player 2:
                </Text>

                <TextInput
                style={styles.txtInput}
                inputMode="text"
                maxLength={50}
                value={p2Name}
                onChangeText={setP2Name}
                />
            </View>

            <View style={styles.FormView}>
                <Text style={styles.labelTxt}>
                    Max Score:
                </Text>

                <TextInput
                style={styles.txtInput}
                inputMode="text"
                maxLength={2}
                value={maxScore}
                onChangeText={setMaxScore}
                />
            </View>

            <View style={styles.FormView}>
                <TouchableOpacity 
                style={styles.btnView}
                onPress={() => {
                    console.log("Submit Pressed");
                    handleSubmit();
                }}
                >
                    <Text style={styles.labelTxt}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    FormView: {
        padding: 10,
        marginVertical: 10,
        alignItems: 'center',
    },

    labelTxt: {
        color: "#FFF",
        fontSize: 25,
        fontWeight: '600',
    },

    txtInput: {
        borderWidth: 1,
        borderColor: "#FFF",
        borderRadius: 10,
        color: "#FFF",
        fontSize: 25,
        fontWeight: '600',
        width: '80%',
        marginVertical: 10,
    },
    btnView: {
        borderWidth: 1,
        borderColor: "#FFF",
        borderRadius: 10,
        textAlign: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
    }
});


export default StartForm;