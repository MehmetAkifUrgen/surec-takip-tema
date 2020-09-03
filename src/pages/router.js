import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginPage from './loginPage';
import HomePage from './homePage';

const appNavigator = createStackNavigator({
    Login:{
        screen: LoginPage,
        navigationOptions:{
            headerShown:false
        }
    },
    HomePage : {
        screen:HomePage,
        navigationOptions:{
            headerShown:false
        }
    },
},{
    initialRouteName:"Login"
}

);

export default AppContainer = createAppContainer(appNavigator);