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
import TezgahYogunluk from './IstatistiklerPages/tezgahYogunluk'
import Uretim from './IstatistiklerPages/uretim'
import ProjeIstatistikleri from './IstatistiklerPages/projeIstatistikleri'
import DetaylarMusteri from './MusterilerPages/detaylarMusteri'
import PazarlamaSatis from './SiparisSurecleri/PazarlamaSatis'
import ProjelendirmeBirimi from './SiparisSurecleri/ProjelendirmeBirimi'
import TransferEdilen from './SiparisSurecleri/TransferEdilen'
import TransferEdilenDetay from './SiparisSurecleri/TransferEdilenDetay'
import GecikmedekiProjeler from './SiparisSurecleri/GecikmedekiProjeler'
import GecikmedekiProjelerDetay from './SiparisSurecleri/GecikmedekiProjelerDetay'
import ProjelerDetay from './Projeler/ProjelerDetay'
import IsEmirleriDetay from './IsEmirleri/IsEmirleriDetay'



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
            headerTintColor:'white',
            headerStatusBarHeight:20,
            headerTitleAlign:'center',
            headerTitle:'OPERASYONLAR',
            headerStyle:{
                backgroundColor:'#1c3faa',
                
            }
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
            headerTitle:'SİPARİŞ SÜREÇLERİ',
            headerStyle:{
                backgroundColor:'#1c3faa',
                
            }
        }
    },
    Tezgahlar : {
        screen:Tezgahlar,
        navigationOptions:{
            headerTintColor:'white',
            headerStatusBarHeight:20,
            headerTitleAlign:'center',
            headerTitle:'TEZGAHLAR',
            headerStyle:{
                backgroundColor:'#1c3faa',
                
            }
        }
    },
    UrunAgaclari : {
        screen:UrunAgaclari,
        navigationOptions:{
            headerTintColor:'white',
            headerStatusBarHeight:20,
            headerTitleAlign:'center',
            headerTitle:'ÜRÜN AĞAÇLARI',
            headerStyle:{
                backgroundColor:'#1c3faa',
                
            }
        }
    },
    TezgahYogunluk:{
        screen:TezgahYogunluk,
        navigationOptions:{
            headerTintColor:'white',
            headerStatusBarHeight:20,
            headerTitleAlign:'center',
            headerTitle:'Tezgah Yoğunluğu',
            headerStyle:{
                backgroundColor:'#1c3faa',
                
          }
          }
    },
    Uretim:{
        screen:Uretim,
        navigationOptions:{
            headerTintColor:'white',
            headerStatusBarHeight:20,
            headerTitleAlign:'center',
            headerTitle:'ÜRETİM İSTATİSTİKLERİ',
            headerStyle:{
                backgroundColor:'#1c3faa',
                
          }
          }
    },
    ProjeIstatistikleri:{
        screen:ProjeIstatistikleri,
        navigationOptions:{
            headerTintColor:'white',
            headerStatusBarHeight:20,
            headerTitleAlign:'center',
            headerTitle:'PROJE İSTATİSTİKLERİ',
            headerStyle:{
                backgroundColor:'#1c3faa',
                
          }
          }
    },
    DetaylarMusteri:{
        screen:DetaylarMusteri,
        navigationOptions:{
            headerTintColor:'white',
            headerStatusBarHeight:20,
            headerTitleAlign:'center',
            headerTitle:'DETAYLAR',
            headerStyle:{
                backgroundColor:'#1c3faa',
                
          }
          }
    },
    PazarlamaSatis:{
        screen:PazarlamaSatis,
        navigationOptions:{
            headerTintColor:'white',
            headerStatusBarHeight:20,
            headerTitleAlign:'center',
            headerTitle:'PAZARLAMA-SATIŞ',
            headerStyle:{
                backgroundColor:'#1c3faa',
                
          }
          }
    },
    
    ProjelendirmeBirimi:{
        screen:ProjelendirmeBirimi,
        navigationOptions:{
            headerTintColor:'white',
            headerStatusBarHeight:20,
            headerTitleAlign:'center',
            headerTitle:'PROJELENDİRME BİRİMİ',
            headerStyle:{
                backgroundColor:'#1c3faa',
                
          }
          }
    },
    
    TransferEdilen:{
        screen:TransferEdilen,
        navigationOptions:{
            headerTintColor:'white',
            headerStatusBarHeight:20,
            headerTitleAlign:'center',
            headerTitle:'TRANSFER EDİLEN',
            headerStyle:{
                backgroundColor:'#1c3faa',
                
          }
          }
    },
    TransferEdilenDetay:{
        screen:TransferEdilenDetay,
        navigationOptions:{
            headerTintColor:'white',
            headerStatusBarHeight:20,
            headerTitleAlign:'center',
            headerTitle:'DETAYLAR',
            headerStyle:{
                backgroundColor:'#1c3faa',
                
          }
          }
    },
    GecikmedekiProjeler:{
        screen:GecikmedekiProjeler,
        navigationOptions:{
            headerTintColor:'white',
            headerStatusBarHeight:20,
            headerTitleAlign:'center',
            headerTitle:'GECİKMEDEKİ PROJELER',
            headerStyle:{
                backgroundColor:'#1c3faa',
                
          }
          }
    },
    GecikmedekiProjelerDetay:{
        screen:GecikmedekiProjelerDetay,
        navigationOptions:{
            headerTintColor:'white',
            headerStatusBarHeight:20,
            headerTitleAlign:'center',
            headerTitle:'DETAYLAR',
            headerStyle:{
                backgroundColor:'#1c3faa',
                
          }
          }
    },
    ProjelerDetay:{
        screen:ProjelerDetay,
        navigationOptions:{
            headerTintColor:'white',
            headerStatusBarHeight:20,
            headerTitleAlign:'center',
            headerTitle:'DETAYLAR',
            headerStyle:{
                backgroundColor:'#1c3faa',
                
          }
          }
    },
    
    IsEmirleriDetay:{
        screen:IsEmirleriDetay,
        navigationOptions:{
            headerTintColor:'white',
            headerStatusBarHeight:20,
            headerTitleAlign:'center',
            headerTitle:'DETAYLAR',
            headerStyle:{
                backgroundColor:'#1c3faa',
                
          }
          }
    },
    
    
    



},{
    initialRouteName:"Login"
}

);

export default AppContainer = createAppContainer(appNavigator);