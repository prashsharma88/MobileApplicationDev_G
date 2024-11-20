import React from "react";
import {
    View,
    StyleSheet,
    Text,
} from "react-native";


type AppLayoutParamsType = {
    children : React.JSX.Element,
}

function AppLayout( params : AppLayoutParamsType ) : React.JSX.Element {
    return (
        <View style={{

        }}>
            <View>
                <Text>Header</Text>
            </View>

            <View>
                {/* Child */}
                { params.children }
            </View>

            <View>
                <Text>Footer</Text>
            </View>

        </View>
    );
}


export default AppLayout;