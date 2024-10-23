import React from "react";
import { 
    Text,
    View,
    StyleSheet,
} from "react-native";


function Details() : React.JSX.Element {
    return (
        <View>
            <Text style={styles.txt}>Detail Screen</Text>
        </View>
    );
}


const styles = StyleSheet.create(
    {
        txt:  {
            fontSize: 30,
            color: "#000",
            fontWeight: '600',
            textAlign: 'center',
        }
    }
);


export default Details;