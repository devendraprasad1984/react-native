import {ScrollView, Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {gcss} from "../common/styles";
import TopAppName from "../common/topAppName";
import {Heading, SubHeading} from "../common/Heading";
import getFromAPI from "../common/getFromAPI";
import {Config, Enum} from "../common/Config";
import Loading from "../common/Loading";
import CustomInput from "../common/customInput";
import {AppButton} from "../common/AppButton";
import AppIcon from "../common/AppIcon";
import {AppImage} from "../common/AppImage";
import makeDeepCopy from "../common/makeDeepCopy";
import {Web} from "../common/Web";


export default function Catalogue(props) {
    const params = props.navigation.state.params;
    const {item, color, bg} = params;
    const {config,dealerInfo}=params.props;
    const {category} = item;
    const [products, setProducts] = useState([]);
    const [productsClone, setProductsClone] = useState([]);
    const [productsImages, setProductImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchVal, setSearchVal] = useState('');
    useEffect(() => {
        setLoading(true);
        getFromAPI(Config.productsEndPoint, (pr) => {
            if (pr.status === Enum.successMsg) {
                setProducts(makeDeepCopy(pr.products));
                setProductsClone(pr.products);
                setProductImages(pr.images);
                setLoading(false);
            }
        });
    }, []);
    const handleAddToCart = () => {
        alert('added');
    }
    const renderProducts = () => {
        const defaultUri=Enum.MedLoader;
        return productsClone.map((pr, i) => {
            if(i>=50) return null;
            const foundImage=productsImages.filter(x=>parseInt(x.productid)===parseInt(pr.id));
            let isImageAvailable=false;
            let imageUri='';
            if(foundImage.length>0){
                imageUri=foundImage[0].uri;
                isImageAvailable=true;
            }
            let {id, name, price, tax, type, discount, description} = pr;
            return <View key={`product${id}`} style={[gcss.card]}>
                <View style={gcss.cardImgWrapper}>
                    {!isImageAvailable?<AppImage uri={defaultUri} med={true}/>:<AppImage uri={imageUri}/>}
                </View>
                <View style={gcss.cardInfo}>
                    <View style={[gcss.cardTitle, gcss.xrow]}>
                        <Heading val={name}/>
                        <AppIcon name={'medical-bag'} mat={true}/>
                    </View>
                    <View>
                        <SubHeading val={Enum.rupee + price + '+' + tax +Enum.perc+ '-' + discount+Enum.perc}/>
                        <Text style={gcss.cardDetails}>{description}</Text>
                    </View>
                </View>
            </View>;
        })
    }
    const handleSearchProduct = () => {
        let searched=products.filter(x=>
            x.name.toLowerCase().indexOf(searchVal.toLowerCase())!==-1
            || x.description.toLowerCase().indexOf(searchVal.toLowerCase())!==-1
        );
        // console.log('searched',searchVal);
        setProductsClone(searched);
    }
    const mainRender = () => {
        if (loading) return <Loading/>;
        return renderProducts();
    }
    const handleSpeak=()=>{
        // alert('start speaking')
        Web(Config.voicey,res=>console.log(res));
    }
    return <View style={[gcss.flexContainer]}>
        <TopAppName {...props}/>
        <Heading val={category}/>
        <View style={gcss.inrow}>
            <CustomInput placeholder={'Search Products'} width={300} onChange={val=>setSearchVal(val)} value={searchVal}/>
            <AppButton width={35} onPress={handleSearchProduct} icon='search'/>
        </View>
        <View style={gcss.inrow}>
            <Text>displaying top 50 result(s) only</Text>
            <AppIcon name='speaker-wireless' mat={true} onPress={handleSpeak}/>
        </View>
        <ScrollView style={[{flex: 1}]}>
            <View style={[gcss.cardsWrapper]}>{mainRender()}</View>
        </ScrollView>
    </View>;
}
