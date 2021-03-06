import React, { Component } from 'react'
import { Text, View , FlatList,TouchableOpacity,Image,StyleSheet,StatusBar, SafeAreaView} from 'react-native'


export default class HomePage extends Component {
    

    state={
        DATA : [
            {
                "id": '1',
                "title": 'Müşteriler',
                "src":require('./assets/homeAssets/1.png'),
                "path" : "Musteriler"
              },{
                "id": '2',
                "title": 'Sipariş Süreçleri',
                "src":require('./assets/homeAssets/2.png'),
                "path" : "SiparisSurecleri"
              },{
                    "id": '3',
                    "title": 'Siparişler',
                    "src":require('./assets/homeAssets/3.png'),
                    "path" : "Siparisler"
              }, {
                  "id": '4',
                  "title": 'Personeller',
                  "src":require('./assets/homeAssets/4.png'),
                  "path" : "Personeller"
              },{
                  "id": '5',
                  "title": 'İstatistikler',
                  "src":require('./assets/homeAssets/5.png'),
                  "path" : "Istatistikler"
              },{
                  "id": '6',
                  "title": 'Projeler',
                  "src":require('./assets/homeAssets/6.png'),
                  "path" : "Projeler"
              },{
                  "id": '7',
                  "title": 'İşçiler',
                  "src":require('./assets/homeAssets/7.png'),
                  "path" : "Isciler"
              },{
                  "id": '8',
                  "title": 'Kesim Listeleri',
                  "src":require('./assets/homeAssets/8.png'),
                  "path" : "KesimListeleri"
              },{
                  "id": '9',
                  "title": 'İş Emirleri',
                  "src":require('./assets/homeAssets/9.png'),
                  "path" : "IsEmirleri"
              },{
                  "id": '10',
                  "title": 'Ürün Ağaçları',
                  "src":require('./assets/homeAssets/10.png'),
                  "path" : "UrunAgaclari"
              },{
                  "id": '11',
                  "title": 'Tezgahlar',
                  "src":require('./assets/homeAssets/11.png'),
                  "path" : "Tezgahlar"
              },{
                  "id": '12',
                  "title": 'Operasyonlar',
                  "src":require('./assets/homeAssets/12.png'),
                  "path" : "Operasyonlar"
              },
          ],
          
      };

      renderItem = ({ item}) => {
        const { navigate , push, goBack} = this.props.navigation
        return(
            <TouchableOpacity style={styles.item} onPress={
                () => {
                    navigate(item.path);
                }
            } >
                
                <Image style={styles.image} source={item.src}></Image>
                <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
    
        );
        
        
       };

    render() {
        
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#1c3faa' translucent={true} showHideTransition="slide" barStyle="light-content" ></StatusBar>
                <SafeAreaView style={styles.header}>
                    <Text style={{fontSize:18,color:'white',fontWeight:'bold',marginTop:30}}>PRODROM ICT</Text>
                    
                    
                </SafeAreaView>
                <Image style={{flexDirection:'column', width:30,height:30,zIndex:100,justifyContent:'center',alignItems:'center',marginTop:10,marginLeft:5}} source={require('./assets/right.png')}></Image>
            <View style={styles.list}>
                
                <FlatList
                    contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
                    numColumns={3}
                    data={this.state.DATA}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
            </View>
        )
    }
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    item:{ 
        width:100,
        alignItems:'center',
        marginVertical:'5%', 
        marginHorizontal:8,
        backgroundColor:'white',
        borderRadius:5,
        shadowColor: "white",
        shadowOffset: {
	        width: 0,
	        height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 8,
        
    },
    image:{
        width:85,
        height:85,
        
    },
    title:{
        
        fontSize:15,
        fontWeight:'bold',
        color:'#1c3faa',
        textAlign:'center'
    },
    list:{
        flex:7,
        alignItems:'center',
        backgroundColor:'white',
        marginBottom:30
        
      
    },
    header:{
        height:'10%',backgroundColor:'#1c3faa', justifyContent:'center',alignItems:'center',borderBottomLeftRadius:50,borderBottomRightRadius:60
    }
})