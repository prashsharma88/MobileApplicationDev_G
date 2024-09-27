import React from "react";
import { Image, View, Text,StyleSheet, TouchableOpacity, Pressable } from "react-native";

type itemProp = {
    fName: string,
    lName: string,
    mob: string,
    email: string,
};


function ContactListItem(prop : itemProp) : React.JSX.Element {
    return (
        <Pressable>
            <View style={style.contactItem}>
            {/* image view */}
                <View>
                    <Image
                    source={require("../../assets/user.png")}
                    />
                </View>

                {/* Details view */}
                <View style={style.contactDetailView}>

                    <Text style={style.nameTxt}>
                        {prop.fName+" "+prop.lName}
                    </Text>
                    <Text style={style.detailTxt}>
                        {prop.mob}
                    </Text>
                    <Text style={style.detailTxt}>
                        {prop.email}
                    </Text>

                </View>
            </View>
        </Pressable>
        
    );
}


const style = StyleSheet.create({
    contactItem: {
        flexDirection: 'row',
        marginVertical: 5,
        backgroundColor: '#DDDDDD',
        height: 100,
        padding: 10,
        alignItems: 'center'

    },

    contactDetailView: {
        marginStart: 15
    },

    nameTxt: {
        fontSize: 25,
        fontWeight: '400',
        color: '#000',

    },

    detailTxt: {
        fontSize: 20,
        color: '#000',
    }

    
});

export default ContactListItem;