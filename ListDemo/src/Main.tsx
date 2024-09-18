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
            <Text>List Demo</Text>
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

export default Main;