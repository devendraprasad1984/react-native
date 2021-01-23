import {Button, Modal, ScrollView, StyleSheet, Text, View} from "react-native";
import React, {Component, useState} from "react";
import Text2Speech from './text2Speech';
import {globalStyles} from "./GlobalStyle";
import Back from "./back";

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
        return (
            <View style={globalStyles.flexContainer}>
                <Modal transparent={false} visible={this.state.modal}>
                    <View style={{flexDirection: 'row', padding: 20}}>
                        <Back onClick={this.hide}/>
                        <Text2Speech val={this.state.content}/>
                    </View>
                    <ScrollView style={styles.modalview}>
                        <View style={styles.modalview}>
                            <Text style={[styles.modaldesc]} onPress={() => this.hide()}>{this.state.header}</Text>
                            <Text style={[styles.modalabout, globalStyles.para]}>{this.state.content}</Text>
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
        color: "purple",
        padding: 10,
        marginTop: 1,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    }
});


