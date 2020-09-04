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
                <Image style={styles.image} source={require('../assets/person.png')}></Image>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.aramaView}>
                        <Image style={styles.arama} source={require('../assets/telephone.png')}></Image>
                        <Image style={styles.arama} source={require('../assets/whatsapp.png')}></Image>
                </View>
                
            </TouchableOpacity>
    
        );
        
        
       };
    render() {
        return (
            <View style={styles.main}>
                <StatusBar backgroundColor='#1c3faa' barStyle='light-content' ></StatusBar>
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
        
        backgroundColor:'#f1f5f7'
    },
  
    item:{ 
        flex:1,
        flexDirection: 'row',
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#1c3faa',  
        backgroundColor:'#1c3faa'  ,
        borderRadius:10 ,
        marginHorizontal:'7%',
        marginVertical:'2%',
        alignItems:'center'
        
    },
    image:{
        width: 50,
        height: 50,
        borderRadius: 25,
        marginHorizontal: 10,
        
        
    },
    title:{
        color:'white',
        fontSize:15,
        fontStyle:'italic'
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