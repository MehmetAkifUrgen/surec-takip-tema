import React, { Component } from 'react'
import { Text, View ,StyleSheet} from 'react-native'

export default class DetaylarMusteri extends Component {
    render() {
        const { navigate , push, goBack, getParam} = this.props.navigation
        const isim = getParam('isim');
        const telefon = getParam('telefon');
        const email = getParam('email');
        return (
            <View style={styles.container}>
                <View style={styles.detayView}>
                    <Text style={styles.detayText}>Şirket Adı:</Text>
                    <Text style={styles.detayText}>Adı: {isim} </Text>
                    <Text style={styles.detayText}>Kimlik Numarası:</Text>
                    <Text style={styles.detayText}>Telefon: {telefon}</Text>
                    <Text style={styles.detayText}>Faks:</Text>
                    <Text style={styles.detayText}>Email: {email} </Text>
                    <Text style={styles.detayText}>Adres:</Text>
                    <Text style={styles.detayText}>Açıklama:</Text>
                </View>
                <View style={styles.siparisler}>
                    <Text style={styles.detayText}>Siparişler</Text>
                    <Text style={styles.detayText}>Adı: {isim} </Text>
                    <Text style={styles.detayText}>Mobilya </Text>
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
        marginVertical:5,
        color:'black',
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

        elevation: 16,
    }
})