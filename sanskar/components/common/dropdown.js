import {View} from 'react-native';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

const Dropdown = props => {
    const [country, setCountry] = useState('uk');

    return (
        <View style={{zIndex:1000}}>
            <DropDownPicker
                items={props.data}
                defaultValue={country}
                containerStyle={{height: 40, width: 125, zIndex:1000,backgroundColor: 'white'}}
                style={{backgroundColor: 'white'}}
                itemStyle={{
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                }}
                labelStyle={{fontSize: 14, color: '#e32323', fontWeight: 'bold'}}
                dropDownStyle={{backgroundColor: 'white', color: 'white'}}
                onChangeItem={item => setCountry(item.value)}
            />
        </View>
    );
}

export default Dropdown;
