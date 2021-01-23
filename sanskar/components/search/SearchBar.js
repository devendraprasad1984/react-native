import React from 'react';
import {TextInput, View} from 'react-native';
import {gcss} from "../common/styles";

export default function SearchBar(props, {navigation}) {
    const searchText = (val2Search) => {
        let result = props.categories.filter(x =>
            x.category.toLowerCase().indexOf(val2Search) !== -1
            || x.description.toLowerCase().indexOf(val2Search) !== -1
            || x.detail_description.toLowerCase().indexOf(val2Search) !== -1
        );
        props.searchRender(result);
    }

    return (
        <View style={gcss.textContainer}>
            <TextInput
                placeholder="Search Categories and contents within"
                style={gcss.txtInputPurpleFull}
                onChangeText={searchText}
            />
        </View>
    );
}
