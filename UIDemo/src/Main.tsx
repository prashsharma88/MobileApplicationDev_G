import React from "react";
import {
    View,
    StyleSheet,
    SafeAreaView
} from "react-native";
import AppHeader from "./components/AppHeader";


const Main = () : React.JSX.Element => {
    return (
        <SafeAreaView style={styles.app_bg}>
            <View>
                <AppHeader/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    app_bg: {
        flex: 1,
        backgroundColor: '#DEE5D4'
    }
});


export default Main;