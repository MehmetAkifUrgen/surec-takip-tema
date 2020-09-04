import React, { Component } from 'react'
import { Text, View , FlatList,TouchableOpacity,Image,StyleSheet,StatusBar} from 'react-native'
import { color } from 'react-native-reanimated';
import PropTypes from 'prop-types';

  
   

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
                  "path" : "UrunAgacları"
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
                    push(item.path);
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
                <StatusBar backgroundColor='white' translucent={true} showHideTransition="slide" barStyle="dark-content" ></StatusBar>
                <FlatList
                    numColumns={3}
                    data={this.state.DATA}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f1f5f8'
    },
    item:{ 
        width:'33%',
        height:'50%',
        alignItems:'center',
        marginTop:'15%',  
    },
    image:{
        width:100,
        height:100
    },
    title:{
        fontSize:16
    }
})