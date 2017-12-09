import React,{Component} from 'react';
import {View,Text, ViewPagerAndroid,Image,TouchableOpacity,TouchableHighlight} from 'react-native';
import { Container, Content, Footer,Tab,Tabs, FooterTab, Button, Icon,Badge } from 'native-base';
const indicatiors = [{id : 0},{id : 1},{id : 2},{id : 3}];
const datas = [{
    title : 'CELEBRITY STYLE',
    id : 0,
    offer : '70%',
    Image : require('../imgs/1.jpg')
},{
    title : 'NICE STYLE',
    id : 1,
    offer : '50%',
    Image : require('../imgs/2.jpg')
},{
    title : 'AMAZING STYLE',
    id : 2,
    offer : '25%',
    Image : require('../imgs/3.jpg')
},{
    title : 'AMAZING COLORS',
    id : 3,
    offer : '30%',
    Image : require('../imgs/4.jpg')
}]
class Carsoule extends Component{
    state={
        active : 0,
        image : require('../imgs/1.jpg')
    }
    activeIndicator(index){
        this.setState({active : index,image : datas[index].Image})
    }
    render(){
        return(
            <View style={{flex : 1,alignContent : 'stretch'}}>
                <Image source={this.state.image} style={{width : null,height : 500,resizeMode : 'cover'}}/>
                <View style={{flex : 1 ,position : 'absolute',top : 80, left : 0}}>
                    <ViewPagerAndroid
                            style={styles.viewPager}
                            onPageSelected={(event)=>{this.setState({active : event.nativeEvent.position,image : datas[event.nativeEvent.position].Image })}}
                            initialPage={this.state.active}>
                            {datas.map((data,index)=>{
                                return(
                                    <View style={styles.pageStyle} key={index}>
                                        <View style={{justifyContent : 'space-between',alignItems : 'center'}}>
                                            <Text style={{fontSize : 30,marginVertical : 10,color : '#333',fontFamily : 'Nunito-Light'}}>{data.title}</Text>
                                            <Text style={{fontSize : 18,marginVertical : 5,fontFamily : 'Nunito-Bold',color : '#fff'}}>up to {data.offer} off</Text>
                                            <TouchableOpacity activeOpacity={0.8} style={{backgroundColor : '#fff',padding : 15,borderRadius : 3,marginTop : 20 }}>
                                                <Text style={{fontFamily : 'Nunito-Bold',color : '#333'}}>SHOP NOW</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )
                            })}
                    </ViewPagerAndroid>
                    <View style={styles.indicatior}>
                            <View style={{width : 100,flexDirection: 'row',justifyContent : 'space-around',alignItems : 'center'}}>
                                {indicatiors.map((indicatior,index)=>{
                                    return <View  key={index} style={this.state.active == index ?  {height : 15,width : 15,backgroundColor : '#fff',borderRadius : 20} : {height : 10,width : 10,borderColor : '#fff',backgroundColor : 'transparent',borderWidth : 1,borderRadius : 20}}></View>
                                })}
                            </View>
                    </View>
                </View>
                
          </View>
        )
    }
}

const styles={
    headerContainer:{
        justifyContent : 'center',
        alignItems : 'center',
        height : 60,
        backgroundColor : '#fff',
        padding : 15,
        borderBottomColor : 'rgba(37,37,37,0.1)',
        borderBottomWidth : 2
    },
    headerText : {
        color : '#aaa',
        fontSize : 18,
        textAlign : 'center',
        fontWeight : '600'
    },
    viewPager: {
        flex : 1,
        height : 200,
        width : 350,
        marginBottom : 110,
        backgroundColor : 'transparent'
    },
    pageStyle: {
        alignItems: 'center',
        padding: 15,
        backgroundColor : 'transparent'
        
    },
    indicatior : {
        backgroundColor : 'transparent',
        height : 20,
        justifyContent : 'space-around',
        alignItems: 'center',
        flexDirection : 'row',
        backgroundColor : 'transparent'
    }
}

export default Carsoule;
