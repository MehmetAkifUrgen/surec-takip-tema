import React, { Component } from 'react'
import { Text, View,StyleSheet,StatusBar,Image,FlatList,TouchableOpacity ,ScrollView, SafeAreaView, SectionList} from 'react-native'
import SiparisSurecleriData from '../data/SiparisSurecleriData'  ;
var Yeni = new SiparisSurecleriData();
export default class SiparisSurecleri extends Component {
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
       getHeader = ()=> {
            return(
                <Text>Üretim Durumu</Text>
            )
       }
    render() {
        return (
            <SafeAreaView style={styles.main}>
                <StatusBar backgroundColor='#1c3faa' barStyle='light-content' ></StatusBar>
                <Text style={styles.uretim}>Birimler</Text>
                <FlatList
                    renderItem={this.renderItem}
                    data={this.state.DATA}
                    keyExtractor={item => item.id}
                    
                />
                
                <Text style={styles.uretim}>Üretim Durumu</Text>
                <FlatList
                    renderItem={this.renderItem}
                    data={this.state.DATA}
                    keyExtractor={item => item.id}
                />
             
         

            </SafeAreaView>  
            
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
    },
    uretim:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold'
    }
})

