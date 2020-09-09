import React, { Component } from 'react'
import { Text, View,StyleSheet,StatusBar,Image,FlatList,TouchableOpacity ,ScrollView, SafeAreaView, SectionList, VirtualizedList, ListView} from 'react-native'
import SiparisSurecleriData from '../data/SiparisSurecleriData'  ;
var Yeni = new SiparisSurecleriData();
export default class SiparisSurecleri extends Component {
    state={
        DATA:Yeni.state.DATA
    }
       
    render() {
        return (
            <ScrollView style={styles.main}>
                <StatusBar backgroundColor='#1c3faa' barStyle='light-content' ></StatusBar>
           
                <Text style={styles.uretim}>Birimler</Text>

                <TouchableOpacity style={styles.item} >               
                    <Image style={styles.image} source={require('../assets/SiparisSurecleri/1.png')}></Image>
                    <Text style={styles.title}>Müşteriler Listesi</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item} >               
                    <Image style={styles.image} source={require('../assets/SiparisSurecleri/2.png')}></Image>
                    <Text style={styles.title}>Pazarlama-Satış</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item} >               
                    <Image style={styles.image} source={require('../assets/SiparisSurecleri/3.png')}></Image>
                    <Text style={styles.title}>Projelendirme Birimi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} >               
                    <Image style={styles.image} source={require('../assets/SiparisSurecleri/4.png')}></Image>
                    <Text style={styles.title}>Üretim Planlama Birimi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} >               
                    <Image style={styles.image} source={require('../assets/SiparisSurecleri/5.png')}></Image>
                    <Text style={styles.title}>Satın Alma Planlama Birimi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} >               
                    <Image style={styles.image} source={require('../assets/SiparisSurecleri/6.png')}></Image>
                    <Text style={styles.title}>Transfer Edilen</Text>
                </TouchableOpacity>
                
                
                <Text style={styles.uretim}>Üretim Durumu</Text>

                <TouchableOpacity style={styles.item} >               
                    <Image style={styles.image} source={require('../assets/UretimDurumu/1.png')}></Image>
                    <Text style={styles.title}>Transfer Edilen</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} >               
                    <Image style={styles.image} source={require('../assets/UretimDurumu/2.png')}></Image>
                    <Text style={styles.title}>Transfer Edilen</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} >               
                    <Image style={styles.image} source={require('../assets/UretimDurumu/3.png')}></Image>
                    <Text style={styles.title}>Transfer Edilen</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} >               
                    <Image style={styles.image} source={require('../assets/UretimDurumu/4.png')}></Image>
                    <Text style={styles.title}>Transfer Edilen</Text>
                </TouchableOpacity>
                
        </ScrollView>  
            
        )
    }
}
const styles=StyleSheet.create({
    main:{
        flexDirection:'column',
        backgroundColor:'#f1f5f7'
    },
  
    item:{ 
        flex:1,
        flexDirection: 'row',
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#1c3faa',  
        backgroundColor:'#1c3faa'  ,
        borderRadius:10 ,
        marginHorizontal:'7%',
        marginVertical:'2%',
        alignItems:'center'
        
    },
    image:{
        width: 50,
        height: 50,
        borderRadius: 25,
        marginHorizontal: 10,
        
        
    },
    title:{
        color:'white',
        fontSize:16,
        
    },
    
    uretim:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        color:'white',
        marginHorizontal:100,
        marginVertical:20,
        backgroundColor:'purple',
        borderRadius:20
        
    }
})

