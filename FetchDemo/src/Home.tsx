import React from "react";
import {
    View
} from "react-native";
import GetComponent from "./components/GetComponent";
import PostComponent from "./components/PostComponent";

function Home() : React.JSX.Element {
    return (
        <View>
            {/* <GetComponent /> */}
            <PostComponent />
        </View>
    );
}

export default Home;