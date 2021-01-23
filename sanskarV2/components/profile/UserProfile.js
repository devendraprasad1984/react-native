import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View, SafeAreaView} from 'react-native';
import {gcss} from "../common/styles";
import TopAppName from "../common/topAppName";
import {AppButton} from "../common/AppButton";
import {Local} from "../common/local";
import {Enum} from "../common/Config";
import {getFromLocalMain} from "../common/local";
import AppIcon from "../common/AppIcon";
import {Heading} from "../common/Heading";
import CustomInput from "../common/customInput";
import Accordian from "../common/Accordian";

const UserProfile = props => {
    const {params} = props.navigation.state;
    const {config,dealerInfo}=params;
    // console.log('profile', config, dealerInfo);

    let btnWidth = 120;
    let saveBtnWidth = 60;
    const [text1, setText1] = useState('Choose an Option');
    const [curbg, setCurbg] = useState('#fdeb93');
    const [xview, setXview] = useState(null);
    const [who, setWho] = useState({name:'user'});
    const [load, setLoad] = useState(false);

    // useEffect(()=>{
    //     getFromLocalMain((obj)=>{
    //         console.log(obj);
    //         setWho(obj);
    //     })
    // },[]);

    const handleSignout = () => {
        props.navigation.navigate(Enum.screenName.splash,{signout:1, params});
        // Local.remove(Enum.asyncKeys.mainkey, (v) => {
        //     // console.log('signedout',v);
        //     props.navigation.navigate(Enum.screenName.splash,{signout:1});
        // });
    }
    const dummy = () => {
        alert('in progress');
    }
    const handleAddress = () => {
        setText1('Address');
        setCurbg('#CCCCFF');
        let handleThis = () => {
            alert('saved address');
        }
        let elem = null;
        elem = <View>
            <CustomInput placeholder={'address: '+dealerInfo.misc.address} icon='address-card'/>
            <CustomInput placeholder={'city: '+dealerInfo.misc.city} icon='city' mat={true}/>
            <CustomInput placeholder={'country: '+dealerInfo.misc.country} icon='zip-box' mat={true}/>
            <CustomInput placeholder={'pin: '+dealerInfo.misc.pincode} icon='map-pin'/>
            <CustomInput placeholder='landmark' icon='map-marker'/>
            <AppButton title='Save' width={saveBtnWidth} onPress={handleThis}/>
        </View>;
        setXview(elem);
    }
    const handlePassword = () => {
        setText1('Password Management');
        setCurbg('#ddcdf6');
        let handleThis = () => {
            alert('saved password');
        }
        let elem = null;
        elem = <View>
            <CustomInput type='password' placeholder='password' icon='key'/>
            <CustomInput type='password' placeholder='confirm password' icon='keyboard-o'/>
            <AppButton title='Save' width={saveBtnWidth} onPress={handleThis}/>
        </View>;
        setXview(elem);
    }
    const handleContacts = () => {
        setText1('Phone and Contacts');
        setCurbg('#efc0d8');
        let handleThis = () => {
            alert('saved contact');
        }
        let elem = null;
        elem = <View>
            <CustomInput placeholder='enter name' icon='key'/>
            <CustomInput placeholder={who.email} icon='email' mat={true}/>
            <CustomInput placeholder='enter mobile' icon='cellphone' mat={true}/>
            <AppButton title='Save' width={saveBtnWidth} onPress={handleThis}/>
        </View>;
        setXview(elem);
    }
    const handleBills = () => {
        setText1('Billing Info');
        setCurbg('#FFCC99');
        let elem = null;
        elem = <View>
            <Text>information about the bills that you have been generated...</Text>
        </View>;
        setXview(elem);
    }
    const handlePolicies = () => {
        setText1('Policies');
        setCurbg('#eee3b2');
        let elem = null;
        elem = <View>
            <Text>company policy information for using the app</Text>
        </View>;
        setXview(elem);
    }
    const handleLicence = () => {
        setText1('Licences');
        setCurbg('#b9e6f3');
        let elem = null;
        elem = <View>
            <Text>your personal contract as agreed by you and the company</Text>
        </View>;
        setXview(elem);
    }
    const handleHelp = () => {
        let helpData=[{title:'title1',content:'content1',link:'https://google.com'},{title:'title2',content:'content2',link:'https://dpresume.com'},{title:'title3',content:'content3',link:''}];
        let displayAccordianHelp=()=>{
            return helpData.map((x,i)=>{
                return <Accordian key={'helpAccordKey'+i} title={x.title} data={x.content} link={x.link}/>
            });
        }
        setText1('Help');
        setCurbg('#ececb3');

        let elem = null;
        elem = <View>
            <Text>some faq about using the app, for anything else, please get in touch...</Text>
            {displayAccordianHelp()}
        </View>;
        setXview(elem);
    }


    return <SafeAreaView style={[gcss.safeAreaContainer,gcss.flexContainer]}>
        {/*<TopAppName {...props}/>*/}
        <View style={[gcss.inrow]}>
            <AppIcon name={'face'} mat={true} size={80}/>
            <Heading val={who.name} icon='ice-cream' mat={true} style={{marginTop: 20}}/>
            <View style={[gcss.rightAlign]}><AppButton width={btnWidth-70} onPress={handleSignout} title='' icon='sign-out'/></View>
        </View>
        <View style={[gcss.inrow]}>
            <View>
                <AppButton width={btnWidth} onPress={handleAddress} title='Address' icon='fort-awesome'/>
                <AppButton width={btnWidth} onPress={handleContacts} title='Contacts' icon='deskphone' mat={true}/>
                <AppButton width={btnWidth} onPress={handlePassword} title='Password' icon='key'/>
            </View>
            <View>
                <AppButton width={btnWidth} onPress={handleBills} title='Bills' icon='currency-inr' mat={true}/>
                <AppButton width={btnWidth} onPress={handlePolicies} title='Policies' icon='poll' mat={true}/>
                <AppButton width={btnWidth+5} onPress={handleLicence} title='Licencing' icon='license' mat={true}/>
            </View>
            <View>
                <AppButton width={btnWidth} onPress={handleHelp} title='Help?' icon='timeline-help' mat={true}/>
            </View>
        </View>
        <ScrollView style={[gcss.flexContainer, {backgroundColor: curbg}]}>
            <Heading val={text1}/>
            {xview}
        </ScrollView>
    </SafeAreaView>
}


export default UserProfile;
