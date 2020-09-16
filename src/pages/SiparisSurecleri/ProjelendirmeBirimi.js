import React, { Component } from 'react'
import { Text, View,TouchableOpacity,StyleSheet,FlatList,StatusBar } from 'react-native'
import Dialog, { SlideAnimation, DialogContent ,DialogTitle} from 'react-native-popup-dialog';

export default class ProjelendirmeBirimi extends Component {
    componentWillUnmount(){
        this.state.visible=false
    }
    state={
        DATA:[
            {
            "id":"1",
            "Siparis":"Vestiyer",
            "Bolum":"Projelendirmede-Kapı",
            "Musteri":"Yusuf Sürmeli",
            "BaslangicTarihi":"25/12/2020",
            "BitisTarihi":"25/12/2021",
            "Personel":"Jimmy Durmaz",
            "Sirket":"Kavut AŞ"
        },
        {
            "id":"2",
            "Siparis":"Mutfak Dolabı",
            "Bolum":"Projelendirmede-Dolap",
            "Musteri":"Duha Yıldırım",
            "BaslangicTarihi":"25/12/2020",
            "BitisTarihi":"25/12/2021",
            "Personel":"Emre Kılınç",
            "Sirket":"Ağın Leblebileri"
        },
        {
            "id":"3",
            "Siparis":"Mutfak Dolabı",
            "Bolum":"Projelendirmede-Kapak",
            "Musteri":"M. Akif Ürgen",
            "BaslangicTarihi":"25/12/2020",
            "BitisTarihi":"25/12/2021",
            "Personel":"Emre Kılınç",
            "Sirket":"Kayısı Canavarı"
        },
    
    ],
        visible:false,
        musteri:"",
        siparis:"",
        baslangicTarihi:"",
        bitisTarihi:"",
        personel:""
    }
    

    renderItem = ({ item}) => {
        return(
            <TouchableOpacity style={styles.item} onPress={
                ()=>{
                    this.setState({visible:true,musteri:item.Musteri,siparis:item.Siparis,baslangicTarihi:item.BaslangicTarihi,bitisTarihi:item.BitisTarihi,personel:item.Personel})
                }
            } >               
                
                <Text style={styles.title}> {item.Sirket}</Text>
                <Text style={{color:'green',fontSize:15}}>{item.Bolum} </Text>
                <Text style={{color:'orange',fontSize:15}}>{item.Musteri}</Text>
                <View style={styles.durumView}>
                    
                    <Text style={{color:'tomato',fontSize:15}}>{item.BaslangicTarihi}</Text>
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
                            <Text style={styles.dialogText}>Başlangıç Tarihi: {this.state.baslangicTarihi} </Text>
                            <Text style={styles.dialogText}>Bitiş Tarihi:  {this.state.bitisTarihi}</Text>
                            <Text style={styles.dialogText}>Personel Adı : {this.state.personel} </Text>
                            
                             
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
        color:'#1c3faa',
        fontSize:16,
        fontWeight:'bold'
        
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