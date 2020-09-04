import React, { Component } from 'react'
import { Text, View , FlatList,StyleSheet,TouchableOpacity,Image, StatusBar} from 'react-native'
import HomePage from '../homePage';

var Yeni = new HomePage();

export default class Musteriler extends Component {

    state={
        DATA:Yeni.state.DATA
    }

    renderItem = ({ item}) => {
        const { navigate , push, goBack} = this.props.navigation
        return(
            <TouchableOpacity style={styles.item} >               
                <Image style={styles.image} source={item.src}></Image>
                <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
    
        );
        
        
       };
    render() {
        return (
            <View style={styles.main}>
                <StatusBar backgroundColor='#1c3faa'></StatusBar>
                <FlatList
                    
                    renderItem={this.renderItem}
                    data={this.state.DATA}
                    keyExtractor={item => item.id}
                />

            </View>  
            
        )
    }
}
const styles=StyleSheet.create({
    main:{
        
        backgroundColor:'#1c3faa'
    },
  
    item:{ 
        flex:1,
        flexDirection: 'row',
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#1c3faa',  
        backgroundColor:'#f1f5f7'  ,
        borderRadius:10 ,
        marginHorizontal:'10%',
        marginVertical:'2%'
        
    },
    image:{
        width: 50,
        height: 50,
        borderRadius: 25,
        marginHorizontal: 10,
        borderWidth:3,
        borderColor:'#1c3faa'
    },
    title:{
        color:'black',
        fontSize:20
    }
})