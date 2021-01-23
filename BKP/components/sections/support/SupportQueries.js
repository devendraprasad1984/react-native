import React, {Component} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {Config, Enum} from '../../common/Config';
import CustomInput from "../../common/customInput";
import {CSS} from "../../common/gcss";
import postToAPI from "../../common/postToAPI";
import Loading from "../../common/Loading";

export default class SupportQueries extends Component {
    constructor(props) {
        super(props);
        this.state={
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
        postToAPI(Config.supportregisterEndPoint, payload, (data) => {
            let {status} = data;
            if (status === Enum.success) {
                this.setState({loading: false});
                alert('Data has been saved');
                this.props.navigation.goBack();
            }else{
                this.setState({loading: false});
                alert('not saved, plz contact BDF Admin');
                this.props.navigation.goBack();
            }
        })
    }
    isLoading=()=>{
        if (this.state.loading) return <Loading />
    }

    render() {
        let multiline={
            multiline:true, height:120
        }
        return (
            <View style={[CSS.flexContainer]}>
                <View style={[CSS.center]}>
                    <CustomInput type='text' placeholder='Name' onChange={(val) => this.name = val}/>
                    <CustomInput type='text' placeholder='Mobile' onChange={(val) => this.mobile = val}/>
                    <CustomInput type='text' placeholder='Email' onChange={(val) => this.email = val}/>
                    <CustomInput type='text' placeholder='Your Query' onChange={(val) => this.query = val} {...multiline}/>
                    <Button title='Submit' color={Enum.iconColorPurple} onPress={this.handleSubmit}/>
                    {this.isLoading()}
                </View>
            </View>
        );
    }
}
