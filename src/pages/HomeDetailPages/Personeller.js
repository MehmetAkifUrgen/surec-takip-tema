import React, { Component } from 'react'
import { Text, View , FlatList,StyleSheet,TouchableOpacity,Image, StatusBar} from 'react-native'
import PersonelData from  '../data/PersonelData.js';

var Yeni = new PersonelData();

export default class Personeller extends Component {

    state={
        DATA:Yeni.state.DATA
    }

    renderItem = ({ item}) => {
        const { navigate , push, goBack} = this.props.navigation
        return(
            <TouchableOpacity style={styles.item} >               
                <Image style={styles.image} source={require('../assets/person.png')}></Image>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.aramaView}>
                        <Image style={styles.arama} source={require('../assets/telephone.png')}></Image>
                        <Image style={styles.arama} source={require('../assets/whatsapp.png')}></Image>
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
                    contentContainerStyle={{marginTop:20}}
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
        flexDirection: 'row',
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#1c3faa',  
        backgroundColor:'white'  ,
        borderRadius:10 ,
        marginHorizontal:'7%',
        marginVertical:'2%',
        alignItems:'center',
        shadowColor: "white",
        shadowOffset: {
	        width: 0,
	        height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 8.00,

        elevation: 8,
        
    },
    image:{
        width: 50,
        height: 50,
        borderRadius: 25,
        marginHorizontal: 10,
        borderColor:'#1c3faa',
        borderWidth:1
        
        
    },
    title:{
        color:'#1c3faa',
        fontSize:15,
        fontStyle:'italic',
        marginLeft:5
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