import React,{Component} from 'react';
import {View , Text , Image , TouchableOpacity} from 'react-native';
import { Container, Content, Footer,Tab,Tabs, FooterTab, Button, Icon,Badge } from 'native-base';
import LikeButton from './LikeButton';
export default class Products extends Component{
    render(){
        // console.log(this.props);
        return(
            <View style={{flexDirection : 'row',flexWrap : 'wrap',alignContent : 'stretch'}}>
                {this.props.Products.map((Product,index)=>{
                    console.log(Product.image);
                    return(
                        <View key={index} style={{alignContent : 'stretch',width : 160}}>
                            <View  style={{backgroundColor : '#fff',borderRadius : 5,justifyContent : 'center',margin : 10,alignContent : 'stretch'}}>
                                <Image source={Product.image} style={{height : 200,width : null,resizeMode : 'cover'}} />
                                <TouchableOpacity style={{alignItems : 'flex-end',justifyContent : 'center',position : 'absolute',top : 10,right :  10 }}>
                                    <LikeButton/>
                                </TouchableOpacity>
                                <View style={styles.priceContainer}>
                                    <Text style={{fontSize : 15,fontFamily : 'Nunito-Regular'}}>{Product.name}</Text>
                                    <Text style={{color : 'rgb(219, 10, 91)',fontSize : 17,fontFamily : 'Nunito-Bold'}}>Rs.{Product.price}</Text>
                                </View>
                            </View>
                        </View>
                    )
                })}
            </View>    
        )
    }
}

const styles = {
    priceContainer : {
        padding : 10,borderTopColor : '#eee',borderTopWidth : 0.5
    }
}