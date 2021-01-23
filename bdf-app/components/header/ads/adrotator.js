import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {Component, createRef} from 'react';
import Swiper from 'react-native-swiper';
import {Video} from 'expo-av';
import {Config} from '../../common/Config';
import Loading from "../../common/Loading";
import Popup from "../../common/popup";
import Text2Speech from "../../common/text2Speech";
import getFromAPI from "../../common/getFromAPI";
import {globalStyles} from "../../common/GlobalStyle";

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
        if (this.state.loading) return <Loading text={'please wait...'}/>;
        return this.state.datasource.map(item => {
            return item.type === 'Image' ? this.showImage(item) : item.type === 'Text' ? this.showText(item) : this.showVideo(item);
        });
    }
    showImage = (value) => {
        return (<View key={value.id}>
            <ImageBackground source={{uri: value.description}}
                             style={globalStyles.fitImage}/>
        </View>)
    }
    setModalState = (item) => {
        //set pop ups header and content to show
        this.modalRef.show(item.about, item.description);
    }
    getReadMoreText = (item) => {
        let {description}=item;
        return (
            <Text style={{textAlign: 'justify'}}>
                {description.substr(0, 200)}
                <Text style={{color: 'yellow', fontWeight: 'bold', fontSize: 20}}
                      onPress={() => this.setModalState(item)}>...More</Text>
            </Text>
        );
    }
    showText = (item) => {
        let {about, description} = item;
        return (<View key={item.id}>
            <Text style={styles.descstyle}>{about}</Text>
            <Text style={styles.abstyle}>
                {description.length > 200 ? this.getReadMoreText(item) : description}
            </Text>
            <Text2Speech val={description}/>
        </View>)
    }
    showVideo = (value) => {
        return (<View key={value.id}>
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
        </View>)
    }

    render() {
        if (this.state.loading) return <Loading text={'please wait...'}/>;
        return (
            <View style={[globalStyles.adsContainer, globalStyles.bgPurple]}>
                <Popup ref={(target) => this.modalRef = target}/>
                <View>
                    <Swiper showsButtons loop={true} showsPagination={true}>
                        {this.showAds()}
                    </Swiper>
                </View>
            </View>
        )
    }
}


// css styling used in the code
const styles = StyleSheet.create({
    abstyle: {
        fontSize: 15,
        color: 'white',
        marginTop: 10,
        marginLeft: 40,
        marginRight: 20
    },
    descstyle: {
        fontSize: 22,
        color: 'yellow',
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20
    }
});
