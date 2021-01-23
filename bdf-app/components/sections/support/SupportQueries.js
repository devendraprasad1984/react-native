import React, {Component} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {Config, Enum} from '../../common/Config';
import CustomInput from "../../common/customInput";
import {globalStyles} from "../../common/GlobalStyle";
import postToAPI from "../../common/postToAPI";

export default class SupportQueries extends Component {
    constructor(props) {
        super(props);
    
    }

    handleBack = () => {
        this.props.navigation.navigate(Enum.screenName.home);
    }

    handleSubmit = () => {
        let payload = {
             name: this.name
            , mobile: this.mobile
            , email: this.email
            , query: this.query
        }
        postToAPI(Config.supportregisterEndPoint, payload, (data) => {
            let {status}=data;
            if(status==='success'){
                alert('Data has been saved');
                this.handleBack();
                
            }
        })
    }

    render() {
        
        return (
            <View style={[globalStyles.flexContainer]}>
                
                <View style={[globalStyles.center]}>
                    <Text>Contact Us</Text>
                    <CustomInput type='text' placeholder='Name' onChange={(val) => this.name = val}/>
                    <CustomInput type='text' placeholder='Mobile' onChange={(val) => this.mobile = val}/>
                    <CustomInput type='text' placeholder='Email' onChange={(val) => this.email = val}/>
                    <TextInput style={{ width: 300, padding: 5, borderColor: 'purple', borderWidth: 1, height: 105}} 
                    multiline={true} placeholder=' Enter Your Query '  onChangeText={(val) => this.query = val}/>
                    <Text>{'\n'}</Text>
                    <View style={globalStyles.buttonsRow}>
                        <Button title='Submit' color={Enum.iconColorNavy} onPress={this.handleSubmit}/>
                    </View>
                </View>
            </View>
        );
    }
}
