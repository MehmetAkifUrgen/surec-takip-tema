import React, { Component } from 'react'
import { Text, View , FlatList,StyleSheet,TouchableOpacity,Image, StatusBar} from 'react-native'
import PersonelData from  '../data/PersonelData.js';
import {Linking} from 'react-native'

var Yeni = new PersonelData();

export default class Musteriler extends Component {

    state={
        DATA:Yeni.state.DATA
    }

    renderItem = ({ item}) => {
        const { navigate , push, goBack} = this.props.navigation
        const isim=item.title
        const telefon=item.telefon
        const email=item.email
        return(
            <TouchableOpacity style={styles.item} onPress={
                ()=>{
                    navigate("DetaylarMusteri",{isim,telefon,email})
                }
            }>               
                <Image style={styles.image} source={require('../assets/person.png')}></Image>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.aramaView}>
                    <TouchableOpacity onPress={
                         () =>{
                            Linking.openURL(`tel:${9999}`)
                        }
                    }>
                        <Image style={styles.arama} source={require('../assets/telephone.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={
                        () => {
                            Linking.openURL('whatsapp://send?text=&phone=5388757998')
                        }
                    }>
                        <Image style={styles.arama} source={require('../assets/whatsapp.png')}></Image>
                    </TouchableOpacity>
                </View>
                
            </TouchableOpacity>
    
        );
        
        
       };
       renderFooter = () => {
        return(
            <View style={{height:30}}></View>
        )
    }
    render() {
        return (
            <View style={styles.main}>
                <StatusBar backgroundColor='#1c3faa' barStyle='light-content' ></StatusBar>
                <FlatList
                    contentContainerStyle={{marginTop:'4%'}}
                    renderItem={this.renderItem}
                    data={this.state.DATA}
                    keyExtractor={item => item.id}
                    ListFooterComponent={this.renderFooter}
                />

            </View>  
            
        )
    }
}
const styles=StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'white',
        
        
    },
  
    item:{ 
        flex:1,
        flexDirection: 'row',
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#1c3faa',       
        backgroundColor:'white'  ,
        borderRadius:10 ,
        marginHorizontal:'7%',
        marginVertical:'2%',
        alignItems:'center',
        shadowColor: "white",
        shadowOffset: {
	        width: 0,
	        height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 16,
        
        
    },
    image:{
        width: 50,
        height: 50,
        borderRadius: 25,
        marginHorizontal: 10,
        borderWidth:1,
        borderColor:'#1c3faa'
        
        
    },
    title:{
        color:'#1c3faa',
        fontSize:15,
        fontStyle:'italic',
        marginLeft:5
    },
    arama:{
        width: 25,
        height: 25,
        marginHorizontal:10
    },
    aramaView:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end',  
        marginRight:10
    }
})