import {TextInput} from 'react-native';
import React,{Component, createRef} from 'react';
import {Enum} from "./Config";

export default class CustomInput extends Component {
    constructor(props) {
        super(props);
        this.input=createRef();
    }
    render(){
        let {onChange, placeholder} = this.props;
        let inputStyle={
            width: 300,
            margin: 5,
            borderColor: Enum.iconColorPurple,
            borderWidth: 1,
            padding: 5
        }
        return (
            <TextInput
                ref={this.input}
                placeholder={placeholder}
                style={inputStyle}
                underlineColorAndroid="transparent"
                onChangeText={onChange}
            />
        );
    }
}
