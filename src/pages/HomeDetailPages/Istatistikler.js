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

                <TouchableOpacity style={styles.item}  onPress={
                    () => {
                        navigate('Uretim')
                    }
                }>               
                    <Image style={styles.image} source={require('../assets/Istatistikler/2.png')}></Image>
                    <Text style={styles.title}>Üretim İstatistikleri</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item} onPress={
                    () => {
                        navigate('ProjeIstatistikleri')
                    }} >               
                    <Image style={styles.image} source={require('../assets/Istatistikler/3.png')}></Image>
                    <Text style={styles.title}>Proje İstatistikleri</Text>
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
        
        marginTop:20,
        backgroundColor:'white'  ,
        borderRadius:10 ,
        marginHorizontal:'7%',
       
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
        borderColor:'#1c3faa',
        
        
    },
    title:{
        color:'#1c3faa',
        fontSize:15,
        fontWeight:'bold',
        marginLeft:10
        
    },
})