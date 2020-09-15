import React, { Component } from 'react'
import { Text, View ,StyleSheet,StatusBar,FlatList,TouchableOpacity} from 'react-native'
import GecikmedekiProjeler from './GecikmedekiProjeler'



export default class GecikmedekiProjelerDetay extends Component {
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
            "Sirket":"Kavut AŞ"
        },
        {
            "id":"2",
            "Siparis":"Mutfak Dolabı",
            "Bolum":"Projelendirmede-Dolap",
            "Musteri":"Duha Yıldırım",
            "BaslangicTarihi":"25/12/2020",
            "BitisTarihi":"25/12/2021",
            "Personel":"Emre Kılınç",
            "Sirket":"Ağın Leblebileri"
        },
        {
            "id":"3",
            "Siparis":"Mutfak Dolabı",
            "Bolum":"Projelendirmede-Kapak",
            "Musteri":"M. Akif Ürgen",
            "BaslangicTarihi":"25/12/2020",
            "BitisTarihi":"25/12/2021",
            "Personel":"Emre Kılınç",
            "Sirket":"Kayısı Canavarı"
        },
    
    ]
    }
    renderItem = ({ item}) => {
        
        return(
            <TouchableOpacity style={styles.item} >               
                
                <Text style={styles.title}> {item.Sirket}-{item.Siparis}</Text>
                <Text style={{color:'green',fontSize:15}}>{item.Bolum} </Text>
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
        const { navigate , push, goBack, getParam} = this.props.navigation
        const musteri = getParam('musteri');
        const siparis = getParam('siparis');
        const bitisTarihi = getParam('bitisTarihi');
        const personel = getParam('personel');
        const baslangicTarihi = getParam('baslangicTarihi');
        return (
            <View style={styles.container}>
                    <StatusBar backgroundColor='#1c3faa' barStyle='light-content' ></StatusBar>
                    <View style={styles.detayView}>
                    <Text style={styles.detayText}>Müşteri Adı: {musteri}</Text>
                    <Text style={styles.detayText}>Sipariş Adı: {siparis} </Text>
                    <Text style={styles.detayText}>Başlangıç Tarihi: {baslangicTarihi} </Text>
                    <Text style={styles.detayText}>Bitiş Tarihi:  {bitisTarihi}</Text>
                    <Text style={styles.detayText}>Personel Adı : {personel} </Text>
               
                 
                </View>
                <Text style={styles.listeText}> {musteri} {siparis} Kesim Listesi</Text>

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
        marginVertical:10,
        color:'#1c3faa',
        
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

        elevation: 8,
    },
    listeText:{
        textAlign:'center',marginTop:50,fontSize:16,fontWeight:'bold',color:'orange',
        textDecorationLine:'underline',shadowColor:'orange',elevation:4
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
})