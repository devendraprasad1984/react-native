import React from 'react';
import {TextInput, View} from 'react-native';
import {globalStyles} from "../../common/GlobalStyle";

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
        <View style={globalStyles.textContainer}>
            <TextInput
                placeholder="Search Categories and contents within"
                style={globalStyles.txtInputPurpleFull}
                onChangeText={searchText}
            />
        </View>
    );
}
