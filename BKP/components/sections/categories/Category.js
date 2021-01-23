import {FlatList, Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Config, Enum} from '../../common/Config';
import getFromAPI from "../../common/getFromAPI";
import SearchBar from "../search/SearchBar";
import Loading from "../../common/Loading";
import NoDataFound from "../../common/noDataFound";
import {appColor, CSS} from "../../common/gcss";
import makeDeepCopy from "../../common/makeDeepCopy";
import {connect} from 'react-redux';
// import {ConfigContext} from "../../common/Controllers";

function Category(props) {
    // const [config]=React.useContext(ConfigContext)
    const {navigation,color} = props
    const colorObj=appColor(color)
    const [data, setData] = useState([])
    const [fulldata, setFulldata] = useState([])
    const [catl1, setCatl1] = useState([])
    const [catl2, setCatl2] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getFromAPI(Config.categoryLevelsEndPoint, (data) => {
            let {categories, catL1, catL2} = data.data;
            setData(makeDeepCopy(categories))
            setCatl1(catL1)
            setCatl2(catL2)
            setFulldata(makeDeepCopy(categories))
            setIsLoading(false)
        });
    }, [])

    const searchRender = (result) => setData(result)

    const handleIconClick = (item) => {
        const navOptions = {
            details: item,
            catL1: catl1.filter(x => x.catid === item.id),
            catL2: catl2,
        };
        navigation.navigate(Enum.screenName.Description, navOptions);
    }

    const renderIcons = () => {
        if (data.length === 0) return <NoDataFound/>
        return <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                <View style={CSS.iconImageView}>
                    <TouchableOpacity title={item.category} onPress={() => handleIconClick(item)}>
                        <Image style={CSS.iconImg} source={{uri: item.icons}}/>
                        <Text style={[CSS.iconText, colorObj]}> {item.category}</Text>
                    </TouchableOpacity>
                </View>
            )
            }
            numColumns={4}
        />
    }

    if (isLoading) return <Loading/>
    return <SafeAreaView style={CSS.catIcons}>
        <SearchBar categories={fulldata} searchRender={searchRender}/>
        {renderIcons()}
    </SafeAreaView>
}

const mapx = state => {
    return {
        config: state.config.config,
        color: state.config.color
    }
}
export default connect(mapx)(Category);
