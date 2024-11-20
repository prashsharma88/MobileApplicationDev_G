import React, { useEffect, useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    ActivityIndicator,
    TextInput
} from "react-native";
import MyBtn from "./MyBtn";
import AppLayout from "../layout/AppLayout";

const defaultPostReponse = {
    isCompleted : false,
    isSuccess : false,
    postId : -1,
};


function PostComponent() : React.JSX.Element {
    const [titleTxt, setTitleTxt] = useState('');
    const [bodyTxt, setBodyTxt] = useState('');
    const [postResponse, setPostResponse] = useState(defaultPostReponse);

    function postData() {

        // const updatedPostResponse = {...defaultPostReponse};
        const updatedPostResponse = defaultPostReponse;


        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
              title: titleTxt,
              body: bodyTxt,
              userId: 1,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => {
                updatedPostResponse.isCompleted = true;

                console.log("Post Response status : " + response.status);

                if(response.status == 201) updatedPostResponse.isSuccess = true;

                return response.json();
            })
            .then((json) => {
                console.log(json);
                updatedPostResponse.postId = json.id;

                setPostResponse(updatedPostResponse);
            })
            .catch((err) => {
                console.log("Error in Post Request : " + err);
                setPostResponse(updatedPostResponse);
            });
    }

    return (
        <AppLayout>
            <View>
                <TextInput
                numberOfLines={1}
                maxLength={100}
                value={titleTxt}
                onChangeText={setTitleTxt}
                placeholder="Title"
                />

                <TextInput
                numberOfLines={4}
                maxLength={400}
                value={bodyTxt}
                onChangeText={setBodyTxt}
                placeholder="Body"
                />

                <MyBtn title="Submit" onPress={() => {
                    console.log("Submit Clicked");
                    postData();
                }} />

                {postResponse.isCompleted == true &&
                    <View>
                        <Text>
                            PostRequest Completed : {postResponse.isSuccess ? "Success" : "Failed"}
                        </Text>
                        { postResponse.isSuccess==true && 
                            <Text>
                                new Post id is : {postResponse.postId}
                            </Text>
                        }
                    </View> 
                }
            </View>
        </AppLayout>
    );
}

export default PostComponent;