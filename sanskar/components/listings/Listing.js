import {Image, ScrollView, Text, View,TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Loading from "../common/Loading";
import {appColor, bgColor, gcss} from "../common/styles";
import {Heading} from "../common/Heading";
import getFromAPI from "../common/getFromAPI";
import {Config} from "../common/Config";
import CustomBanner from "../banner/CustomBanner";

export default function Listing(props) {
    const [iconsSource, setIconSource] = useState([]);
    const [cardsSource, setCardSource] = useState([]);
    const [iconLoad, setIconLoad] = useState(true);
    const [offerLoad, setOfferLoad] = useState(true);
    const [offerData,setOfferData]=useState([]);

    useEffect(() => {
        getFromAPI(Config.listingIconsEndpoint, (res) => {
            setIconSource(res);
            setIconLoad(false);
        });
        getFromAPI(Config.offerEndpoint, (res) => {
            setOfferData(res);
            setOfferLoad(false);
        });
    }, []);

    const handleIconClick = (item) => {
        let color = appColor(props.appColor);
        let backColor = bgColor(props.appColor);
        const navOptions = {item, color, bg: backColor,...{props}};
        props.navigation.navigate(item.screen, navOptions);
    }

    const getListIcons = (data) => {
        const color = appColor(props.appColor);
        return data.map((x, i) => {
            return <TouchableOpacity key={'vri' + i} title={x.category} onPress={() => handleIconClick(x)}>
                <Image style={gcss.iconImg} source={{uri: x.icons}}/>
                <Text style={[gcss.iconText, color]}> {x.category}</Text>
            </TouchableOpacity>
        });
    }

    const mainRender = (id, cat, headText) => {
        let function2Call = undefined;
        if (headText.toLowerCase() === 'services') function2Call = () => getListIcons(iconsSource);
        if (headText.toLowerCase() === 'recommendation') function2Call = () => getListIcons(iconsSource);
        if (function2Call === undefined) return null;
        return <ScrollView style={[gcss.xheight, gcss.xmargin]}>
            <Heading val={headText} {...props} />
            <View style={[gcss.inrow]}>{function2Call()}</View>
        </ScrollView>;
    }
    const renderBanner = (headText) => {
        return <View style={[gcss.xheight, gcss.xmargin]}>
            <Heading val={headText} {...props} />
            <CustomBanner {...props} data={offerData} autoplay={true} horizontal={false}/>
        </View>;
    }

    if (iconLoad || offerLoad) return <Loading/>;
    return (
        <View>
            {mainRender(0, 'icons', 'Services')}
            {renderBanner('Offers')}
            {/*{mainRender(1, 'icons', 'Recommendation')}*/}
        </View>
    );
}
