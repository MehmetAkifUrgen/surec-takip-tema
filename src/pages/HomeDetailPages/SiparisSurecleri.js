import React, { Component } from 'react'
import { Text, View,StyleSheet,StatusBar,Image,FlatList,TouchableOpacity ,ScrollView, SafeAreaView, SectionList, VirtualizedList, ListView} from 'react-native'
import SiparisSurecleriData from '../data/SiparisSurecleriData'  ;
var Yeni = new SiparisSurecleriData();
export default class SiparisSurecleri extends Component {
    state={
        DATA:Yeni.state.DATA
    }
       
    render() {
        const { navigate , push, goBack} = this.props.navigation
        return (
            <ScrollView style={styles.main}>
                <StatusBar backgroundColor='#1c3faa' barStyle='light-content' ></StatusBar>
           
                <Text style={styles.uretim}>Birimler</Text>

                <TouchableOpacity style={styles.item} onPress={
                    ()=>{
                        navigate('Musteriler')
                    }
                }>               
                    <Image style={styles.image} source={require('../assets/SiparisSurecleri/1.png')}></Image>
                    <Text style={styles.title}>Müşteriler Listesi</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item} onPress={
                    ()=>{
                        navigate('PazarlamaSatis')
                    }
                } >               
                    <Image style={styles.image} source={require('../assets/SiparisSurecleri/2.png')}></Image>
                    <Text style={styles.title}>Pazarlama-Satış</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item} >               
                    <Image style={styles.image} source={require('../assets/SiparisSurecleri/3.png')}></Image>
                    <Text style={styles.title} onPress={
                    ()=>{
                        navigate('ProjelendirmeBirimi')
                    }
                }>Projelendirme Birimi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} >               
                    <Image style={styles.image} source={require('../assets/SiparisSurecleri/4.png')}></Image>
                    <Text style={styles.title}>Üretim Planlama Birimi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} >               
                    <Image style={styles.image} source={require('../assets/SiparisSurecleri/5.png')}></Image>
                    <Text style={styles.title}>Satın Alma Planlama Birimi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} onPress={
                    ()=>{
                        navigate('TransferEdilen')
                    }
                } >               
                    <Image style={styles.image} source={require('../assets/SiparisSurecleri/6.png')}></Image>
                    <Text style={styles.title}>Transfer Edilen</Text>
                </TouchableOpacity>
                
                
                <Text style={styles.uretim}>Üretim Durumu</Text>

                <TouchableOpacity style={styles.item} onPress={
                    ()=>{
                        navigate('GecikmedekiProjeler')
                    }
                } >               
                    <Image style={styles.image} source={require('../assets/UretimDurumu/1.png')}></Image>
                    <Text style={styles.title}>Gecikmedeki Projeler </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} >               
                    <Image style={styles.image} source={require('../assets/UretimDurumu/2.png')}></Image>
                    <Text style={styles.title}>Beklemedeki Üretim Siparişleri</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} >               
                    <Image style={styles.image} source={require('../assets/UretimDurumu/3.png')}></Image>
                    <Text style={styles.title}>Üretimdeki  Üretim Siparişleri</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} >               
                    <Image style={styles.image} source={require('../assets/UretimDurumu/4.png')}></Image>
                    <Text style={styles.title}>Transfer Aşamasındaki  Siparişler</Text>
                </TouchableOpacity>
                
        </ScrollView>  
            
        )
    }
}
const styles=StyleSheet.create({
    main:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'white'
    },
  
    item:{ 
        flex:1,
        flexDirection: 'row',
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#1c3faa',  
        backgroundColor:'white'  ,
        borderRadius:10 ,
        marginHorizontal:'6%',
        marginVertical:'2%',
        alignItems:'center',
        shadowColor: "white",
        shadowOffset: {
	        width: 0,
	        height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 12,
        borderWidth:1,
        borderColor:'#1c3faa'
        
    },
    image:{
        width: 60,
        height: 60,
        borderRadius: 30,
        marginHorizontal: 10,
        borderWidth:2,
        borderColor:'#1c3faa'
        
    },
    title:{
        color:'#1c3faa',
        fontSize:15,
        fontStyle:'normal',
        textAlign:'center',
        fontWeight:'bold',
        marginLeft:10
        
    },
    
    uretim:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        color:'white',
        marginHorizontal:150,
        marginVertical:20,
        backgroundColor:'orange',
        borderRadius:20
        
    }
})

