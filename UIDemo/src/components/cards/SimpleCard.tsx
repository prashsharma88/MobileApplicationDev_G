import React from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";

/**
 * Card: padding 10, width: 250, height: 250
 *  Card Title
 *      fontSize: 30, fontweight: 600, color: white
 *  Divider
 *  Card Test
 *      fontsize: 25, color: white
 */

type simpleCardParam = {
    title: string,
    text: string
}

// Setting the type of props as function parameters
// function SimpleCard({ title, text} : {title: string, text: string}) : React.JSX.Element {

// Setting the type of props by creating a new type 
function SimpleCard(prop : simpleCardParam) : React.JSX.Element {

    const cardTitle = prop.title;
    const cardTxt = prop.text;

    return (
        <View style={style.cardView}>
            {/* Passing multiple style object as an array */}
            <Text style={[style.cardTitle, style.txtColor]}>{cardTitle}</Text>
            <View style={style.divider}/>
            <Text style={[style.cardTxt,style.txtColor]} numberOfLines={6}>
                {cardTxt}
            </Text>
        </View>
    );
}

const style = StyleSheet.create({
    cardView: {
        width: 250,
        height: 250,
        padding: 10,
        borderColor: "#4379F2",
        backgroundColor: "#4379F2",
        borderRadius: 15,
        margin: 20,
        alignItems: 'center',
        overflow: 'hidden'
    },

    cardTitle: {
        fontSize: 30,
        fontWeight: '600',  
    },

    divider: {
        width: '100%',
        height: 2,
        backgroundColor: '#FFF',
        marginVertical: 5,
    },

    cardTxt: {
        fontSize: 25,
    },

    txtColor: {
        color: '#FFF',
    }
});

export default SimpleCard;