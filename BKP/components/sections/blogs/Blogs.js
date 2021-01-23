import React, {Component,useState, useEffect} from 'react';
import {Button, Text, View, FlatList, ScrollView, StyleSheet} from 'react-native';
import {CSS} from "../../common/gcss";
import getConfigValues from "../../common/getConfigValues";
import {Config, configFilterByKey} from "../../common/Config";
import {Enum} from "../../common/Config";
import Loading from "../../common/Loading";
import getFromAPI from "../../common/getFromAPI";
import HTML from 'react-native-render-html';
import Text2Speech from '../../common/text2Speech';
import TopAppName from "../../common/topAppName";

const Blogs = props => {
    const [datasource,setDatasource] = useState([]);
    const [loading,setLoading] = useState(true);
    const {config} = props;
    useEffect(() => {
        let url=configFilterByKey(config, Enum.configKeys.blogs);
        getFromAPI(url.value, (data) =>{
            setDatasource(data);
            setLoading(false);
        })
    }, []);

   function DisplayContent(){
   return datasource.map((contents,index)=>
        <View key={'item-blog-row'+index} style={{padding:10}}>
      <Text2Speech val={contents.title.rendered}/>
         <Text style={[CSS.txtAppColorCentered, {fontSize: Enum.txtSize}]}>
             {contents.title.rendered} </Text>
             <HTML ignoredStyles={["font-family", 'padding','transform',
              'font-weight',"letter-spacing", "display", "color"]}
              style={{textAlign: 'center', alignSelf:'center', paddingSide:10}}
              source={{html:contents.content.rendered}}
              />
      </View>
  )}

    if (loading==true) return <View style={{flex:1, marginTop: 50}}><Loading /></View>
    // console.log('blogs',props.navigation);
    return  (
        <View style={[CSS.flexContainer]} >
            <TopAppName {...props}/>
            <ScrollView>
            <Text style={[CSS.txtAppColorCentered, {fontSize:Enum.txtSize}]}>
            NEWS AND OPINIONS
            </Text>
                {DisplayContent()}
           </ScrollView>
        </View>

    );
}
export default Blogs;
