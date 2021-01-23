import {ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import TopHeaderBanner from './banner/topHeaderBanner';
import Listing from './listings/Listing';
import {gcss} from "./common/styles";
import ActionBar from "./actions/actionBar";
import {connect} from 'react-redux';

const HOME = props => {
    return (
        <SafeAreaView style={[gcss.safeAreaContainer]}>
            <ActionBar {...props}/>
            <ScrollView style={gcss.flexContainer}>
                <TopHeaderBanner {...props} />
                <Listing {...props} />
            </ScrollView>
        </SafeAreaView>
    );
}
const maps = state => {
    return {
        appColor: state.appConfig.appColor
    }
}
export default connect(maps)(HOME);
// export default HOME;
