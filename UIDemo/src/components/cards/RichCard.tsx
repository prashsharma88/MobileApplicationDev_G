import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Pressable,
} from "react-native";
import Snackbar from "react-native-snackbar";

function RichCard () : React.JSX.Element {

    function clickHandler() {
        return (Snackbar.show({
            text: "Action Button Pressed",
            backgroundColor: "#6A9C89",
            textColor: '#FFF',
        }));
    }

    return (
        <View style={style.cardView}>
            {/* Card Image View */}
            <View style={style.imgView}>
                <Image
                style={style.img}
                source={require("../../../assets/images/dog_1.png")}>
                </Image>
            </View>

            <View style={style.divider} />

            {/* Card Title */}
            <Text style={[style.cardTitle, style.txtColor]}>Title</Text>

            {/* Card Text */}
            <Text style={[style.cardTxt,style.txtColor]} numberOfLines={2}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit incidunt cupiditate quasi. Nemo sunt unde sapiente, commodi ea vitae deleniti cupiditate enim iste quia quisquam perferendis, officia totam doloribus vero?
            </Text>

            {/* Card Action Button View */}
            <View>
                {/* Pressable is a container element and any view inside 
                this container can act a button.
                Add handler in onPress attribute.
                */}
                <Pressable onPress={clickHandler}>
                    <Text style={[style.btnPrimary, style.txtColor]}>
                        Action Button
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    cardView: {
        height: 380,
        width: 380,
        backgroundColor: '#8EACCD',
        borderColor: '#8EACCD',
        borderRadius: 15,
        margin: 10,
        alignItems: 'center',
        padding: 10,
        overflow: 'hidden'
    },

    imgView: {
        height:150,
        width:'100%',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },

    img: {
        resizeMode: 'contain',
        height: 180,
    },

    divider: {
        width: '100%',
        height: 2,
        backgroundColor: '#FFF',
        marginVertical: 5,
    },

    cardTitle: {
        fontSize: 30,
        fontWeight: '600',  
    },

    cardTxt: {
        fontSize: 25,
    },

    txtColor: {
        color: '#FFF',
    },

    btnPrimary: {
        backgroundColor: '#FABC3F',
        fontSize: 25,
        paddingVertical: 15,
        paddingHorizontal: 25,
        marginTop: 20,
        borderRadius: 15,
    }
});

export default RichCard;