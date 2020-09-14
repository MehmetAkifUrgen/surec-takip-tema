import React, { Component } from 'react'
import { Text, View ,StyleSheet,StatusBar,FlatList,TouchableOpacity} from 'react-native'
import KesimListeleri from '../HomeDetailPages/KesimListeleri';

var yeni=new KesimListeleri()

export default class ProjelendirmeBirimiDetay extends Component {

    state={
        DATA:yeni.state.DATA
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
                        <Text style={styles.detayText}>Personel Adı : {personel} </Text>
                        <Text style={styles.detayText}>Sözleşme Tarihi: {baslangicTarihi} </Text>
                        <Text style={styles.detayText}>Sipariş Tipi: {siparis} </Text>
                    </View>
                    <Text style={styles.kesimText}>Kesim Listeleri Bilgisi</Text>

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
    renderItem = ({ item}) => {
        
        const { navigate , push, goBack} = this.props.navigation
        return(
            <TouchableOpacity style={styles.item} >               
                
                <Text style={styles.title}> {item.Musteri}</Text>
                <View style={styles.durumView}>
                    <Text style={{color:'green'}}>{item.Durum} </Text>
                    <Text style={{color:'orange'}}> {item.Bolum}</Text>
                </View>
                
                
            </TouchableOpacity>
    
        );
        
        
       };
       renderFooter = () => {
        return(
            <View style={{height:30}}></View>
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
    kesimText:{
        textAlign:'center',marginTop:30,color:'green',fontWeight:'bold',fontSize:15,
        
        textDecorationLine:'underline',
        
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

        elevation: 16,
        
        
    },
    durumView:{
        flex:1,
        flexDirection:'column',
        alignItems:'flex-end'
    }
})