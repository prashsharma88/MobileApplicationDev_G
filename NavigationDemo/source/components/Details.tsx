import React, {useEffect, useState} from "react";
import { 
    Text,
    View,
    StyleSheet,
    Button,
    TouchableOpacity,
} from "react-native";


function Details({route, navigation} : {route : any, navigation : any}) : React.JSX.Element {

    const [count, updateCount] = useState(0);
    
    // useEffect hook from React.
    // 1.) what is useEffect hook, when should we use it.
    // 2.) diff between useEffect and useState.
    useEffect(()=>{
        navigation.setOptions({
            headerRight: () => {
                return (
                    <TouchableOpacity
                    onPress={() => {
                        console.log("button pressed");
                        updateCount(count+1);
                    }}
                    >
                        <Text style={{fontSize: 15, color: '#FFF'}}>Count</Text>
                    </TouchableOpacity>
                );
            }
        })
    }, []);

    const params = route.params;

    console.log(`params is : ${params}`);

    return (
        <View>
            <Text style={styles.txt}>Detail Screen</Text>

            <View>
                <Text style={styles.txt}>ID : { params.id }</Text>
                <Text style={styles.txt}>Description : {params.desc}</Text>
            </View>
            <View style={styles.btnView}>
                <Button title="Go to home" onPress={() => navigation.navigate("Home")} />
            </View>

            {/* Navigate function */}
            <View style={styles.btnView}>
                <Button title="Go to details" onPress={() => navigation.navigate("Details")} />
            </View>
            
            {/* Push Function */}
            <View style={styles.btnView}>
                <Button title="Push details" onPress={() => navigation.push("Details")} />
            </View>

            {/* goBack function */}
            <View style={styles.btnView}>
                <Button title="Go Back" onPress={() => navigation.goBack()} />
            </View>

            {/* Pop to top */}
            <View style={styles.btnView}>
                <Button title="Pop to Top" onPress={() => navigation.popToTop()} />
            </View>

            <View>
                <Text style={{fontSize: 25, textAlign: 'center',}}>Counter Getting updated from Header Right Button</Text>
                <Text style={{fontSize: 25, textAlign: 'center',}}>{count}</Text>
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
        }, 

        btnView: {
            margin: 10,
        }
    }
);


export default Details;