import React, { Component } from 'react'
import { Text, View , FlatList,StyleSheet,TouchableOpacity,Image, StatusBar} from 'react-native'




export default class Tezgahlar extends Component {
    state={
        DATA:[
            {
                "id":"1",
                "Tezgah":"1.İstasyon Kesim",
                "Kira":"2",
                "Fiyat":"14",
                "Aciklama" :"Kesim Tezgahı",
                "Elektrik":"3",
                "Islem":"Kesim İslemi"
            },
            {
                "id":"2",
                "Tezgah":"1.İstasyon Cumbala",
                "Kira":"2",
                "Fiyat":"14",
                "Aciklama" :"Cumbala Tezgahı",
                "Elektrik":"3",
                "Islem":"Cumbala İslemi"
            },
            {
                "id":"3",
                "Tezgah":"3.İstasyon Delik",
                "Kira":"2",
                "Fiyat":"14",
                "Aciklama" :"Delme Tezgahı",
                "Elektrik":"3",
                "Islem":"Delme İslemi"
            },
            {
                "id":"4",
                "Tezgah":"4.İstasyon CNC",
                "Kira":"2",
                "Fiyat":"14",
                "Aciklama" :"CNC Tezgahı",
                "Elektrik":"3",
                "Islem":"CNC İslemi"
            },
            {
                "id":"5",
                "Tezgah":"5.İstasyon Zımpara",
                "Kira":"2",
                "Fiyat":"14",
                "Aciklama" :"Zımpara Tezgahı",
                "Elektrik":"3",
                "Islem":"Zımpara İslemi"
            }
        ]
    }

    renderItem = ({ item}) => {
        
        const { navigate , push, goBack} = this.props.navigation
        const tezgah=item.Tezgah
        const kira=item.Kira
        const fiyat =item.Fiyat
        const aciklama = item.Aciklama
        const elektrik=item.Elektrik
        return(
            <TouchableOpacity style={styles.item} onPress={
                ()=>{
                    navigate("TezgahlarDetay",{tezgah,kira,fiyat,aciklama,elektrik})
                }
            } >               
                
                <Text style={styles.title}> {item.Tezgah}</Text>
                <View style={styles.tezgahStyle}>
                    <Text style={{color:'orange'}}>Kira :{item.Kira} </Text>
                    <Text style={{color:'green'}}>Fiyat: {item.Fiyat}</Text>
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
        paddingHorizontal:10, 
        backgroundColor:'white'  ,
        borderRadius:10 ,
        marginHorizontal:'7%',
        marginVertical:'2%',
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
        width: 50,
        height: 50,
        borderRadius: 25,
        marginHorizontal: 10,
        
        
    },
    title:{
        color:'tomato',
        fontSize:17,
        fontWeight:'bold'
        
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
    },
    tezgahStyle:{
        flex:1,
        flexDirection:'column',
        alignItems:'flex-end',
        
    }
})

