import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import TopHeaderBanner from './banner/topHeaderBanner';
import Listing from './listings/Listing';
import {gcss} from "./common/styles";
import ActionBar from "./actions/actionBar";
import SimpleNavigation from "./bottom/SimpleNavigation";

const HOME = props => {
    const {params}=props.navigation.state;
    const {config, dealerInfo}=params;
    return (
        <SafeAreaView style={[gcss.safeAreaContainer]}>
            <ActionBar {...props} config={config}  dealerInfo={dealerInfo}/>
            <ScrollView style={gcss.flexContainer}>
                <TopHeaderBanner {...props} config={config} dealerInfo={dealerInfo}/>
                <Listing {...props} config={config} dealerInfo={dealerInfo}/>
            </ScrollView>
            <SimpleNavigation {...props} config={config}/>
        </SafeAreaView>
    );
}
export default HOME;
