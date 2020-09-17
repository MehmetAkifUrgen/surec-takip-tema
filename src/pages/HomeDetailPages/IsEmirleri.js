import React, { Component } from 'react'
import { Text, View ,TouchableOpacity,StyleSheet,StatusBar,FlatList} from 'react-native'




export default class IsEmirleri extends Component {
    state={
        DATA:[
            {
                "id":"1",
                "Musteri":"Yusuf Sürmeli",
                "Durum":"Üretimde",
                "Miktar":"1",
                "Durum" :"Üretimde",
                "Siparis" : "Mutfak",
                "Aciklama" : "sdşkgjldfk"
            },
            {
                "id":"2",
                "Musteri":"Duha Yıldırım",
                "Durum":"Beklemede",
                "Miktar":"2",
                "Durum" :"Beklemede",
                "Siparis" : "Vestiyer",
                "Aciklama" : "sdşkgjldfk"
            },
            {
                "id":"3",
                "Musteri":"Akif Ürgen",
                "Durum":"Beklemede",
                "Miktar":"3",
                "Durum" :"Hazırlanıyor",
                "Siparis" : "Antre",
                "Aciklama" : "sdşkgjldfk"
            },
            {
                "id":"4",
                "Musteri":"Tommy De Vitto",
                "Durum":"Üretimde",
                "Miktar":"12",
                "Durum" :"Beklemede",
                "Siparis" : "Sandalye",
                "Aciklama" : "sdşkgjldfk"
            },
            {
                "id":"5",
                "Musteri":"Sansar Selim",
                "Durum":"Beklemede",
                "Miktar":"2" ,
                "Durum" :"Beklemede",
                "Siparis" : "Bomba",
                "Aciklama" : "sdşkgjldfk"
            },
            {
                "id":"6",
                "Musteri":"Tony Montana",
                "Durum":"Üretimde",
                "Miktar":"1",
                "Durum" :"Beklemede",
                "Siparis" : "M-16",
                "Aciklama" : "sdşkgjldfk"
            },
            {
                "id":"7",
                "Musteri":"Walter White",
                "Durum":"Beklemede",
                "Miktar":"5",
                "Durum" :"Beklemede",
                "Siparis" : "Laboratuvar",
                "Aciklama" : "sdşkgjldfk"
            },
            
           
            
        ]
    }


    renderItem = ({ item}) => {
        
        const { navigate , push, goBack} = this.props.navigation
        const musteri=item.Musteri
        const siparis=item.Siparis
        const miktar=item.Miktar
        const aciklama=item.Aciklama
        const durum=item.Durum

        return(
            <TouchableOpacity style={styles.item} onPress={
                ()=>{
                    navigate("IsEmirleriDetay",{musteri,siparis,miktar,aciklama,durum})
                }
            } >               
                
                <Text style={styles.title}> {item.Musteri}-{item.Siparis} </Text>
                <View style={styles.durumView}>
                    <Text style={{color:'green'}}>{item.Durum} </Text>
                    <Text style={{color:'orange'}}>Miktar: {item.Miktar}</Text>
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
        fontSize:15,
        fontWeight:'500',
        
        
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