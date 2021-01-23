import React, {Component} from 'react';
import {Button, Text, View, TextInput} from 'react-native';
import {Config, Enum} from '../../common/Config';
import CustomInput from "../../common/customInput";
import {globalStyles} from "../../common/GlobalStyle";
import TopAppName from "../../common/topAppName";
import postToAPI from "../../common/postToAPI";
import AlertMe from "../../common/Alert";

export default class RegisterEvent extends Component {
    constructor(props) {
        super(props);
        this.params = this.props.navigation.state.params;
    }

    handleBack = () => {
        this.props.navigation.goBack();
    }
    handleHome = () => {
        this.props.navigation.navigate(Enum.screenName.home);
    }
    handleSubmit = () => {
        let {eventid, title} = this.params;
        let payload = {
            eventid
            , name: this.name
            , mobile: this.mobile
            , email: this.email
            , info: this.info
        }
        // console.log('event info', payload);
        postToAPI(Config.registerEndPoint, payload, (data) => {
            let {status}=data;
            if(status==='success'){
                alert('Data has been saved');
                this.handleBack();
            }
        })
    }

    render() {
        let {eventId, title} = this.params;
        return (
            <View style={[globalStyles.flexContainer]}>
                <TopAppName/>
                <View style={[globalStyles.center]}>
                    <Text style={[globalStyles.txtPurpleCenter]} onPress={this.handleBack}>Register for - {title}</Text>
                    <CustomInput type='text' placeholder='Name' onChange={(val) => this.name = val}/>
                    <CustomInput type='text' placeholder='Email' onChange={(val) => this.email = val}/>
                    <CustomInput type='text' placeholder='Mobile' onChange={(val) => this.mobile = val}/>
                    <TextInput style={{ width: 300, padding: 5, borderColor: 'purple', borderWidth: 1, height: 105}} 
                    multiline={true} placeholder=' Additional info' onChangeText ={(val) => this.info = val}/>
                    <View style={globalStyles.buttonsRow}>
                        <Button title='Home' color={Enum.iconColorPurple} onPress={this.handleHome}/>
                        <Button title='Back' color={Enum.iconColorOrange} onPress={this.handleBack}/>
                        <Button title='Submit' color={Enum.iconColorNavy} onPress={this.handleSubmit}/>
                    </View>
                </View>
            </View>
        );
    }
}
