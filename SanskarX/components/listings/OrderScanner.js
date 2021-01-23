import {View} from 'react-native';
import React, {useState} from 'react';
import {gcss} from '../common/styles';
import TopAppName from '../common/topAppName';
import {Heading} from '../common/Heading';


export default function OrderScanner(props) {
    const params = props.navigation.state.params;
    const {item, color, bg} = params;
    const {config, dealerInfo} = params.props;
    const {category} = item;
    const [img, setImg] = useState(null);

    const onBackToCamera = () => {
        setImg(null);
    };

    const onPicture = ({uri}) => {
        setImg(uri);
    };

    return <View style={[gcss.flexContainer]}>
        <TopAppName {...props}/>
        <Heading val={category + ' - Scan Your Order'}/>
        {/*{img ? <View style={{flex: 1}} onPress={onBackToCamera}><AppImage uri={img}/></View> :*/}
        {/*    <Camera onPicture={onPicture}/>}*/}
    </View>;
}
