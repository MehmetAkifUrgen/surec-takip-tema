import React, { Component } from 'react'
import { Text, View , FlatList,StyleSheet,TouchableOpacity, StatusBar} from 'react-native'


export default class UrunAgaclari extends Component {
    state={
        DATA:[{
            "id":"1",
            "Agac":"Gövdeler ürün ağacı",
            "Tezgah":"1. İstasyon Kesim",
            "Operasyon":"Kesim İşlemi"
        },
        {
            "id":"2",
            "Agac":"Kapaklar",
            "Tezgah":"1. İstasyon Kesim",
            "Operasyon":"Kesim İşlemi"
        },
        {
            "id":"3",
            "Agac":"Arkalık",
            "Tezgah":"1. İstasyon Kesim",
            "Operasyon":"Kesim İşlemi"
        },
        {
            "id":"4",
            "Agac":"Gövdeler ürün ağacı",
            "Tezgah":"1. İstasyon Kesim",
            "Operasyon":"Kesim İşlemi"
        },
        {
            "id":"5",
            "Agac":"Kapaklar",
            "Tezgah":"1. İstasyon Kesim",
            "Operasyon":"Kesim İşlemi"
        },
        {
            "id":"6",
            "Agac":"Arkalık",
            "Tezgah":"1. İstasyon Kesim",
            "Operasyon":"Kesim İşlemi"
        }
    ]
    }

    renderItem = ({ item}) => {
        
        const { navigate , push, goBack} = this.props.navigation

        const agac=item.Agac
        const tezgah=item.Tezgah
        const operasyon=item.Operasyon

        return(
            <TouchableOpacity style={styles.item} onPress={
                ()=>{
                    navigate("UrunAgaclariDetay",{agac,tezgah,operasyon})
                }
            } >               
                
                <Text style={styles.title}>{item.Agac}</Text>
                
                
                
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
        flexDirection: 'column',
         
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
        padding:10
        
        
    },
    image:{
        width: 50,
        height: 50,
        borderRadius: 25,
        marginHorizontal: 10,
        
        
    },
    title:{
        color:'black',
        fontSize:17,
        
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

