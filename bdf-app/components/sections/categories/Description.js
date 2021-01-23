import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import {globalStyles} from "../../common/GlobalStyle";
import Text2Speech from "../../common/text2Speech";
import SimpleNavigation from "../../footer/bottom/SimpleNavigation";
import TopAppName from "../../common/topAppName";
import PickerMenu from "../../common/picker";
import makeDeepCopy from "../../common/makeDeepCopy";
import getFromAPI from "../../common/getFromAPI";
import {Config} from "../../common/Config";
import {Video} from "expo-av";
import Back from "../../common/back";

export default class Description extends Component {
    constructor(props) {
        super(props);
        this.params = this.props.navigation.state.params;
        this.details = this.params.details;
        this.miscinfo = this.params.miscinfo;
        this.catL1 = this.params.catL1;
        this.catL2 = this.params.catL2;
        this.catL1Desc = ['Choose', ...this.catL1.map(x => x.description)];
        this.state = {
            picker1Val: '',
            picker1Idx: 0,
            picker2Val: '',
            picker2Idx: 0,
            catL2Desc: [''],
            pages: []
        }
    }

    selectedValuesPicker1 = (val, idx) => {
        let catMatch = this.catL1.filter(x => x.description === val);
        let id2match = (typeof catMatch[0] === 'undefined' ? -1 : catMatch[0].id);
        let catL2Desc = this.catL2.filter(x => x.catL1 === id2match).map(x => x.description);
        this.setState({picker1Val: val, picker1Idx: idx, catL2Desc: ['Choose', ...makeDeepCopy(catL2Desc)], pages: []});
    }
    selectedValuesPicker2 = (val, idx) => {
        let catMatch = this.catL2.filter(x => x.description === val);
        let id2match = (typeof catMatch[0] === 'undefined' ? -1 : catMatch[0].id);
        let pagesUri = Config.categoryPagesEndPoint + '?id=' + id2match;
        getFromAPI(pagesUri, (pages) => {
            this.setState({picker2Val: val, picker2Idx: idx, pages: pages});
        });
    }

    showImage = (page) => {
        console.log('loading', page.description);
        return (<View style={[globalStyles.gap]} key={'descImgKey' + page.id}>
            <Text style={thisStyle.subheader}>{page.subhead}</Text>
            <Image source={{uri: page.description}} style={{height: 300, padding: 5}}/>
        </View>)
    }
    showText = (page) => {
        return <View style={[globalStyles.gap]} key={'descTxtKey' + page.id}>
            <Text2Speech val={page.description}/>
            <Text style={thisStyle.subheader}>{page.subhead}</Text>
            <Text>{page.description}</Text>
        </View>
    }
    showVideo = (page) => {
        return (<View style={[globalStyles.gap]} key={'descVideoKey' + page.id}>
            <Text style={thisStyle.subheader}>{page.subhead}</Text>
            <Video
                source={{uri: page.description}}
                rate={1.0}
                volume={1}
                isMuted={true}
                resizeMode="cover"
                shouldPlay={true}
                isLooping={true}
                style={{width: 500, height: 220}}
            />
        </View>)
    }

    displayPagesData = () => {
        return this.state.pages.map(page => {
            return page.type.toLowerCase() === 'image' ? this.showImage(page) : page.type.toLowerCase() === 'text' ? this.showText(page) : this.showVideo(page);
        });
    }

    render() {
        let {category, detail_description} = this.details;
        return (
            <View style={[globalStyles.flexContainer]}>
                <TopAppName/>
                <View style={thisStyle.descActionBar}>
                    <PickerMenu data={this.catL1Desc} onChange={this.selectedValuesPicker1}/>
                    <PickerMenu data={this.state.catL2Desc} onChange={this.selectedValuesPicker2}/>
                    <Back onClick={()=>this.props.navigation.goBack()}/>
                </View>
                <ScrollView style={{flex: 3}}>
                    <Text2Speech val={detail_description}/>
                    <Text style={globalStyles.txtPurpleCenter}>{category}</Text>
                    <Text style={[globalStyles.para]}>{detail_description}</Text>
                    {this.displayPagesData()}
                </ScrollView>
                {/*<SimpleNavigation navigation={this.props.navigation} miscinfo={this.miscinfo}/>*/}
            </View>
        )
    }
}

const thisStyle = StyleSheet.create({
    descActionBar: {
        marginTop: 30,
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        alignSelf: 'flex-end',
        padding: 1
    }, subheader: {
        fontSize: 16
        , fontWeight: 'bold'
    }
})
