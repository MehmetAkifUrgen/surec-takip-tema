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
            headerShown:false,
            
        }
    },
    Isciler : {
        screen:Isciler,
        navigationOptions:{
            headerTintColor:'white',
            headerStatusBarHeight:20,
            headerTitleAlign:'center',
            headerTitle:'İşçiler',
            headerStyle:{
                backgroundColor:'#1c3faa',
                
            }
        }
    },
    IsEmirleri : {
        screen:IsEmirleri,
        navigationOptions:{
            headerTintColor:'white',
            headerStatusBarHeight:20,
            headerTitleAlign:'center',
            headerTitle:'İş Emirleri',
            headerStyle:{
                backgroundColor:'#1c3faa',
                
            }
        }
    },
    Istatistikler : {
        screen:Istatistikler,
        navigationOptions:{
            headerTintColor:'white',
            headerStatusBarHeight:20,
            headerTitleAlign:'center',
            headerTitle:'İstatistikler',
            headerStyle:{
                backgroundColor:'#1c3faa',
                
            }
        }
    },
    KesimListeleri : {
        screen:KesimListeleri,
        navigationOptions:{
            headerTintColor:'white',
            headerStatusBarHeight:20,
            headerTitleAlign:'center',
            headerTitle:'Kesim Listeleri',
            headerStyle:{
                backgroundColor:'#1c3faa',
                
            }
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
            headerTintColor:'white',
            headerStatusBarHeight:20,
            headerTitleAlign:'center',
            headerTitle:'Personeller',
            headerStyle:{
                backgroundColor:'#1c3faa',
                
            }
        }
    },
    Projeler : {
        screen:Projeler,
        navigationOptions:{
            headerTintColor:'white',
            headerStatusBarHeight:20,
            headerTitleAlign:'center',
            headerTitle:'Projeler',
            headerStyle:{
                backgroundColor:'#1c3faa',
                
            }
        }
    },
    Siparisler : {
        screen:Siparisler,
        navigationOptions:{
            headerTintColor:'white',
            headerStatusBarHeight:20,
            headerTitleAlign:'center',
            headerTitle:'Siparişler',
            headerStyle:{
                backgroundColor:'#1c3faa',
                
            }
        }
    },
    SiparisSurecleri : {
        screen:SiparisSurecleri,
        navigationOptions:{
            headerTintColor:'white',
            headerStatusBarHeight:20,
            headerTitleAlign:'center',
            headerTitle:'Sipariş Süreçleri',
            headerStyle:{
                backgroundColor:'#1c3faa',
                
            }
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