import React, { Component } from 'react'
import { Text, View , FlatList,StyleSheet,TouchableOpacity, StatusBar} from 'react-native'
import Tezgahlar from './Tezgahlar';
import Dialog, { SlideAnimation, DialogContent ,DialogTitle} from 'react-native-popup-dialog';

var Yeni = new Tezgahlar();

export default class Operasyonlar extends Component {
    state={
        DATA:Yeni.state.DATA,
        visible:false,
        tezgah:"",
        operasyon:"",
        aciklama:""
    }
    componentWillUnmount(){
        this.state.visible=false
    }
    
    renderItem = ({ item}) => {
        
        const { navigate , push, goBack} = this.props.navigation
        
        return(
            <TouchableOpacity style={styles.item}  onPress={()=>{
                this.setState({visible:true,tezgah:item.Tezgah,operasyon:item.Islem,aciklama:item.Aciklama})
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
        const { navigate , push, goBack,getParam} = this.props.navigation
       // const tezgah=getParam("tezgah")
        return (
            <View style={styles.main}>
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
                              <Text style={styles.dialogText}>Operasyon Adı:   {this.state.operasyon}</Text>
                              <Text style={styles.dialogText}>Açıklama:   {this.state.aciklama}</Text>
                             
                          </View>
                      </DialogContent>

                </Dialog>
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
    dialog:{
        
        justifyContent:'center',
        backgroundColor:'white',
        padding:10
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

    dialogText:{
        color:'#1c3faa',
        fontSize:15,
        marginVertical:10,
        fontWeight:'bold'
    },
   
})

