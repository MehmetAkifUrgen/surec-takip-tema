import React, { Component } from 'react'
import { Text, View,TouchableOpacity,StyleSheet,FlatList,StatusBar } from 'react-native'


export default class TransferEdilen extends Component {
    state={
        DATA:[
            {
            "id":"1",
            "Siparis":"Vestiyer",
            "Bolum":"Projelendirmede-Kapı",
            "Musteri":"Yusuf Sürmeli",
            "BaslangicTarihi":"25/12/2020",
            "BitisTarihi":"25/12/2021",
            "Personel":"Jimmy Durmaz",
            "Sirket":"Kavut AŞ",
            "Durum" :"Transfer Edildi"
        },
        {
            "id":"2",
            "Siparis":"Mutfak Dolabı",
            "Bolum":"Projelendirmede-Dolap",
            "Musteri":"Duha Yıldırım",
            "BaslangicTarihi":"25/12/2020",
            "BitisTarihi":"25/12/2021",
            "Personel":"Emre Kılınç",
            "Sirket":"Ağın Leblebileri",
            "Durum" :"Transfer Edildi"
        },
        {
            "id":"3",
            "Siparis":"Mutfak Dolabı",
            "Bolum":"Projelendirmede-Kapak",
            "Musteri":"M. Akif Ürgen",
            "BaslangicTarihi":"25/12/2020",
            "BitisTarihi":"25/12/2021",
            "Personel":"Emre Kılınç",
            "Sirket":"Kayısı Canavarı",
            "Durum" :"Transfer Edildi"
        },
    
    ]
    }
    

    renderItem = ({ item}) => {
        
        const { navigate , push, goBack} = this.props.navigation
        
        const musteri=item.Musteri
        const siparis=item.Siparis
        const baslangicTarihi=item.BaslangicTarihi
        const bitisTarihi=item.BitisTarihi
        const personel=item.Personel
        
        return(
            <TouchableOpacity style={styles.item} onPress={
                ()=>{
                    navigate("TransferEdilenDetay",{musteri,siparis,baslangicTarihi,personel,bitisTarihi})
                }
            } >               
                
                
                <Text style={{color:'#1c3faa',fontSize:15,fontWeight:'bold'}}>{item.Sirket} - {item.Siparis}</Text>
                <Text style={{color:'orange',fontSize:15}}>{item.Musteri}</Text>
                <View style={styles.durumView}>
                    
                    <Text style={{color:'tomato',fontSize:15}}>{item.BaslangicTarihi}</Text>
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
        backgroundColor:'white'
    },
    item:{ 
        flex:1,
        flexDirection: 'column',
        paddingVertical: 10,
        padding:10,
        justifyContent:'center',
        backgroundColor:'white'  ,
        borderRadius:10 ,
        borderColor:'#1c3faa',
        borderWidth:2,
        marginHorizontal:'7%',
        marginVertical:'2%',
        shadowColor: "white",
        shadowOffset: {
	        width: 0,
	        height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 8,
        
        
    },
   
        
   
    title:{
        color:'#1c3faa',
        fontSize:16,
        fontWeight:'bold'
        
    },
    dateView:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end',  
        marginRight:10
    },
    date:{
        
        textAlign:'right',
        color:'white'
    },
    durumView:{
        flex:1,
        flexDirection:'column',
        alignItems:'flex-end'
    }
})