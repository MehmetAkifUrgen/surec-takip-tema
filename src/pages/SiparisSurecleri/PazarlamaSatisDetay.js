import React, { Component } from 'react'
import { Text, View ,StyleSheet,StatusBar} from 'react-native'

export default class PazarlamaSatisDetay extends Component {
    render() {
        const { navigate , push, goBack, getParam} = this.props.navigation
        const musteri = getParam('musteri');
        const siparis = getParam('siparis');
        const tarih = getParam('tarih');
        const personel = getParam('personel');
        const bolum = getParam('bolum');
        return (
            <View style={styles.container}>
                    <StatusBar backgroundColor='#1c3faa' barStyle='light-content' ></StatusBar>
                    <View style={styles.detayView}>
                    <Text style={styles.detayText}>Müşteri Adı: {musteri}</Text>
                    <Text style={styles.detayText}>Sipariş Adı: {siparis} </Text>
                    <Text style={styles.detayText}>Proje  Adı: {siparis} </Text>
                    <Text style={styles.detayText}>Başlangıç  Tarihi: {tarih} </Text>
                    <Text style={styles.detayText}>Bitiş  Tarihi: {tarih} </Text>
                    <Text style={styles.detayText}>Personel :  {personel}</Text>
                    
               
                 
                </View>
                
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        
       
        backgroundColor:'white'
    },
    detayView:{
        marginHorizontal:'10%',
        flexDirection:'column',
        backgroundColor:'white',
        marginTop:50,
        padding:25,
        borderRadius:50,
        shadowColor: "white",
        shadowOffset: {
	        width: 0,
	        height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 16,
        
    },
    detayText:{
        fontSize:15,
        marginVertical:10,
        color:'#1c3faa',
        fontStyle:'italic',
        fontWeight:'bold'
    },
    siparisler:{
        marginHorizontal:'10%',
        flexDirection:'column',
        backgroundColor:'white',
        marginTop:50,
        padding:25,
        borderRadius:50,
        shadowColor: "white",
        shadowOffset: {
	        width: 0,
	        height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 8,
    }
})