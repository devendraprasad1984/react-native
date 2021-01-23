import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import Popup from "../common/popup";
import {appColor, gcss} from "../common/styles";
import {AppVideo} from "../common/AppVideo";
import {AppImage} from "../common/AppImage";
import {Enum} from "../common/Config";

const styles = StyleSheet.create({
    adsHeaderStyle: {
        fontSize: 15,
        marginTop: 10,
        marginLeft: 40,
        marginRight: 20
    },
    adsDescStyle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 40,
        marginRight: 20
    }
});


const CustomBanner = props => {
    let modalRef = React.useRef();
    const [data, setDatasource] = React.useState(props.data);

    const handleImageClickForOffer=(item)=>{
        if(item.placeOnApp.toLowerCase()==='offer'){
            props.navigation.navigate(Enum.screenName.offers,{item});
        }
    }
    const showBannerItems = () => data.map(item => item.type.toLowerCase() === 'image' ? showImage(item) : item.type.toLowerCase() === 'text' ? showText(item) : showVideo(item));
    const showImage = (value) => <View key={value.id}><TouchableOpacity onPress={()=>handleImageClickForOffer(value)}><AppImage uri={value.description}/></TouchableOpacity></View>;
    const setModalState = (item) => modalRef.show(item.about, item.description);
    const getReadMoreText = (item) => {
        let {description} = item;
        let color = appColor(props.appColor);
        return <Text style={{textAlign: 'justify'}}>
            {description.substr(0, 200)}
            <Text style={[{fontWeight: 'bold', fontSize: 20}, color]} onPress={() => setModalState(item)}>...More</Text>
        </Text>
    }
    const showText = (item) => {
        let {about, description} = item;
        let color = appColor(props.appColor);
        return <View key={item.id}>
            <Text style={[styles.adsDescStyle, color]}>{about}</Text>
            <Text style={[styles.adsHeaderStyle, color]}>
                {description.length > 200 ? getReadMoreText(item) : description}
            </Text>
            {/*<Text2Speech val={description}/>*/}
        </View>
    }
    const showVideo = (value) => {
        // console.log('webview',value.description);
        return <View key={value.id}><AppVideo uri={value.description}/></View>
    }

    return <View style={{flex:1}}>
        <Popup ref={(target) => modalRef = target} appColor={props.appColor}/>
        <View style={[gcss.xheight]}>
            <Swiper showsButtons={false}
                    loop={true} showsPagination={true}
                    autoplay={props.autoplay || false}
                    horizontal={props.horizontal || false}>
                {showBannerItems()}
            </Swiper>
        </View>
    </View>
}

export default CustomBanner;
