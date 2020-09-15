import React, { Component } from 'react'
import { Text, View ,TouchableOpacity,StyleSheet,StatusBar,FlatList} from 'react-native'




export default class Projeler extends Component {
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
        const musteri=item.Musteri
        const siparis=item.Siparis
        const baslangicTarihi=item.BaslangicTarihi
        const bitisTarihi=item.BitisTarihi
        const personel=item.Personel
        return(
            <TouchableOpacity style={styles.item} onPress={
                ()=>{
                    navigate("ProjelerDetay",{musteri,siparis,baslangicTarihi,personel,bitisTarihi})
                }
            }>               
                
                <Text style={styles.title}> {item.Musteri}</Text>
                <Text style={{color:'green'}}>{item.Durum} </Text>
                <View style={styles.durumView}>
                    
                    <Text style={{color:'orange'}}>Tarih: {item.BaslangicTarihi}</Text>
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
        var year = new Date().getFullYear();
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
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
        borderColor:'blue',
        borderWidth:1,
        marginHorizontal:'7%',
        marginVertical:'2%',
        shadowColor: "white",
        shadowOffset: {
	        width: 0,
	        height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 16,
        
        
    },
   
        
   
    title:{
        color:'blue',
        fontSize:15,
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