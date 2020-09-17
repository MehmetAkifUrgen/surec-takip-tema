import React, { Component } from 'react'
import { Button, Image,  StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


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

                    <View style={styles.butons}>
                        <TouchableOpacity style={styles.buton} >
                            <Image style={styles.butonImage} source={require('../assets/edit-button.png')}></Image>
                            <Text style={{color:'white',marginTop:5,fontWeight:'bold'}}>DÜZENLE</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buton} >
                            <Image style={styles.butonImage} source={require('../assets/exit.png')}></Image>
                            <Text style={{color:'white',marginTop:5,fontWeight:'bold'}}>ÇIKIŞ</Text>
                        </TouchableOpacity>
                        
                    </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    image:{
        marginTop:60,
        width:100,
        height:100,
        marginBottom:40
       
    },
    detayText:{
        fontSize:15,
        marginVertical:5,
        color:'white',
        fontWeight:'bold',
        marginLeft:20
    },
    butons:{
        flex:1,
        flexDirection:'row-reverse',
        justifyContent:'space-around',
        alignItems:'flex-end',
        marginBottom:30
    },
    buton:{
        marginHorizontal:50,
        alignItems:'center'
    },
    butonImage:{
        width:40,
        height:40
    }
})