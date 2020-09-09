import React, { Component } from 'react'
import { Text, View ,TouchableOpacity,StyleSheet,Image} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'


export default class IsEmirleri extends Component {
    render() {
        var year = new Date().getFullYear();
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        return (
            <ScrollView style={styles.main}>
                <TouchableOpacity style={styles.item} >               
                    
                    <Text style={styles.title}>Yusuf Sürmeli - Koltuk</Text>
                    
                    <View style={styles.dateView}>
                        <Text style={{color:'pink' ,textAlign:'right'}}>Üretimde</Text>
                        <Text style={styles.date}>{date}/{month}/{year}</Text>
                    </View>
                    
                </TouchableOpacity>

                <TouchableOpacity style={styles.item} >               
                    
                    <Text style={styles.title}>Duha Yıldırım - Yatak</Text>
                    
                    <View style={styles.dateView}>
                        <Text style={{color:'pink' ,textAlign:'right'}}>Beklemede</Text>
                        <Text style={styles.date}>{date}/{month}/{year}</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item} >               
                    
                    <Text style={styles.title}>Mehmet Akif Ürgen - Masa</Text>
                    
                    <View style={styles.dateView}>
                        <Text style={{color:'pink',textAlign:'right'}}>Üretimde</Text>
                        <Text style={styles.date}>{date}/{month}/{year}</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}


const styles=StyleSheet.create({
    main:{
        flexDirection:'column',
        backgroundColor:'#f1f5f7'
    },
    item:{ 
        flex:1,
        flexDirection: 'column',
        paddingVertical: 10,
        padding:10,
        
        backgroundColor:'#1c3faa'  ,
        borderRadius:10 ,
        marginHorizontal:'7%',
        marginVertical:'2%',
        
        
        
    },
    image:{
        width: 70,
        height: 70,
        borderRadius: 35,
        marginHorizontal: 10,
        borderWidth:2,
        borderColor:'white'
        
    },
    title:{
        color:'white',
        fontSize:15,
        fontWeight:'500',
        
        
    },
    dateView:{
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-end',  
        marginRight:10
    },
    date:{
        
        textAlign:'right',
        color:'white'
    }
})