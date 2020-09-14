import React, { Component } from 'react'
import { Text, View , FlatList,StyleSheet,TouchableOpacity,Image, StatusBar} from 'react-native'
import HomePage from '../homePage';

var Yeni = new HomePage();

export default class Tezgahlar extends Component {
    state={
        DATA:Yeni.state.DATA,
        kira:1,
        fiyat:1
    }

    renderItem = ({ item}) => {
        
        const { navigate , push, goBack} = this.props.navigation
        return(
            <TouchableOpacity style={styles.item} >               
                
                <Text style={styles.title}>{item.id}. {item.title}</Text>
                <View style={styles.tezgahStyle}>
                    <Text>Kira :{this.state.kira} </Text>
                    <Text>Fiyat: {this.state.fiyat}</Text>
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
    },
    tezgahStyle:{
        flex:1,
        flexDirection:'column',
        alignItems:'flex-end',
        
    }
})

