import React, { useState } from "react";
import { 
    Button,
    Clipboard,
    StyleSheet,
    TextInput,
    View,
 } from "react-native";
import { getPasswordStrength } from "../utility";

let parentWidth = 0;

const colors = ['#FFFFFF','#F5004F','#FF885B','#FFEB00','#6439FF','#185519'];

function PasswordInput() : React.JSX.Element {

    const [inputTxt, setInputTxt] = useState('');
    const [barWidth, setBarWidth] = useState(0);
    const [barColor, setBarColor] = useState('#FFFFFF');

    function handleInput(newTxt : string) {
        console.log(newTxt);

        const strength = getPasswordStrength(newTxt);

        const width = (parentWidth*strength*20)/100;

        setInputTxt(newTxt);
        setBarWidth(width);
        setBarColor(colors[strength]);
    }


    const onLayout = (event: any) => {
        const { width }  = event.nativeEvent.layout;
        parentWidth = width;
        console.log("parentWidth:  " + parentWidth);
      };

    function copyTxt() {
        Clipboard.setString(inputTxt);
    }
    return (
        <View style={styles.inputArea}>
            <TextInput
            style={styles.inputField}
            placeholder="Enter your Password"
            value={inputTxt}
            onChangeText={handleInput}
            />

            <View style={styles.strength} onLayout={onLayout}>
                <View style={
                    [
                        styles.bar,
                        {backgroundColor: barColor},
                        {width: barWidth}
                    ]
                    }>

                </View>
            </View>

            <Button title="Copy" onPress={copyTxt}/>

        </View>
    );
}


const styles = StyleSheet.create(
    {
        inputArea: {
            margin: 30,
            width: '80%',

        },

        inputField: {
            borderWidth: 2,
            borderColor: '#3B3030',
            borderRadius: 15,
            fontWeight: '400',
            fontSize: 25,
            padding: 10,
            backgroundColor: '#FFF',
        },

        strength: {
            width: '100%',
            height: 15,
            borderRadius: 10,
            backgroundColor: '#FFF',
            marginVertical: 20,
            borderWidth: 1,
            borderColor: '#3B3030',
            padding:0,
        },

        bar: {
            height: '100%',
            width: '100%',
            borderRadius: 10,
            margin: 0,
            padding: 0,
            borderWidth: 0,
        }
    }
);


export default PasswordInput;