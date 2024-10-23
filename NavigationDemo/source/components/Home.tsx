import React from "react";
import { 
    Text,
    View,
    StyleSheet,
    Button,
} from "react-native";

// function Home(x : any) : React.JSX.Element {
function Home({navigation} : {navigation : any}) : React.JSX.Element {
    return (
        <View>
            <Text style={styles.txt}>Main Screen</Text>
            <Button 
            title="Go To Details"
            onPress={() => {
                // x.navigation.navigate("Details");
                navigation.navigate("Details");
            }}
            ></Button>
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


export default Home;