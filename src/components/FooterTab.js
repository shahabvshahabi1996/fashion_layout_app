import React,{Component} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import { Container, Content, Footer,Tab,Tabs, FooterTab, Button, Icon,Badge } from 'native-base';

var tabs = [{
    name : 'apps',
    badge : 0,
    id : 0
},{
    name : 'search',
    badge : 0,
    id : 1
},{
    name : 'heart',
    badge : 2,
    id : 2
},{
    name : 'basket',
    badge : 0,
    id : 3
},{
    name : 'add',
    badge : 0,
    id : 4
}]
export default class FooterTabs extends Component{
    state={
        active : 0
    }
    activeButton(index){
        this.setState({active : index});
    }
    render(){
    return(
        <FooterTab style={styles.footerContainer}>
            {tabs.map((tab,index)=>{
                if(tab.badge){
                    return (
                        <Button onPress={()=>{this.activeButton(tab.id)}} key={index} transparent badge vertical>
                            <Badge style={{backgroundColor : 'rgb(219, 10, 91)',width : 20,height : 20,justifyContent : 'center',alignItems : 'center' }}><Text style={{color : '#fff'}}>{tab.badge}</Text></Badge>
                            <Icon style={ this.state.active == index ? {color : 'rgb(219, 10, 91)'} : {color : '#ddd'}} name={tab.name} />
                        </Button>
                    )
                }
                else{
                    return(
                        <Button onPress={()=>{this.activeButton(tab.id)}} key={index} transparent>
                            <Icon style={ this.state.active == index ? {color : 'rgb(219, 10, 91)'} : {color : '#ddd'}} name={tab.name} />
                        </Button>
                    )
                }
            })}
        </FooterTab>
        )
    }
}

const styles = {
    footerContainer : {
      borderTopColor : 'rgba(37,37,37,0.1)',
      borderTopWidth : 2,
      backgroundColor : '#fff'
    }
  }
          