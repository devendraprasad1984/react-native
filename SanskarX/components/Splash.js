import {Text, View} from 'react-native';
import {appColor, gcss} from './common/styles';
import React, {useEffect, useState} from 'react';
import {Config, configFilterByKey, Enum} from "./common/Config";
import {bindActionCreators} from "redux";
import getConfigWithRedux from "./common/getConfigWithRedux";
import {connect} from "react-redux";
import {AppButton} from "./common/AppButton";
import CustomInput from "./common/customInput";
import postToAPI from "./common/postToAPI";
import {Local} from "./common/local";
import {AppImage} from "./common/AppImage";
import Loading from "./common/Loading";

const Splash = props => {
    const {getConfigWithRedux, config} = props;
    const [loggedin, setLoggedIn] = useState(false);
    const [load, setLoad] = useState(true);
    const [mount, setMount] = useState(true);
    const [splashtext, setsplashtext] = useState({value: ''});
    const [splashimage, setsplashimage] = useState({value: null});
    const [tagline, setTagLine] = useState({value: 'made in india...'});
    const [licence, setLicence] = useState({value: ''});
    const [dealerInfo, setDealerInfo] = useState({});
    const {params}=props.navigation.state;
    const {signout}=params!==undefined ? params : {signout:0};
    let pin = '';

    const checkFromLocal = () => {
        Local.get(Enum.asyncKeys.mainkey, (val) => {
            if(val===false){
                setLoggedIn(false);
            }
            if (val !== undefined && val.isloggedin === 1 && val!==false) {
                setDealerInfo(val);
                setLoggedIn(true);
            }
        });
    }

    if(signout===1) checkFromLocal();
    const navNextFromSplash = () => {
        props.navigation.navigate(Enum.screenName.mainAppNav,{dealerInfo,config});
    }

    useEffect(() => {
        checkFromLocal();
        getConfigWithRedux((status, data) => {
            let newConfig = config.length === 0 || config === undefined ? data : config;
            setsplashtext(configFilterByKey(newConfig, Enum.configKeys.splashtxt));
            setsplashimage(configFilterByKey(newConfig, Enum.configKeys.splashimg));
            setLicence(configFilterByKey(newConfig, Enum.configKeys.licence));
            setTagLine(configFilterByKey(newConfig, Enum.configKeys.tagline));
            setLoad(false);
            // console.log('redux pull objects on splash',props.appColor);
        });
    }, []);

    const handleGo = () => {
        if (loggedin) {
            navNextFromSplash();
            return;
        }

        if (pin === '') {
            alert('plz input agent unique guid code');
            return;
        }
        let payload = {agent: 1, validate: 1, pin};
        postToAPI(Config.agentValidator, payload, (res) => {
            // console.log(res);
            if (res.status === Enum.successMsg) {
                const {info}=res;
                const mainDealerInfo={
                    isloggedin: 1,
                    token: 'got the token',
                    agentid: info.agentid,
                    name: info.name,
                    email: info.email,
                    type: info.type,
                    xtype: info.xtype,
                    misc:info
                };
                setDealerInfo(mainDealerInfo);
                Local.set(mainDealerInfo, v => navNextFromSplash());
            } else
                alert(Enum.validateMss);
        });
    }
    const handleHelp = () => {
        props.navigation.navigate(Enum.screenName.helpSplash);
    }
    const handleForgot = () => {
        if (pin === '') {
            alert('plz input agent id to get forgot email');
            return;
        }
        let payload = {agent: 1, forgot: 1, pin};
        postToAPI(Config.forgotCode, payload, (res) => {
            if (res.status === Enum.successMsg)
                alert(Enum.forgotMailSuccessMsg);
            else
                alert(Enum.forgotMailFailMsg);
        });
    }

    let splittext = splashtext.value.split('\n');
    let color = appColor(props.appColor);

    const LoggedInChecker = () => {
        // if(!mount) checkFromLocal();
        if (load) return <Loading/>;
        if (!loggedin && mount) {
            return <View style={[gcss.inrow]}>
                <CustomInput type='password' width={160} submit={handleGo} placeholder='enter password / forgot provide code' onChange={(val) => pin = val}/>
                <AppButton width={50} onPress={handleGo} title='Go'/>
                <AppButton width={90} onPress={handleForgot} title='forgot?'/>
                <AppButton width={50} onPress={handleHelp} title='??'/>
            </View>
        } else {
            return <View style={[gcss.inrow]}>
                <AppButton width={150} onPress={handleGo} title={`Welcome ${dealerInfo.agentid}`}/>
                <AppButton width={50} onPress={handleHelp} title='??'/>
            </View>
        }
    }
    if (load) return <Loading/>;
    return (
        <View style={[gcss.flexContainer, gcss.bgwhite]}>
            <View style={[{flex: 2, margin: '10%'}, gcss.inrow]}>
                <AppImage uri={Enum.MedLoader} style={[gcss.splashImage]} med={true}/>
                <AppImage uri={splashimage.value} style={[gcss.splashImage]}/>
            </View>
            <View>
                <Text style={[gcss.splashFirstTxt, color]}>{splittext[0]}</Text>
                <Text style={gcss.splashSecondTxt}>{splittext[1]}</Text>
            </View>
            <View>
                <Text style={[color]}>{tagline.value}</Text>
                {LoggedInChecker()}
            </View>
            <View style={[gcss.bottom]}>
                <Text>{licence.value}</Text>
            </View>
        </View>
    );
}
const mapStateToProps = (state) => {
    return {
        config: state.appConfig.configObject,
        appColor: state.appConfig.appColor
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({getConfigWithRedux}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);



