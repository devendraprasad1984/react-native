import React from 'react';
import {TextInput, View} from 'react-native';
import {CSS} from "../../common/gcss";

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
        <View style={CSS.textContainer}>
            <TextInput
                placeholder="Search Categories and contents within"
                style={CSS.txtInputPurpleFull}
                onChangeText={searchText}
            />
        </View>
    );
}
