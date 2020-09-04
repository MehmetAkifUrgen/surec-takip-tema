import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginPage from './loginPage';
import HomePage from './homePage';
import Isciler from './HomeDetailPages/Isciler';
import IsEmirleri from './HomeDetailPages/IsEmirleri';
import Istatistikler from './HomeDetailPages/Istatistikler';
import KesimListeleri from './HomeDetailPages/KesimListeleri';
import Musteriler from './HomeDetailPages/Musteriler';
import Operasyonlar from './HomeDetailPages/Operasyonlar';
import Personeller from './HomeDetailPages/Personeller';
import Projeler from './HomeDetailPages/Projeler';
import Siparisler from './HomeDetailPages/Siparisler';
import SiparisSurecleri from './HomeDetailPages/SiparisSurecleri';
import Tezgahlar from './HomeDetailPages/Tezgahlar';
import UrunAgaclari from './HomeDetailPages/UrunAgaclari';

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
    Isciler : {
        screen:Isciler,
        navigationOptions:{
            
        }
    },
    IsEmirleri : {
        screen:IsEmirleri,
        navigationOptions:{
            
        }
    },
    Istatistikler : {
        screen:Istatistikler,
        navigationOptions:{
           
        }
    },
    KesimListeleri : {
        screen:KesimListeleri,
        navigationOptions:{
            
        }
    },
    Musteriler : {
        screen:Musteriler,
        navigationOptions:{
            headerTintColor:'white',
            headerStatusBarHeight:20,
            headerTitleAlign:'center',
            headerTitle:'Müşteriler',
            headerStyle:{
                backgroundColor:'#1c3faa',
                
            }
        }
    },
    Operasyonlar : {
        screen:Operasyonlar,
        navigationOptions:{
           
        }
    },
    Personeller : {
        screen:Personeller,
        navigationOptions:{
            
        }
    },
    Projeler : {
        screen:Projeler,
        navigationOptions:{
            
        }
    },
    Siparisler : {
        screen:Siparisler,
        navigationOptions:{
            
        }
    },
    SiparisSurecleri : {
        screen:SiparisSurecleri,
        navigationOptions:{
            
        }
    },
    Tezgahlar : {
        screen:Tezgahlar,
        navigationOptions:{
            
        }
    },
    UrunAgaclari : {
        screen:UrunAgaclari,
        navigationOptions:{
            
        }
    },

},{
    initialRouteName:"Login"
}

);

export default AppContainer = createAppContainer(appNavigator);