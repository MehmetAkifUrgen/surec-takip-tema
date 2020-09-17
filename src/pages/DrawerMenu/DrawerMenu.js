import React, { Component } from 'react'
import { Image,  StyleSheet, Text, View } from 'react-native'


export default class DrawerMenu extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection:'column',
        alignItems:'center',}}><Image style={styles.image} source={require('../assets/person.png')}></Image></View>
                    <Text style={styles.detayText}>Şirket Adı: Prodrom</Text>
                    <Text style={styles.detayText}>Adı: Duha</Text>
                    <Text style={styles.detayText}>TC No: 12345678910</Text>
                    <Text style={styles.detayText}>Telefon: 98765432109</Text>
                    <Text style={styles.detayText}>Faks:</Text>
                    <Text style={styles.detayText}>Email: dfşskgşl@gmail.com</Text>
                    <Text style={styles.detayText}>Adres: Kültür Mah.</Text>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        
       
     
        
    },
    image:{
        marginTop:30,
        width:100,
        height:100,
        marginBottom:60
       
    },
    detayText:{
        fontSize:15,
        marginVertical:5,
        color:'white',
        fontWeight:'bold',
        marginLeft:20
    },
})