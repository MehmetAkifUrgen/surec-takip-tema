import React, { Component } from 'react'
import { Text, View ,TouchableOpacity,StyleSheet,Image} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import TezgahYogunluk from '../IstatistiklerPages/tezgahYogunluk'

export default class Istatistikler extends Component {
    render() {
        const { navigate , push, goBack} = this.props.navigation
        return (
            <ScrollView style={styles.main}>
                <TouchableOpacity style={styles.item} onPress={
                    () => {
                        navigate('TezgahYogunluk')
                    }
                }>               
                    <Image style={styles.image} source={require('../assets/Istatistikler/1.png')}></Image>
                    <Text style={styles.title}>Tezgah Yoğunluk Yüzdeleri</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item} >               
                    <Image style={styles.image} source={require('../assets/Istatistikler/2.png')}></Image>
                    <Text style={styles.title}>Üretim İstatistikleri</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item} >               
                    <Image style={styles.image} source={require('../assets/Istatistikler/3.png')}></Image>
                    <Text style={styles.title}>Proje İstatistikleri</Text>
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
        
        
        backgroundColor:'#1c3faa'  ,
        borderRadius:10 ,
        marginHorizontal:'7%',
        marginVertical:'2%',
        alignItems:'center',
        
        
    },
    image:{
        width: 70,
        height: 70,
        borderRadius: 35,
        marginHorizontal: 10,
        borderWidth:2,
        borderColor:'white'
        
    },
    title:{
        color:'white',
        fontSize:16,
        fontWeight:'bold'
        
    },
})