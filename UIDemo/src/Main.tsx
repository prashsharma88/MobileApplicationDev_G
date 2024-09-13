import React from "react";
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView
} from "react-native";
import AppHeader from "./components/AppHeader";
import SimpleCard from "./components/cards/SimpleCard";
import RichCard from "./components/cards/RichCard";


const Main = () : React.JSX.Element => {
    return (
        <SafeAreaView style={styles.app_bg}>
            <View>
                <AppHeader/>
            </View>
            <View>
                <ScrollView horizontal>
                    <SimpleCard title="Title 1" text="This is the text for First card"/>
                    <SimpleCard title='Title 2' text="This is the text for Second card" />
                    <SimpleCard title='Title 3' text="This is the text for third card" />
                    <SimpleCard title='Title 4' text="This is the text for fourth card" />
                </ScrollView>
            </View>

            <View>
                <RichCard />
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