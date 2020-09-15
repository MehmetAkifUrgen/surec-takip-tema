import React, { Component } from 'react'
import { Text, View ,TouchableOpacity,StyleSheet,StatusBar,FlatList} from 'react-native'




export default class Projeler extends Component {
    state={
        DATA:[
            {
                "id":"1",
                "Musteri":"Yusuf Sürmeli mutfak",
                "Durum":"Üretimde",
                "Tarih":"13/09/2020"
            },
            {
                "id":"2",
                "Musteri":"Duha Yıldırım vestiyer",
                "Durum":"Projelendirme",
                "Tarih":"03/11/2020"
            },
            {
                "id":"3",
                "Musteri":"Akif Ürgen Antre",
                "Durum":"Üretime Hazır",
                "Tarih":"21/10/2020"
            }
        ]
    }


    renderItem = ({ item}) => {
        
        const { navigate , push, goBack} = this.props.navigation
        return(
            <TouchableOpacity style={styles.item} >               
                
                <Text style={styles.title}> {item.Musteri}</Text>
                <Text style={{color:'green'}}>{item.Durum} </Text>
                <View style={styles.durumView}>
                    
                    <Text style={{color:'orange'}}>Tarih: {item.Tarih}</Text>
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