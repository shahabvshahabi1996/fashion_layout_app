import React,{Component} from 'react';
import {View,Text,ScrollView,ViewPagerAndroid,Dimensions} from 'react-native';
import { Container, Content, Footer,Tab,Tabs, FooterTab, Button, Icon,Badge } from 'native-base';
import AllProducts from './AllProducts';
var datas = [{
    name : 'ALL',
    id : 0
},{
    name : 'BRANDS',
    id : 1
},{
    name : 'TRENDS',
    id : 2
},{
    name : 'COLLOBRATION',
    id : 3
}];

const Product_kind_one = [{
    name : 'Nice cloth',
    price : '2,999',
    image : require('../imgs/1.jpg')
},{
    name : 'Bow tie Shoes',
    price : '1,299',
    image : require('../imgs/10.jpg')
},{
    name : 'Orange cloth',
    price : '3,999',
    image : require('../imgs/2.jpg')
},{
    name : 'Pink cloth',
    price : '2,999',
    image : require('../imgs/3.jpg')
},{
    name : 'Colory cloth',
    price : '1,999',
    image : require('../imgs/4.jpg')
},{
    name : 'Dark High Heels',
    price : '0,999',
    image : require('../imgs/5.jpeg')
},{
    name : 'Blue Nice Shoes',
    price : '3,599',
    image : require('../imgs/6.jpg')
},{
    name : 'Women Blue Bag',
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
    image : require('../imgs/12.jpg')
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

if(Product_kind_one.length > Product_kind_two.length){
    var length = Product_kind_one.length;
}
else{
    var length = Product_kind_two.length;
}
export default class TabBar extends Component{
    state = {
        active : 0
    }
    render(){
        return(   
        <View style={{flex : 1,alignContent : 'stretch',justifyContent : 'center'}}>
            <View style={{height : 67,backgroundColor : '#fff',justifyContent : 'center',alignItems : 'center',flexDirection : 'row'}}>
                {datas.map((data,index)=>{
                    if(this.state.active == index)
                        return(
                        <View key={index}>
                            <View style={{padding : 15,paddingBottom : 0,paddingTop : 5,margin : 5,marginBottom : 10}}>
                                <Text style={{fontSize : 11,fontFamily : 'Nunito-Bold',color : '#252525'}}>{data.name}</Text>
                            </View>
                            <View style={{height : 1,borderColor : 'rgb(219, 10, 91)',borderWidth : 1.5,borderRadius : 10,margin : 5,marginBottom : -10,marginTop : 8}}>   
                            </View>
                        </View>
                        )
                    else
                        return(
                        <View key={index}>
                            <View style={{padding : 15,paddingBottom : 5,paddingTop : 5,margin : 5}}>
                                <Text style={{fontSize : 11,fontFamily : 'Nunito-Bold',color : '#aaa'}}>{data.name}</Text>
                            </View>
                        </View>
                        )
                })}  
            </View>    
           <View>
            <ViewPagerAndroid
                style={styles.viewPager}
                onPageSelected={(event)=>{this.setState({active : event.nativeEvent.position})}}
                initialPage={this.state.active}>
                    <View style={styles.pageStyle} key={1}>
                        <AllProducts />
                    </View>
                    <View style={styles.pageStyle} key={2}>
                        <Text>BRANDS</Text>
                    </View>
                    <View style={styles.pageStyle} key={3}>
                        <Text>TRENDS</Text>
                    </View>
                    <View style={styles.pageStyle} key={4}>
                        <Text>COLLOBRATION</Text>
                    </View>
            </ViewPagerAndroid>
           </View>
        </View>
        )
    }
}

const styles = {
    viewPager: {
        flex: 2,
        height : Dimensions.get('window').height * (length/1.9) ,
        alignContent : 'stretch',
    },
    pageStyle: {
        alignItems: 'center',
        padding: 20,
    }
}