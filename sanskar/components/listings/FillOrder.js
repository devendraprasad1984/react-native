import {ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import {appColor, gcss} from "../common/styles";
import TopAppName from "../common/topAppName";
import {Heading, SubHeading} from "../common/Heading";
import Loading from "../common/Loading";
import CustomInput from "../common/customInput";
import {AppButton} from "../common/AppButton";


export default function FillOrder(props) {
    const params = props.navigation.state.params;
    const {item, color, bg} = params;
    const {config,dealerInfo}=params.props;
    const [loading, setLoading] = useState(false);
    let remarks,pin,order='';
    const {category} = item;

    const handleSubmit = () => {
        let payload = {pin,remarks, order};
        console.log(payload);
        // setLoading(true);
        // postToAPI(Config.supportRegisterEndPoint, payload, (data) => {
        //     let {status} = data;
        //     if (status === successMsg) {
        //         setLoading(false);
        //         alert('order has been sent, we will get back to you');
        //         props.navigation.goBack();
        //     } else {
        //         setLoading(false);
        //         alert('not saved, plz contact Admin');
        //         props.navigation.goBack();
        //     }
        // });
    }
    const isLoading=()=> {
        if (loading) return <Loading/>;
    }
    pin='dp12'; //agent code get from redux state, set in splash at the time of login
    return <View style={[gcss.flexContainer]}>
        <TopAppName {...props}/>
        <ScrollView style={{flex: 1}}>
            <View>{isLoading()}</View>
            <View>
                <Heading val={category}/>
                <SubHeading val={`Agent Code: ${pin}`}/>
                <CustomInput placeholder='Your order' onChange={(val) => order = val} multiline={true}/>
                <CustomInput placeholder='remarks' onChange={(val) => remarks = val}/>
                <AppButton style={{bg:appColor()}} width={70} onPress={handleSubmit} title='Save'/>
            </View>
            <View>
                <Heading val={'Last 3 Months Orders....'} />
            </View>
        </ScrollView>
    </View>
}
