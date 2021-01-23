import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {CSS} from "../../common/gcss";
// import Text2Speech from "../../common/text2Speech";
import TopAppName from "../../common/topAppName";
import PickerMenu from "../../common/picker";
import makeDeepCopy from "../../common/makeDeepCopy";
import getFromAPI from "../../common/getFromAPI";
import {Config} from "../../common/Config";
// import {Video} from "expo-av";
import Loading from "../../common/Loading";

const thisStyle = StyleSheet.create({
    descActionBar: {
        marginTop: 30,
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        alignSelf: 'flex-end',
        padding: 1
    }, subheader: {
        fontWeight: 'bold'
    }, imgVid: {
        height: 220
        , width: 500
    }
});

function Description(props) {
    const {navigation, route} = props;
    // console.log('desc', props);
    const {details, catL1, catL2} = route.params;
    const catL1Desc = ['Choose', ...catL1.map(x => x.description)];
    const [loading, setLoading] = useState(true);
    const [pages, setPages] = useState([]);
    const [catL2Desc, setCatL2Desc] = useState(['']);
    const [picker1Val, setPicker1Val] = useState('');
    const [picker2Val, setPicker2Val] = useState('');
    // console.log('description config', config)
    useEffect(() => {
        setLoading(false)
    }, [])

    const selectedValuesPicker1 = (val, idx) => {
        let catMatch = catL1.filter(x => x.description === val);
        let id2match = (typeof catMatch[0] === 'undefined' ? -1 : catMatch[0].id);
        let catL2Desc = catL2.filter(x => x.catL1 === id2match).map(x => x.description);
        // setState({picker1Val: val, picker1Idx: idx, catL2Desc: ['Choose', ...makeDeepCopy(catL2Desc)], pages: []});
        setPicker1Val(val);
        setCatL2Desc(['Choose', ...makeDeepCopy(catL2Desc)])
        setPages([])
    }
    const selectedValuesPicker2 = (val, idx) => {
        let catMatch = catL2.filter(x => x.description === val);
        let id2match = (typeof catMatch[0] === 'undefined' ? -1 : catMatch[0].id);
        let pagesUri = Config.categoryPagesEndPoint + '?id=' + id2match;
        setLoading(true)
        getFromAPI(pagesUri, (res) => {
            setPicker2Val(val)
            setPages(res)
            setLoading(false)
        })
    }

    const showImage = (page) => {
        let {fontColor} = details;
        // console.log('loading', page.description);
        return (<View key={'descImgKey' + page.id}>
            <Text style={[thisStyle.subheader, {color: fontColor}]}>{page.subhead}</Text>
            <Image source={{uri: page.description}} style={thisStyle.imgVid}/>
        </View>)
    }
    const showText = (page) => {
        let {fontColor} = details;
        return <View key={'descTxtKey' + page.id}>
            {/*<Text2Speech val={page.description}/>*/}
            <Text style={[thisStyle.subheader, {color: fontColor}]}>{page.subhead}</Text>
            <Text style={[CSS.para, {color: fontColor}]}>{page.description}</Text>
        </View>
    }
    const showVideo = (page) => {
        let {fontColor} = details;
        return <View><Text>VIDEO in progress....</Text></View>
        // return (<View key={'descVideoKey' + page.id}>
        //     <Text style={[thisStyle.subheader, {color: fontColor}]}>{page.subhead}</Text>
        //     <Video
        //         source={{uri: page.description}}
        //         rate={1.0}
        //         volume={1}
        //         isMuted={true}
        //         resizeMode="cover"
        //         shouldPlay={true}
        //         isLooping={true}
        //         style={thisStyle.imgVid}
        //     />
        // </View>)
    }

    const displayPagesData = () => {
        return pages.map(page => {
            return page.type.toLowerCase() === 'image' ? showImage(page) : page.type.toLowerCase() === 'text' ? showText(page) : showVideo(page);
        });
    }

    const isLoading = () => {
        if (loading) return <Loading/>
    }

    let {category, detail_description, backgroundColor, fontColor} = details;
    return <View style={[CSS.flexContainer, {backgroundColor: backgroundColor}]}>
        <TopAppName pageColor={fontColor} {...props}/>
        <View style={thisStyle.descActionBar}>
            <PickerMenu color={fontColor} data={catL1Desc} onChange={selectedValuesPicker1}/>
            <PickerMenu color={fontColor} data={catL2Desc} onChange={selectedValuesPicker2}/>
        </View>
        <ScrollView style={{flex: 3}}>
            {/*<Text2Speech val={detail_description}/>*/}
            <Text style={[CSS.txtAppColorCentered, {color: fontColor}]}>{category}</Text>
            <Text style={[CSS.para, {color: fontColor}]}>{detail_description}</Text>
            {isLoading()}
            <View>{displayPagesData()}</View>
        </ScrollView>
    </View>
}

export default Description;
