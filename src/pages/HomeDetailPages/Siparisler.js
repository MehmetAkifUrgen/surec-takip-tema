import React, { Component } from 'react'
import { Text, View , FlatList,StyleSheet,TouchableOpacity,Image, StatusBar} from 'react-native'
import HomePage from '../homePage';

var Yeni = new HomePage();

export default class Siparisler extends Component {
    state={
        DATA:Yeni.state.DATA
    }

    renderItem = ({ item}) => {
        var year = new Date().getFullYear();
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        const { navigate , push, goBack} = this.props.navigation
        return(
            <TouchableOpacity style={styles.item} >               
                
                <Text style={styles.title}>{item.title}</Text>
                <Text >Sipariş Sahibi: {item.title}</Text>
                <Text>Sipariş Tarihi: {date}/{month}/{year}</Text>
                
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
        
        backgroundColor:'#f1f5f7'
    },
  
    item:{ 
        flex:1,
        flexDirection: 'column',
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#1c3faa',  
        backgroundColor:'#1c3faa'  ,
        borderRadius:10 ,
        marginHorizontal:'7%',
        marginVertical:'2%',
        
        
    },
    image:{
        width: 50,
        height: 50,
        borderRadius: 25,
        marginHorizontal: 10,
        
        
    },
    title:{
        color:'white',
        fontSize:18,
        
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

