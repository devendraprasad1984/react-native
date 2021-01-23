import React from 'react';
import {Linking, View, ScrollView} from 'react-native';
import {gcss} from "../common/styles";
import TopAppName from "../common/topAppName";
import {Heading, SubHeading} from "../common/Heading";
import {AppImage} from "../common/AppImage";
import AppIcon from "../common/AppIcon";

const Offers = props => {
    const params = props.navigation.state.params;
    const {item, color, bg} = params;
    const {config,dealerInfo}=params.props;
    const {about, description, link, offertype, type} = item;
    const subhead = {width: 100, height: 100};
    const margin={marginTop: 30};
    // console.log(about,description,link,offertype,type);
    return <View style={gcss.flexContainer}>
        <TopAppName {...props}/>
        <Heading val={'Offers'}/>
        <View style={gcss.inrow}>
            <AppImage uri={description} style={subhead}/>
            {link !== undefined && link !== '' ? <AppIcon style={margin} name="google-chrome" mat={true} onPress={() => Linking.openURL(link)}/> : null}
            <SubHeading val={about} style={margin}/>
        </View>
        <ScrollView style={gcss.flexContainer}>
            <SubHeading val='Information about this offer'/>
        </ScrollView>
    </View>
}


export default Offers;
