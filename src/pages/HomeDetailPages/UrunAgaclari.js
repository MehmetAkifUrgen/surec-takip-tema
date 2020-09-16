import React, { Component } from 'react'
import { Text, View , FlatList,StyleSheet,TouchableOpacity, StatusBar} from 'react-native'
import Dialog, { SlideAnimation, DialogContent ,DialogTitle} from 'react-native-popup-dialog';


export default class UrunAgaclari extends Component {
    componentWillUnmount(){
        this.state.visible=false
    }
    state={
        DATA:[{
            "id":"1",
            "Agac":"Gövdeler ürün ağacı",
            "Tezgah":"1. İstasyon Kesim",
            "Operasyon":"Kesim İşlemi"
        },
        {
            "id":"2",
            "Agac":"Kapaklar",
            "Tezgah":"1. İstasyon Kesim",
            "Operasyon":"Kesim İşlemi"
        },
        {
            "id":"3",
            "Agac":"Arkalık",
            "Tezgah":"1. İstasyon Kesim",
            "Operasyon":"Kesim İşlemi"
        },
        {
            "id":"4",
            "Agac":"Gövdeler ürün ağacı",
            "Tezgah":"1. İstasyon Kesim",
            "Operasyon":"Kesim İşlemi"
        },
        {
            "id":"5",
            "Agac":"Kapaklar",
            "Tezgah":"1. İstasyon Kesim",
            "Operasyon":"Kesim İşlemi"
        },
        {
            "id":"6",
            "Agac":"Arkalık",
            "Tezgah":"1. İstasyon Kesim",
            "Operasyon":"Kesim İşlemi"
        }
    ],
        visible:false,
        tezgah:"",
        operasyon:"",
        agac:"",
      
    }

    renderItem = ({ item}) => {
        return(
            <TouchableOpacity style={styles.item} onPress={
                ()=>{
                    this.setState({visible:true,tezgah:item.Tezgah,operasyon:item.Operasyon,agac:item.Agac})
                }
            } >                
                <Text style={styles.title}>{item.Agac}</Text>
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
                              <Text style={{textAlign:'center',color:'tomato',fontWeight:'bold',marginVertical:10,fontSize:18,textDecorationLine:'underline'}}>{this.state.agac}</Text>
                              <Text style={styles.dialogText}>Tezgah Adı:   {this.state.tezgah}</Text>
                              <Text style={styles.dialogText}>Operasyon Adı:   {this.state.operasyon}</Text>
                              <Text style={styles.dialogText}>Kira Maliyeti:   </Text>
                              <Text style={styles.dialogText}>Elektrik Maliyeti:  </Text>
                            
                             
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
        backgroundColor:'white',
        
    },
  
    item:{ 
        flex:1,
        flexDirection: 'column',
         
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
        padding:10
        
        
    },
    image:{
        width: 50,
        height: 50,
        borderRadius: 25,
        marginHorizontal: 10,
        
        
    },
    title:{
        color:'#1c3faa',
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
    dialogText:{
        color:'#1c3faa',
        fontSize:15,
        marginVertical:10,
        fontWeight:'bold'
    },
})

