import React,{Component} from 'react';
import {View,Text} from 'react-native';

const Header = (props)=>{
    return(
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{props.text}</Text>
        </View>
    )
}

const styles={
    headerContainer:{
        alignContent : 'stretch',
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
        fontFamily : 'Nunito-Bold'
    }
}

export default Header;
