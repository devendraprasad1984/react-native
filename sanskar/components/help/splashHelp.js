import React, {useEffect, useState} from 'react';
import Onboarding from "react-native-onboarding-swiper";
import {AppImage} from "../common/AppImage";
import Loading from "../common/Loading";

const HelpSplash = props => {
    const [helpPages, setHelpPages] = useState([]);
    const [load, setLoad] = useState(true);
    const imgStyle={height:300,width:300};
    useEffect(() => {
        setHelpPages([
            {
                backgroundColor: '#a6e4d0',
                image:<AppImage uri={'https://cdn.iconscout.com/icon/premium/png-128-thumb/cool-3056046-2542452.png'} style={imgStyle}/>,
                title: 'title2',
                subtitle: 'subtil1e'
            },
            {
                backgroundColor: '#fdeb93',
                image: <AppImage uri={'https://cdn.iconscout.com/icon/premium/png-128-thumb/cool-3056046-2542452.png'}  style={imgStyle}/>,
                title: 'title2',
                subtitle: 'subtil1e'
            }
            ,
            {
                backgroundColor: '#e9bcbe',
                image: <AppImage uri={'https://cdn.iconscout.com/icon/premium/png-128-thumb/order-2007308-1694622.png'}  style={imgStyle}/>,
                title: 'title2',
                subtitle: 'subtil1e'
            }
        ]);
        setLoad(false);
    }, []);
    const handleSkip = () => {
        props.navigation.goBack();
    }
    return load ? <Loading/> : <Onboarding
        pages={helpPages}
        onSkip={handleSkip}
        onDone={handleSkip}
    />
}
export default HelpSplash;
