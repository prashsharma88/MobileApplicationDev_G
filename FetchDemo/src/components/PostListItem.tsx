import React, { useEffect, useState } from "react";
import {
    View,
    StyleSheet,
    Text,
} from "react-native";

type PostListItemParamType = {
    id : number,
    title : string,
    body : string,
    userId : number
}

function PostListItem( params : PostListItemParamType ) : React.JSX.Element {

    return (
        <View style={style.listItem}>
            <Text style={style.titleTxt}>{params.id}: {params.title}</Text>
            <Text style={style.bodyTxt}>{params.body}</Text>
        </View>
    );
}


const style = StyleSheet.create({
    listItem: {
        minHeight: 100,
        width: '100%',
        marginBottom: 5,
        backgroundColor: 'grey',
        padding: 10,
    },
    titleTxt:  {
        color: '#FFF',
        fontSize: 25,
        fontWeight: '600',
    },
    bodyTxt: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: '600',
    }
});

export default PostListItem;