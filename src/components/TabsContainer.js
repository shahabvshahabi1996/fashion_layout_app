
import React,{Component} from 'react';
import {View,ScrollView} from 'react-native';
import { Container, Content, Footer,Tab,Tabs, FooterTab, Button, Icon,Text,Badge } from 'native-base';
const TabsContainer = (props)=>{
    return(
      <ScrollView horizontal={true}>
            <Tabs initialPage={0}>
                <Tab heading="All">
                    <Text>Hello</Text>
                </Tab>
                <Tab heading="Brands">
                    <Text>Hello</Text>
                </Tab>
                <Tab heading="Trends">
                    <Text>Hello</Text>
                </Tab>
                <Tab heading="Collobration">
                    <Text>Hello</Text>
                </Tab>
            </Tabs>
      </ScrollView>
    )
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
    }
}

export default TabsContainer;
        
