import React, {useState,useEffect} from 'react';
import {Picker, View, Text, SafeAreaView, StyleSheet} from 'react-native';

const PickerMenu = props => {
    const [choosenLabel, setChoosenLabel] = useState('');
    const [choosenIndex, setChoosenIndex] = useState('0');
    const [data, setData] = useState([]);

    useEffect(()=>{
        setData(props.data);
    },[props.data]);

    const onPickerChange=(itemValue, itemIndex) => {
        setChoosenLabel(itemValue);
        setChoosenIndex(itemIndex);
        props.onChange(itemValue,itemIndex);
    }

    const setDataToPicker=()=>{
        return data.map((item,index)=>{
            return <Picker.Item key={'itemPickerKey'+index} label={item} value={item}/>
        })
    }
    return (
        <View style={styles.container}>
            <Picker selectedValue={choosenLabel} onValueChange={onPickerChange}>
                {setDataToPicker()}
            </Picker>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: 'white',
        margin: 1
    }
});

export default PickerMenu;
