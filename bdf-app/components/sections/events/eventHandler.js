import {Button, FlatList, SectionList, Text, View} from 'react-native';
import React, {Component} from 'react';
import {Config, Enum} from '../../common/Config';
import getFromAPI from "../../common/getFromAPI";
import Back from "../../common/back";
import {globalStyles} from "../../common/GlobalStyle";
import Icon from 'react-native-vector-icons/FontAwesome';
import {TextInput} from 'react-native-paper';

let i = 0;


export default class eventHandler extends Component {
    constructor(props) {
        super(props)
        this.state = {
            events: null,
            allEvents: null,
            isLoading: true,
            eventCounts: 0
        }
    }

    componentDidMount() {
        getFromAPI(Config.eventsEndPoint, (json) => {
            let {events, counts} = json.data;
            this.setState({
                events: events,
                allEvents: events,
                isLoading: false,
                eventCounts: counts
            })
        });
    }

    handleRegisterClick = (item) => {
        this.props.navigation.navigate(Enum.screenName.registerForEvent, {eventid: item.event_id, title: item.title});
    }


    renderEvents = ({item}) => {
        let titleStyle = {
            color: Enum.iconColorPurple, fontSize: Enum.iconSize-5, fontWeight: 'bold'
        };
        let counterForThisEvent = this.state.eventCounts.filter(cnt => cnt.eventid === item.event_id);
        let eventCount = counterForThisEvent.length === 0 ? 0 : counterForThisEvent[0].eventCount;
        // console.log('counter', eventCount, counterForThisEvent);
        return (
            <View key={'event-key-id' + item.event_id} style={{marginLeft: 20, marginBottom: 10}}>
                <Text style={titleStyle}>{item.title}</Text>
                <Text style={{fontSize: 14, color: 'grey'}}>{item.event_date}</Text>
                <Text style={{
                    fontSize: 18,
                    color: Enum.iconColorOrange
                }}>{eventCount === 0 ? '0 bookings' : `found ${eventCount} booking(s)`}</Text>
                <Text style={{fontSize: 20}}>{item.description}
                    <Icon name='handshake-o' color={Enum.iconColorOrange} size={Enum.iconSize}
                          onPress={() => this.handleRegisterClick(item)}/>
                </Text>
            </View>
        )
    }

    render() {

        return (
            <View style={[globalStyles.flexContainer, {marginTop: 20}]}>
                <Back onClick={() => this.props.navigation.goBack()}/>
                <Text style={[globalStyles.txtPurpleCenter, {fontSize: Enum.iconSize}]}>Upcoming Events</Text>
                <FlatList
                    data={this.state.events}
                    keyExtractor={item => item.event_id}
                    renderItem={this.renderEvents}
                />
            </View>
        )

    }
}
