import React, { useEffect, useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    FlatList,
    ActivityIndicator
} from "react-native";
import PostListItem from "./PostListItem";
import MyBtn from "./MyBtn";


const GET_URL : string = 'https://jsonplaceholder.typicode.com/posts';

interface Post {
    id : number,
    title : string,
    body : string,
    userId : number,
}


function GetComponent() : React.JSX.Element {

    const [postData, setPostData] = useState(new Array<Post>());
    const [reloadCount, setReloadCount] = useState(0);
    const [loading, setLoading] = useState(true);


    // fetch() what does this return.
    // Promise ?? is an object that represent 
    // eventual completion of a task.
    // This is an async operation.

    useEffect(() => {

        console.log("Effect Function");
        // Effect function
        // synchronization code
        // Perfom the get request
        fetch(GET_URL)
        .then((response) => {
            console.log("RESPONSE");
            // console.log(response);
            return response.json();
        })
        .then((json) => {
            console.log("BODY");
            // console.log(json);
            setPostData(json); // updating state of this component.
            setLoading(false);
        })
        .catch(err=>console.log("Error in Get Component: " + err.message));

    }, 
    [/* Dependency Array */ reloadCount]);

    return (
        <View>
            <MyBtn title="Reload" onPress={() => {
                console.log("reload");
                setReloadCount(reloadCount+1);
                setLoading(true);
            }} />
            {loading && <ActivityIndicator
            size="large"
            />}
            {!loading && <FlatList 
            data={postData}
            renderItem={({item}) => {
                return (
                    <PostListItem 
                    title={item.title}
                    body={item.body}
                    id={item.id}
                    userId={item.userId}
                    />
                )
            }}
            keyExtractor={item => item.id+""}
            />}
        </View>
    );
}

const style = StyleSheet.create({

});

export default GetComponent;