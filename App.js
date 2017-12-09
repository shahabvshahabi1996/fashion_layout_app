/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import FontAwesome, { Icons } from 'react-native-fontawesome';
import React, { Component } from 'react';
import Header from './src/components/Header';
import TabsContainer from './src/components/TabsContainer';
import Carsoule from './src/components/Carsoule';
import FooterTabs from './src/components/FooterTab';
import TabBar from './src/components/TabBar';
import { Container, Content, Footer,Tab,Tabs, Button, Icon,Text,Badge } from 'native-base';
export default class FooterTabsIconExample extends Component {
  render() {
    return (
      <Container style={{flex : 1,flexDirection : 'column',alignContent : 'stretch'}}>
          <Header text="Fashion"/>
        <Content style={{flex : 1,flexDirection : 'column',alignContent : 'stretch'}}>
          <Carsoule style={{flex : 1}}/>
          <TabBar style={{flex : 1}}/>
        </Content>
        <Footer>
          <FooterTabs/>
        </Footer>
      </Container>
    );
  }
}

const styles = {
  footerContainer : {
    borderTopColor : 'rgba(37,37,37,0.1)',
    borderTopWidth : 2,
    backgroundColor : '#fff'
  }
}