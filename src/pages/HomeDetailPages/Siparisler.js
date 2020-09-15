import React, { Component } from 'react'
import { Text, View , FlatList,StyleSheet,TouchableOpacity,Image, StatusBar} from 'react-native'
import HomePage from '../homePage';



export default class Siparisler extends Component {
    state={
        DATA:[
            {
            "id":"1",
            "Siparis":"Vestiyer",
            "Bolum":"Projelendirmede-Kapı",
            "Musteri":"Yusuf Sürmeli",
            "BaslangicTarihi":"25/12/2020",
            "BitisTarihi":"12/11/2021",
            "Personel":"Jimmy Durmaz",
            "Sirket":"Kavut AŞ",
            "Durum" :"Transfer Edildi"
        },
        {
            "id":"2",
            "Siparis":"Vestiyer",
            "Bolum":"Projelendirmede-Vestiyer",
            "Musteri":"Duha Yıldırım",
            "BaslangicTarihi":"03/10/2020",
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
        
        
        return(
            <TouchableOpacity style={styles.item}   >               
                
                <Text style={styles.title}>{item.Musteri} {item.Siparis} </Text>
                <Text style={{color:'orange'}}> {item.Musteri} </Text>
                <Text style={{color:'tomato'}}>Sipariş Tarihi: {item.BaslangicTarihi} </Text>
                
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
                contentContainerStyle={{marginTop:20}}
                    numColumns={1}
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
        borderWidth: 1,
        borderColor: '#1c3faa',  
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

        elevation: 8,
        padding:10
        
        
        
    },
    
    title:{
        color:'#1c3faa',
        fontSize:18,
        marginBottom:10
        
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

