import React, {Component,useState, useEffect} from 'react';
import {Button, Text, View, FlatList, ScrollView} from 'react-native';
import {globalStyles} from "../../common/GlobalStyle";
import getConfigValues from "../../common/getConfigValues";
import {Config} from "../../common/Config";
import Back from "../../common/back";
import {Enum} from "../../common/Config";
import Loading from "../../common/Loading";
import getFromAPI from "../../common/getFromAPI";
import HTML from 'react-native-render-html';
import Text2Speech from '../../common/text2Speech';


const Blogs = props => {
    const [datasource,setDatasource] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        getConfigValues((conf) => {
            let blogUrl=conf[0];
            getFromAPI(blogUrl.value, (data) =>{
                setDatasource(data);
                setLoading(false);
            })
        }, Enum.configKeys.blogs)}
    , []);

   function displaycontent(){
   return datasource.map((contents,index)=>
        <View key={'item-blog-row'+index} style={{padding:10}}>
      <Text2Speech val={contents.title.rendered}/>
         <Text style={[globalStyles.txtPurpleCenter, {fontSize: Enum.txtSize}]}>
             {contents.title.rendered} </Text>
             <HTML ignoredStyles={["font-family", 'padding','transform',
              'font-weight',"letter-spacing", "display", "color"]}
              style={{textAlign: 'center', alignSelf:'center', paddingSide:10}}
              source={{html:contents.content.rendered}}
              />
      </View>
  )}

    if (loading==true) return <View style={{flex:1, marginTop: 150}}>
        <Loading text={'loading, plz wait...'}></Loading></View>
    return  (
        <View style={globalStyles.flexContainer} >
        <ScrollView>
            <Back onClick={() => props.navigation.goBack()}/>
                <Text style={[globalStyles.txtPurpleCenter, {fontSize:Enum.txtSize}]}>
                    NEWS AND OPINIONS</Text>
                    {displaycontent()}
           </ScrollView>
        </View>

    );
}
export default Blogs;
