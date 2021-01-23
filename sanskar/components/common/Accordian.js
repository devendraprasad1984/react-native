import React, {Component, createRef} from 'react';
import {
    View,
    ScrollView,
    TouchableOpacity,
    Text,
    StyleSheet,
    LayoutAnimation,
    Platform,
    UIManager,
    Linking
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import {Enum} from "./Config";
import AppIcon from "./AppIcon";
import {Heading} from "./Heading";

export default class Accordian extends Component {
    constructor(props) {
        super(props);
        this.accordian = createRef();
        this.state = {
            data: props.data,
            expanded: false,
        }
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    render() {
        return (
            <View>
                <TouchableOpacity ref={this.accordian} style={styles.row} onPress={() => this.toggleExpand()}>
                    <Heading val={this.props.title}/>
                    <AppIcon mat={true} name={this.state.expanded ? 'mouse-off' : 'mouse'} onPress={() => this.toggleExpand()}/>
                </TouchableOpacity>
                <View style={styles.parentHr}/>
                {
                    this.state.expanded &&
                    <ScrollView style={styles.child}>
                        {this.props.link !== undefined && this.props.link !== '' ?
                            <AppIcon name="google-chrome" mat={true} onPress={() => Linking.openURL(this.props.link)}/> : null}
                        <Text>{this.props.data}</Text>
                    </ScrollView>
                }

            </View>
        )
    }

    toggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({expanded: !this.state.expanded})
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 35,
        paddingLeft: 20,
        paddingRight: 18,
        alignItems: 'center',
        backgroundColor: Enum.gray,
    },
    parentHr: {
        height: 1,
        color: Enum.white,
        width: '100%'
    },
    child: {
        backgroundColor: Enum.white,
        padding: 16,
    }

});
