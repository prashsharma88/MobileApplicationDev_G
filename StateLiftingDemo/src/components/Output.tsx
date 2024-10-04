import React from "react";
import { 
    View,
    StyleSheet,
    Text,
 } from "react-native";


type outputPropType = {
    inputVal : string,
    checkboxVal : string,
};

function Output(props : outputPropType) : React.JSX.Element {
    const ipVal = props.inputVal;
    const checkVal = props.checkboxVal;
    return (
        <View style={styles.outputView}>
            <Text style={styles.outputTxt}>{ipVal}</Text>
            <Text style={styles.outputTxt}>{checkVal}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    outputView: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 20,
        marginVertical: 10,
        alignItems: 'center',
        marginHorizontal: 10,
    },
    outputTxt: {
        fontSize: 25,
        fontWeight: '600',
    },
});

export default Output;