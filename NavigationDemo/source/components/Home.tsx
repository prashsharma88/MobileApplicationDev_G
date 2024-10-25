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
            <View style={{margin: 10,}}>
                <Button 
                
                title="Go To Details"
                onPress={() => {
                    // x.navigation.navigate("Details");
                    // navigating to Details screen without parameters
                    // navigation.navigate("Details");

                    // navigating to Details screen with parameters
                    navigation.navigate("Details", {
                        id: Math.floor(Math.random()*10),
                        desc: "Some Text To show",
                    });
                }}
                />
            </View>

            <View style={{margin: 10,}}>
                <Button title="Details No param" onPress={()=>navigation.navigate("Details")} />
            </View>
            
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