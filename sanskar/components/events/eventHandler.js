import {ScrollView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {configFilterByKey, Enum} from '../common/Config';
import Back from "../common/back";
import {gcss} from "../common/styles";
import getFromAPI from '../common/getFromAPI';
import HTML from 'react-native-render-html';
import Loading from '../common/Loading';
import {connect} from "react-redux";
import TopAppName from "../common/topAppName";

const EventHandler = props => {
    const [datasource, setDatasource] = useState([]);
    const [loading, setLoading] = useState(true);
    const {config} = props;
    useEffect(() => {
        let url = configFilterByKey(config, Enum.configKeys.getevent);
        getFromAPI(url.value, (data) => {
            setDatasource(data);
            setLoading(false);
        })
    }, []);

    function DisplayContent() {
        return datasource.map((contents, index) =>
            <View key={'item-event-row' + index} style={{paddingTop: 5, padding: 3}}>
                <View style={gcss.eventView}>
                    <Text style={gcss.eventTxt}>
                        {contents.title.rendered} </Text>
                    <View style={gcss.horizonatalRule}/>
                    <HTML ignoredStyles={["font-family", 'padding', 'transform',
                        'font-weight', "letter-spacing", "display", "color"]}
                          style={{textAlign: 'center', alignSelf: 'center', paddingSide: 5}}
                          source={{html: contents.content.rendered}}
                    />
                </View>
            </View>
        )
    }

    if (loading === true) return <View style={{flex: 1, marginTop: 50}}>
        <Loading/></View>
    return (
        <View style={gcss.flexContainer}>
            <TopAppName {...props}/>
            <ScrollView>
                <Text style={gcss.eventHeading}>
                    UPCOMING EVENTS</Text>
                {DisplayContent()}
            </ScrollView>
        </View>

    );
}

const mapStateToProps = (state) => {
    return {
        config: state.appConfig.configObject
    }
}
export default connect(mapStateToProps)(EventHandler);

