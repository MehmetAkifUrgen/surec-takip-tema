import React, { Component } from 'react'
import { Text, View , FlatList,StyleSheet,TouchableOpacity,Image, StatusBar} from 'react-native'
import Dialog, { SlideAnimation, DialogContent ,DialogTitle} from 'react-native-popup-dialog';




export default class Tezgahlar extends Component {
    componentWillUnmount(){
        this.state.visible=false
    }
    state={
        DATA:[
            {
                "id":"1",
                "Tezgah":"1.İstasyon Kesim",
                "Kira":"2",
                "Fiyat":"14",
                "Aciklama" :"Kesim Tezgahı",
                "Elektrik":"3",
                "Islem":"Kesim İslemi"
            },
            {
                "id":"2",
                "Tezgah":"2.İstasyon Cumbala",
                "Kira":"2",
                "Fiyat":"14",
                "Aciklama" :"Cumbala Tezgahı",
                "Elektrik":"3",
                "Islem":"Cumbala İslemi"
            },
            {
                "id":"3",
                "Tezgah":"3.İstasyon Delik",
                "Kira":"2",
                "Fiyat":"14",
                "Aciklama" :"Delme Tezgahı",
                "Elektrik":"3",
                "Islem":"Delme İslemi"
            },
            {
                "id":"4",
                "Tezgah":"4.İstasyon CNC",
                "Kira":"2",
                "Fiyat":"14",
                "Aciklama" :"CNC Tezgahı",
                "Elektrik":"3",
                "Islem":"CNC İslemi"
            },
            {
                "id":"5",
                "Tezgah":"5.İstasyon Zımpara",
                "Kira":"2",
                "Fiyat":"14",
                "Aciklama" :"Zımpara Tezgahı",
                "Elektrik":"3",
                "Islem":"Zımpara İslemi"
            }
        ],
        visible:false,
        tezgah:"",
        kira:"",
        fiyat:"",
        aciklama:"",
        elektrik:""
    }

    renderItem = ({ item}) => {
        
        
       
        return(
            <TouchableOpacity style={styles.item} onPress={
                ()=>{
                    this.setState({visible:true,tezgah:item.Tezgah,kira:item.Kira,fiyat:item.Fiyat,aciklama:item.Aciklama,elektrik:item.Elektrik})
                }
            } >               
                
                <Text style={styles.title}> {item.Tezgah}</Text>
                <View style={styles.tezgahStyle}>
                    <Text style={{color:'orange'}}>Kira :{item.Kira} </Text>
                    <Text style={{color:'green'}}>Fiyat: {item.Fiyat}</Text>
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
                              <Text style={styles.dialogText}>Tezgah Adı:   {this.state.tezgah}</Text>
                              <Text style={styles.dialogText}>Açıklama:   {this.state.aciklama}</Text>
                              <Text style={styles.dialogText}>Fiyat:   {this.state.fiyat}</Text>
                              <Text style={styles.dialogText}>Kira Maliyeti:   {this.state.kira}</Text>
                              <Text style={styles.dialogText}>Elektrik Maliyeti:  {this.state.elektrik}</Text>
                            
                             
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
        flexDirection: 'row',
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
        color:'tomato',
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
        
    },
    dialogText:{
        color:'#1c3faa',
        fontSize:15,
        marginVertical:10,
        fontWeight:'bold'
    },
})

