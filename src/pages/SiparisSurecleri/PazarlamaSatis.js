import React, { Component } from 'react'
import { Text, View,TouchableOpacity,StyleSheet,FlatList,StatusBar } from 'react-native'
import Dialog, { SlideAnimation, DialogContent ,DialogTitle} from 'react-native-popup-dialog';


export default class PazarlamaSatis extends Component {
    

    componentWillUnmount(){
        this.state.visible=false
    }

    state={
        DATA:[
            {
                "id":"1",
            "Siparis":"Vestiyer",
            "Bolum":"Pazarlama Satış",
            "Musteri":"Yusuf Sürmeli",
            "Tarih":"25/12/2020",
            "Personel":"Jimmy Durmaz"
        },
        {
            "id":"2",
            "Siparis":"Mutfak Dolabı",
            "Bolum":"Pazarlama Satış",
            "Musteri":"Duha Yıldırım",
            "Tarih":"25/12/2020",
            "Personel":"Emre Kılınç"
        },
    
    ],
        visible:false,
        musteri:"",
        siparis:"",
        tarih:"",
        personel:"",
       
    }
    

    renderItem = ({ item}) => {
        
        
        return(
            <TouchableOpacity style={styles.item} onPress={
                ()=>{
                    this.setState({visible:true,musteri:item.Musteri,siparis:item.Siparis,tarih:item.Tarih,personel:item.Personel})
                }
            } >               
                
                <Text style={styles.title}> {item.Siparis}</Text>
                <View style={styles.durumView}>
                    <Text style={{color:'green'}}>{item.Bolum} </Text>
                    <Text style={{color:'orange'}}>{item.Musteri}</Text>
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

                <Dialog visible={this.state.visible}
                dialogTitle={<DialogTitle style={{backgroundColor:'orange'}} title="DETAYLAR"/>}
                
                dialogAnimation={new SlideAnimation({
                    slideFrom:'top'
                    
                })}
                
                onTouchOutside={() => {
                    this.setState({ visible: false });
                  }}>
                      <DialogContent>
                          <View style={styles.dialog}>
                                <Text style={styles.dialogText}>Müşteri Adı: {this.state.musteri}</Text>
                                <Text style={styles.dialogText}>Sipariş Adı: {this.state.siparis} </Text>
                                <Text style={styles.dialogText}>Proje  Adı:   {this.state.musteri} {this.state.siparis} </Text>
                                <Text style={styles.dialogText}>Başlangıç  Tarihi: {this.state.tarih} </Text>
                                <Text style={styles.dialogText}>Bitiş  Tarihi: {this.state.tarih} </Text>
                                <Text style={styles.dialogText}>Personel :  {this.state.personel}</Text>
                            
                             
                          </View>
                      </DialogContent>

                </Dialog>

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
        borderColor:'#1c3faa',
        borderWidth:2,
        marginHorizontal:'7%',
        marginVertical:'2%',
        shadowColor: "white",
        shadowOffset: {
	        width: 0,
	        height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 8,
        
        
    },
   
        
   
    title:{
        color:'blue',
        fontSize:15,
        fontWeight:'500'
        
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
    },
    dialogText:{
        color:'#1c3faa',
        fontSize:15,
        marginVertical:10,
        fontWeight:'bold'
    },
})