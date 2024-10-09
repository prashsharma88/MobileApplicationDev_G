import React from "react";
import {
    View,
    TextInput,
    StyleSheet,
    Text,
    TouchableOpacity,
} from "react-native";


function StartForm() : React.JSX.Element {
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
                onChangeText={(txt) => console.log(txt)}
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
                onChangeText={(txt) => console.log(txt)}
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
                onChangeText={(txt) => console.log(txt)}
                />
            </View>

            <View style={styles.FormView}>
                <TouchableOpacity 
                style={styles.btnView}
                onPress={() => console.log("Submit Pressed")}
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