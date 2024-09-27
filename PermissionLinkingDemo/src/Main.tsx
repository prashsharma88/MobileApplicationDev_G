import React from "react";
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    PermissionsAndroid,
    Linking,
    Alert,
} from "react-native";

function Main() : React.JSX.Element {


    async function handlePress(url : string) {

        let hasPermission = false;

        try {

            hasPermission = await PermissionsAndroid.check("android.permission.CALL_PHONE");
            console.log("Sms permission:" + hasPermission);
            if(!hasPermission) {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CALL_PHONE,
                    {
                        title: 'Permission Request',
                        message: 'We really need this permission, Please Please Please',
                        buttonPositive: 'Okay',
                        buttonNegative: 'No',
                        buttonNeutral: 'Ask Me Later',
                    }
                );

                if(granted == PermissionsAndroid.RESULTS.GRANTED) {
                    hasPermission = true;
                } else {
                    hasPermission = false;
                    Alert.alert("Permission Denied");
                }
            }

        } catch(err) {
            console.log(err);
        }

        if(!hasPermission) {
            console.log("No permission, returning");
            return;
        }

        const isSupported = await Linking.canOpenURL(url);
        console.log(`${url} : ${isSupported}`);
        if(isSupported) {
            Linking.openURL(url);
        } else {
            Alert.alert("Cannot handle url " + url);
        }

    }

    return (
        <View style={styles.app}>

            <TouchableOpacity
            style={styles.btnView}
            onPress={() => {handlePress("https://www.facebook.com")}}
             >
                <Text style={styles.btnTxt}>Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.btnView}
            onPress={() => handlePress("sms:+1234567890")}
            >
                <Text style={styles.btnTxt}>SMS</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.btnView}
            onPress={() => handlePress("+12345667897")}
            >
                <Text style={styles.btnTxt}>Call</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.btnView}
            onPress={() => {handlePress("https://www.gmail.com")}}
            >
                <Text style={styles.btnTxt}>Gmail</Text>
            </TouchableOpacity>
            

        </View>
    );
}
const styles = StyleSheet.create({
    btnTxt: {
        color: '#FFF',
        fontSize: 25,
        fontWeight: '600',
        textAlign: 'center',
    },

    btnView: {
        backgroundColor: '#4379F2',
        paddingVertical: 10,
        marginVertical: 5,
        borderRadius: 10,
        width: 250,
    },

    app: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Main;