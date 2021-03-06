import {Modal, ScrollView, StyleSheet, Text, View} from "react-native";
import React, {Component} from "react";
import Text2Speech from './text2Speech';
import {appColor, gcss} from "./styles";
import Back from "./back";
import TopAppName from "./topAppName";

export default class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            header: '',
            content: ''
        };
    }

    show = (header, content) => {
        this.setState({modal: true, header, content});
    }
    hide = () => {
        this.setState({modal: false});
    }

    render() {
        let color = appColor(this.props.appColor);
        return (
            <View style={gcss.flexContainer}>
                <Modal transparent={false} visible={this.state.modal}>
                    <View style={{flexDirection: 'row', padding: 20}}>
                        {/*<Back onClick={this.hide}/>*/}
                        <TopAppName clicked={this.hide}/>
                    </View>
                    {/*<View style={{flexDirection: 'row', padding: 20}}>*/}
                    {/*    <Text2Speech val={this.state.content}/>*/}
                    {/*</View>*/}
                    <ScrollView style={styles.modalview}>
                        <View style={styles.modalview}>
                            <Text style={[styles.modaldesc, color]}
                                  onPress={() => this.hide()}>{this.state.header}</Text>
                            <Text style={[styles.modalabout, gcss.para, color]}>{this.state.content}</Text>
                        </View>
                    </ScrollView>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    modalview: {
        backgroundColor: "white",
        flex: 3,
        textAlign: "center",
        borderRadius: 2,
        overflow: "scroll",
        zIndex: 9999,
    }, modalabout: {
        padding: 10,
        color: "black",
        textAlign: "justify"
    }, modaldesc: {
        fontSize: 20,
        padding: 10,
        marginTop: 1,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    }
});


