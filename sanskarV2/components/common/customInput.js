import {TextInput, View, Keyboard} from 'react-native';
import React from 'react';
import {Enum} from "./Config";
import {gcss} from "./styles";
import AppIcon from "./AppIcon";

const CustomInput = props => {
    let input = React.createRef();
    const {onChange, placeholder, multiline, width, type, icon, submit} = props;
    const inputStyle = {
        width: (width !== undefined ? width : 250),
        margin: 3,
        borderColor: Enum.purple,
        color: Enum.purple,
        borderWidth: 1,
        padding: 5,
        textAlignVertical: 'top',
        height: (multiline === true ? 120 : 30)
    }
    const pwd = type === 'password' ? true : false;
    let xsubmit=submit;
    if(submit===undefined) xsubmit=()=>{}

    return <View style={gcss.inrow}>
        {icon !== undefined ? <AppIcon {...props} name={icon}/> : null}
        <TextInput
            multiline={multiline}
            secureTextEntry={pwd}
            ref={input}
            placeholderTextColor={Enum.purple}
            autoCorrect={false}
            placeholder={placeholder}
            style={inputStyle}
            underlineColorAndroid="transparent"
            onChangeText={onChange}
            onSubmitEditing={()=> {
                Keyboard.dismiss();
                xsubmit();
            }}
            // onKeyPress={submit}
            keyboardType="default"
            returnKeyType="done"
            {...props}
        />
    </View>;
}

export default CustomInput;
