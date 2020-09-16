import React, { Component } from 'react'
import { Text, View ,StyleSheet,StatusBar} from 'react-native'

export default class KesimListeleriDetay extends Component {
    render() {
        const { navigate , push, goBack, getParam} = this.props.navigation
        
        
        const tezgah = getParam('tezgah');
        const elektrik = getParam('elektrik');
        const kira = getParam('kira');
        const aciklama = getParam('aciklama');
        const fiyat = getParam('fiyat');
       
        return (
            <View style={styles.container}>
                    <StatusBar backgroundColor='#1c3faa' barStyle='light-content' ></StatusBar>
                    <View style={styles.detayView}>
                   
                    <Text style={styles.detayText}>Tezgah Adı:   {tezgah}</Text>
                    <Text style={styles.detayText}>Açıklama:   {aciklama} </Text>
                    <Text style={styles.detayText}>Fiyat:   {fiyat}</Text>
                    <Text style={styles.detayText}>Kira Maliyeti:   {kira}</Text>
                    <Text style={styles.detayText}>Elektrik Maliyeti:   {elektrik}</Text>
                   
                    
               
                 
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
        fontSize:17,
        marginVertical:10,
        color:'#1c3faa',
        fontStyle:'italic',
        fontWeight:'900'
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