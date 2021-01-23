import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Config, Enum} from '../../common/Config';
import getFromAPI from "../../common/getFromAPI";
import SearchBar from "../search/SearchBar";
import Loading from "../../common/Loading";
import NoDataFound from "../../common/noDataFound";
import {globalStyles} from "../../common/GlobalStyle";
import makeDeepCopy from "../../common/makeDeepCopy";


// var bg = require('../../../assets/images/back1.jpg');
const numColumns = 3;

export default class Category extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: [],
            fullDataSource: [],
            catL1: [],
            catL2: [],
            isLoading: true
        }

    }

    componentDidMount() {
        getFromAPI(Config.categoryLevelsEndPoint, (data) => {
            let {categories, catL1, catL2} = data.data;
            // console.log(categories);
            this.setState({
                dataSource: makeDeepCopy(categories)
                , catL1: catL1
                , catL2: catL2
                , fullDataSource: makeDeepCopy(categories)
                , isLoading: false
            })
        });
    }

    searchRender = (result) => {
        // console.log('search callback',result);
        this.setState({
            dataSource: result
        })
    }

    handleIconClick = (item) => {
        this.props.navigation.navigate(Enum.screenName.categoryDescription, {
            details: item,
            name: Enum.screenName.categoryDescription,
            catL1: this.state.catL1.filter(x => x.catid === item.id),
            catL2: this.state.catL2,
            catDetails: this.state.catDetails
        });
    }

    renderIcons = () => {
        if (typeof this.state.dataSource === "undefined" || this.state.isLoaded) return <NoDataFound/>;
        return (<FlatList
            data={this.state.dataSource}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                <View>
                    <TouchableOpacity title={item.category} onPress={() => this.handleIconClick(item)}>
                        <Image style={globalStyles.iconImg} source={{uri: item.icons}}/>
                        <Text style={globalStyles.iconText}> {item.category}</Text>
                    </TouchableOpacity>
                </View>
            )
            }
            numColumns={numColumns}
        />
        );
    }

    render() {
        if (this.state.isLoading) return <Loading text={'loading, plz wait...'}/>
        return (
            <View style={thisStyle.thisView}>
                <SearchBar categories={this.state.fullDataSource} searchRender={this.searchRender}/>
                {this.renderIcons()}
            </View>
        )
    }
}

const thisStyle = StyleSheet.create({
    thisView: {
        flex: 1,
        flexBasis: 1,
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start'
    }
});
