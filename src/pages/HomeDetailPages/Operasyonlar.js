import React, { Component } from 'react'
import { Text, View , FlatList,StyleSheet,TouchableOpacity, StatusBar, Alert,Modal} from 'react-native'
import Tezgahlar from './Tezgahlar';

var Yeni = new Tezgahlar();

export default class Operasyonlar extends Component {
    state={
        DATA:Yeni.state.DATA,
       
    }
    
    
    renderItem = ({ item}) => {
        
        const { navigate , push, goBack} = this.props.navigation
        
        return(
            <TouchableOpacity style={styles.item}  onPress={()=>{
                
            }
                
            }>               
                
                <Text style={styles.title}>{item.Islem}</Text>
                <Text style={{color:'tomato',marginLeft:10}}>{item.Tezgah}</Text>
                
                
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
        borderWidth:1,
        borderColor:'#1c3faa'
        
        
    },
    image:{
        width: 50,
        height: 50,
        borderRadius: 25,
        marginHorizontal: 10,
        
        
    },
    title:{
        color:'orange',
        fontSize:17,
        fontWeight:'bold'
        
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

