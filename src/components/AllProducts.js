import React , {Component} from 'react';
import {Text,View , ScrollView} from 'react-native';
import { Container, Content, Footer,Tab,Tabs, FooterTab, Button, Icon,Badge } from 'native-base';
import Products from './Products';

const Product_kind_one = [{
    name : 'Nice cloth ZARA',
    price : '2,999',
    image : require('../imgs/1.jpg')
},{
    name : 'Colory cloth ZARA',
    price : '1,999',
    image : require('../imgs/4.jpg')
},{
    name : 'Orange cloth ZARA',
    price : '3,999',
    image : require('../imgs/2.jpg')
},{
    name : 'Pink cloth ZARA',
    price : '2,999',
    image : require('../imgs/3.jpg')
},{
    name : 'Colory cloth ZARA',
    price : '1,999',
    image : require('../imgs/4.jpg')
},{
    name : 'Dark High Heels ZARA',
    price : '0,999',
    image : require('../imgs/5.jpeg')
},{
    name : 'Blue Nice Shoes ZARA',
    price : '3,599',
    image : require('../imgs/6.jpg')
},{
    name : 'Women Blue Bag ZARA',
    price : '2,299',
    image : require('../imgs/7.png')
}];
const Product_kind_two = [{
    name : 'Women Red Bag',
    price : '2,299',
    image : require('../imgs/9.jpg')
},{
    name : 'Bow tie Shoes',
    price : '1,299',
    image : require('../imgs/10.jpg')
},{
    name : 'Dark Black Bag',
    price : '1,299',
    image : require('../imgs/13.jpg')
},{
    name : 'Cream Shoes',
    price : '3,499',
    image : require('../imgs/14.jpg')
},{
    name : 'Green and Blue Shoes',
    price : '5,499',
    image : require('../imgs/12.jpg')
},{
    name : 'Women Blue Bag',
    price : '2,299',
    image : require('../imgs/7.png')
},{
    name : 'Colory cloth',
    price : '1,999',
    image : require('../imgs/4.jpg')
}];

export default class AllProducts extends Component{
    render(){
        return(
            <View style={{flexDirection : 'row',justifyContent : 'center',alignContent : 'stretch'}}>
                <View style={{flexDirection : 'row',justifyContent : 'center',alignItems : 'flex-start',flex : 1}}>
                    <View style={{flex : 1,alignContent : 'stretch'}}>
                        <Products Products={Product_kind_one}/>
                    </View>
                    <View style={{flex : 1,alignContent : 'stretch'}}>
                        <Products Products={Product_kind_two}/>                 
                    </View>
                </View>
            </View>
        )
    }
}

const style={

}