import React from "react";
import {
    View,
    FlatList,
    StyleSheet,
    Text,
    Image,
} from "react-native"
import { contactList } from "../data";
import ContactListItem from "./ContactListItem";

// Instead of using this render function we can use ContactListItem component also
function renderItemFunc(item : any) {
    return (
        <View style={style.contactListItem}>
            <View style={style.contactImgView}>
                <Image
                style={style.contactImg}
                source={require('../../assets/user.png')} />
            </View>

            <View style={style.contactDetail}>
                <View style={style.nameArea}>
                    <Text style={style.nameTxt}>
                        {item.firstName+" "+item.lastName}
                    </Text>
                </View>

                <View style={style.detailArea}>
                    <Text style={style.detailTxt}>
                        {item.mobileNumber}
                    </Text>

                    <Text style={style.detailTxt}>
                        {item.emailAddress}
                    </Text>
                </View>
                
            </View>
        </View>
    );
}


function ContactListFlatlist() : React.JSX.Element {

    return (
        <View>
            <FlatList 
            data={contactList}
            keyExtractor={(item => item.mobileNumber)}
            renderItem={({item}) => {
                return(
                    // Thanks to Jaimin for suggesting this code.
                    <ContactListItem 
                    fName={item.firstName}
                    lName={item.lastName}
                    mob={item.mobileNumber}
                    email={item.emailAddress}
                    />
                );
            }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    contactListItem: {
        height: 100,
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#DDDDDD',
        flexDirection: 'row',
        alignItems: 'center',
    },

    contactImgView: {
    },

    contactImg: {
        resizeMode: 'cover'
    },

    contactDetail: {
        marginStart: 15,
    },

    nameArea: {
        flexDirection: 'row',
    },

    detailArea: {
        // flexDirection: 'row',
    },

    nameTxt: {
        fontSize: 25,
    },

    detailTxt: {
        fontSize: 20,
    }

});

export default ContactListFlatlist;