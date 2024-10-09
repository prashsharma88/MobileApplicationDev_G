import React, { useState } from "react";
import { 
    Text,
    View, 
    StyleSheet,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

type checkboxPropsType = {
    label : string,
    checkedStatus : boolean,
    updateCheckedStatus : (isChecked : boolean) => void,
};


function CheckBox(props : checkboxPropsType) : React.JSX.Element {

    // const [checked, setChecked] = useState(false);
    const checkedStatus = props.checkedStatus;              // state Variable from Parent component
    const updateCheckedStatus = props.updateCheckedStatus;  // Update state method from Parent component
    const lableTxt = props.label;

    return (
        <View style={style.checkBoxView}>
            <BouncyCheckbox
            isChecked={checkedStatus}
            size={25}
            fillColor="red"
            unFillColor="#FFFFFF"
            // text="Custom Checkbox"
            iconStyle={{ borderColor: "red" }}
            innerIconStyle={{ borderWidth: 2 }}
            // textStyle={{ fontFamily: "JosefinSans-Regular" }}
            onPress={(isChecked: boolean) => {
                // console.log(isChecked);
                updateCheckedStatus(isChecked)
            }}
            />

            <Text style={style.label}>{lableTxt}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    checkBoxView: {
        flexDirection: 'row',
        padding: 10,
    },
    label: {
        fontSize: 25,
        fontWeight: '600',
        color: '#000',
    }
});

export default CheckBox;