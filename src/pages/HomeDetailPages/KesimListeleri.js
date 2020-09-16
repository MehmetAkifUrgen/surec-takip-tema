import React, { Component } from 'react'
import { Text, View ,TouchableOpacity,StyleSheet,StatusBar,FlatList} from 'react-native'
import Dialog, { SlideAnimation, DialogContent ,DialogTitle} from 'react-native-popup-dialog';

export default class KesimListeleri extends Component {

    componentWillUnmount(){
        this.state.visible=false
    }

    state={
        DATA:[
            {
                "id":"1",
                "Musteri":"Yusuf Sürmeli mutfak",
                "Durum":"Gövdeler",
                "Bolum":"Gövdeler-Kesim Listesi",
                "Zaman" : "2 Ay",
                "Maliyet" :"20.000₺",
                "Aciklama":"30m2 kare şeklinde"
            },
            {
                "id":"2",
                "Musteri":"Duha Yıldırım vestiyer",
                "Durum":"KAPAK 1",
                "Bolum":"Kapak1-Kesim Listesi",
                "Zaman" : "1 Ay",
                "Maliyet" :"15.000₺",
                "Aciklama":"3m uzunluğunda"
               
            },
            {
                "id":"3",
                "Musteri":"Akif Ürgen Antre",
                "Durum":"KAPAK 2",
                "Bolum":"Kapak2-Kesim Listesi",
                "Zaman" : "1 Ay",
                "Maliyet" :"10.000₺",
                "Aciklama":"Duvarlara duvar kağıdı yapıştırılacak"
                
            }
        ],
        visible:false,
        bolum:"",
        durum:"",
        zaman:"",
        maliyet:"",
        aciklama:""
    }


    renderItem = ({ item}) => {
        
      
     
        return(
            <TouchableOpacity style={styles.item} onPress={
                ()=>{
                    this.setState({visible:true,bolum:item.Bolum,durum:item.Durum,zaman:item.Zaman,maliyet:item.Maliyet,aciklama:item.Aciklama})
                }
            } >               
                
                <Text style={styles.title}> {item.Musteri}</Text>
                <View style={styles.durumView}>
                    <Text style={{color:'green'}}>{item.Durum} </Text>
                    <Text style={{color:'orange'}}> {item.Bolum}</Text>
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
                              <Text style={styles.dialogText}>Tezgah Adı:   {this.state.bolum}</Text>
                              <Text style={styles.dialogText}>Operasyon Adı:   {this.state.durum}</Text>
                              <Text style={styles.dialogText}>Zaman:   {this.state.zaman}</Text>
                              <Text style={styles.dialogText}>Maliyet:   {this.state.maliyet}</Text>
                              <Text style={styles.dialogText}>Açıklama:  {this.state.aciklama}</Text>
                            
                             
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
        borderColor:'blue',
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

        elevation: 16,
        
        
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