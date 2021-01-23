import {StyleSheet, View, Text} from 'react-native';
import React, {useRef} from 'react';
import Menu, {MenuItem} from 'react-native-material-menu';

const ContextMenu = props => {
    let _menu = useRef(null);
    let _item = useRef(null);

    const setMenuRef = ref => {
        _menu = ref;
    }
    const setMenuItemRef = ref => {
        _item = ref;
    }
    const hideThis = () => {
        _menu.hide();
    };

    const showThis = () => {
        _menu.show();
    };

    const handleMenuItemClick = id => {
        console.log(id);
    }

    const displayMenuItem = () => {
        return (
            <View>
                <MenuItem onPress={() => handleMenuItemClick('item1')}>Menu item 1</MenuItem>
                <MenuItem onPress={() => handleMenuItemClick('item2')}>Menu item 2</MenuItem>
                <MenuItem onPress={() => handleMenuItemClick('item3')}>Menu item 3</MenuItem>
                <MenuItem onPress={() => handleMenuItemClick('item4')}>Menu item 4</MenuItem>
            </View>
        )
    }
    const showContextMenu = () => {
        return (
            <Menu
                ref={setMenuRef}
                button={<Text style={thisStyle.mainMenuTxt} onPress={showThis}>...</Text>}>
                {displayMenuItem()}
            </Menu>
        );
    }
    return (
        <View style={thisStyle.menu}>
            {showContextMenu()}
        </View>
    );
}

export default ContextMenu;


const thisStyle = StyleSheet.create({
    menu: {
        backgroundColor: 'dodgerblue',
        flex: 0.15,
        margin: 4,
        alignItems: 'center',
        justifyContent: 'center'
    }, mainMenuTxt: {
        color: 'white'
        , fontWeight: 'bold'
        , fontSize: 20
    }
})
