import React, { Component } from 'react'
import { Text, View ,StyleSheet,StatusBar} from 'react-native'

export default class KesimListeleriDetay extends Component {
    render() {
        const { navigate , push, goBack, getParam} = this.props.navigation
        
        const agac = getParam('agac');
        const tezgah = getParam('tezgah');
        const operasyon = getParam('operasyon');
       
        return (
            <View style={styles.container}>
                    <StatusBar backgroundColor='#1c3faa' barStyle='light-content' ></StatusBar>
                    <View style={styles.detayView}>
                    <Text style={{color:'tomato',fontSize:17,textAlign:'center',textDecorationLine:'underline'}}>{agac}</Text>
                    <Text style={styles.detayText}>Tezgah Adı: {tezgah}</Text>
                    <Text style={styles.detayText}>Operasyon Adı : {operasyon} </Text>
                    <Text style={styles.detayText}>Zaman : </Text>
                    <Text style={styles.detayText}>Maliyet : </Text>
                    <Text style={styles.detayText}>Açıklama :   </Text>
                   
                    
               
                 
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