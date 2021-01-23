import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {Component, createRef} from 'react';
import Swiper from 'react-native-swiper';
import {Video} from 'expo-av';
import {Config} from '../../common/Config';
import Loading from "../../common/Loading";
import Popup from "../../common/popup";
import Text2Speech from "../../common/text2Speech";
import getFromAPI from "../../common/getFromAPI";
import {appColor, CSS} from "../../common/gcss";

export default class Adrotator extends Component {
    constructor(props) {
        super(props);
        this.modalRef = createRef();
        this.modalDesc = '';
        this.modalAbout = '';
        this.state = {
            loading: true,
            datasource: []
        };
    }

    componentDidMount() {
        getFromAPI(Config.adsEndpoint, (data) => {
            this.setState({
                datasource: data
                , loading: false
            })
        });
    }

    showAds = () => {
        if (this.state.loading) return <Loading/>;
        return this.state.datasource.map(item => {
            return item.type === 'Image' ? this.showImage(item) : item.type === 'Text' ? this.showText(item) : this.showVideo(item);
        });
    }
    showImage = (value) => {
        return <View key={value.id}>
            <ImageBackground source={{uri: value.description}} style={CSS.fitImage}/>
        </View>
    }
    setModalState = (item) => {
        //set pop ups header and content to show
        this.modalRef.show(item.about, item.description);
    }
    getReadMoreText = (item) => {
        let {about, description} = item;
        let color = appColor(this.props.appColor);
        let txtLen=description.length;
        return <Text style={[color, CSS.para]}>
            <Text style={[color, {fontWeight: 'bold'}]}>{about}{'\n'}</Text>
            <Text>{description.substr(0, 250)}</Text>
            {txtLen>250?<Text style={[{fontWeight: 'bold'}]} onPress={() => this.setModalState(item)}>...More</Text>:''}
        </Text>
    }
    showText = (item) => {
        return <View key={item.id}>
            {this.getReadMoreText(item)}
            <Text2Speech val={item.description}/>
        </View>
    }
    showVideo = (value) => {
        return <View key={value.id}>
            <Video
                source={{uri: value.description}}
                rate={1.0}
                volume={1}
                isMuted={true}
                resizeMode="cover"
                shouldPlay={true}
                isLooping={true}
                style={{width: 500, height: 320}}
            />
        </View>
    }

    render() {
        if (this.state.loading) return <Loading/>;
        return <View>
            <Popup ref={(target) => this.modalRef = target} appColor={this.props.appColor}/>
            <Swiper showsButtons={false} loop={true} showsPagination={true}>
                {this.showAds()}
            </Swiper>
        </View>
    }
}
