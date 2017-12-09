import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {Icon} from 'native-base';
export default class LikeButton extends Component{
    state = {
        active : false
    }
    render(){
        if(!this.state.active){
            return(
                <View onTouchStart={()=>{this.setState({active : true})}}>
                    <Icon style={{color : '#aaa',fontSize : 25}} ios="ios-heart-outline" android="md-heart-outline" />
                </View>
            )
        }
        else{
            return(
                <View onTouchStart={()=>{this.setState({active : false})}}>
                    <Icon style={{color : 'rgb(219, 10, 91)',fontSize : 25}} ios="ios-heart" android="md-heart" />
                </View>
            )
        }
    }
}