import React, {Component} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {Config, Enum} from '../common/Config';
import CustomInput from "../common/customInput";
import {gcss} from "../common/styles";
import postToAPI from "../common/postToAPI";
import Loading from "../common/Loading";
import {AppButton} from "../common/AppButton";

export default class SupportQueries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }

    handleSubmit = () => {
        let payload = {
            name: this.name
            , mobile: this.mobile
            , email: this.email
            , query: this.query
        }
        this.setState({loading: true});
        postToAPI(Config.supportRegisterEndPoint, payload, (data) => {
            let {status} = data;
            if (status === Enum.successMsg) {
                this.setState({loading: false});
                alert('Data has been saved');
                this.props.navigation.goBack();
            } else {
                this.setState({loading: false});
                alert('not saved, plz contact Admin');
                this.props.navigation.goBack();
            }
        })
    }
    isLoading = () => {
        if (this.state.loading) return <Loading/>
    }

    render() {
        return (
            <View style={[gcss.flexContainer]}>
                <View style={[gcss.center]}>
                    <CustomInput type='text' placeholder='Name' onChange={(val) => this.name = val} icon='user-o'/>
                    <CustomInput type='text' placeholder='Mobile' onChange={(val) => this.mobile = val} icon='mobile'/>
                    <CustomInput type='text' placeholder='Email' onChange={(val) => this.email = val} icon='mail-forward'/>
                    <CustomInput type='text' placeholder='Your Query' onChange={(val) => this.query = val} icon='question-circle-o' multiline={true}/>
                    <AppButton width={80} title='Send' onPress={this.handleSubmit} icon='save'/>
                    {this.isLoading()}
                </View>
            </View>
        );
    }
}
