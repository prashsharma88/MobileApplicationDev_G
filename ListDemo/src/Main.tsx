import React from "react";
import {
    SafeAreaView,
    View,
    StyleSheet,
    Text,
    ScrollView,
} from "react-native";
import ContactListItem from "./components/ContactListItem";
import { contactList } from "./data";
import ContactListFlatlist from "./components/ContactListFlatlist";


function Main() : React.JSX.Element {
    return (
        <SafeAreaView>
            <Text style={style.header}>List Demo</Text>
            {/* <ScrollView> */}
                {/* Iterate over contact list and create ContactListItem for each item */}

                {/* {contactList.map((item, index)=> (
                    <View key={index}>
                        <ContactListItem 
                        fName={item.firstName}
                        lName={item.lastName}
                        mob={item.mobileNumber}
                        email={item.emailAddress}
                        />
                    </View>
                ))}

            </ScrollView> */}
            <ContactListFlatlist />
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    header: {
        fontSize: 30,
        height: 50,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 5,
        backgroundColor: '#507687',
        color: '#FFFFFF',
    }
});

export default Main;