import React, { Component } from 'react'
import { Text, View , FlatList,TouchableOpacity,Image,StyleSheet,StatusBar} from 'react-native'

  
   

export default class HomePage extends Component {

    state={
        DATA : [
            {
                "id": '1',
                "title": 'Müşteriler',
                "src":require('./assets/homeAssets/1.png')
              },{
                "id": '2',
                "title": 'Sipariş Süreçleri',
                "src":require('./assets/homeAssets/2.png')
              },{
                    "id": '3',
                    "title": 'Siparişler',
                    "src":require('./assets/homeAssets/3.png')
              }, {
                  "id": '4',
                  "title": 'Personeller',
                  "src":require('./assets/homeAssets/4.png')
              },{
                  "id": '5',
                  "title": 'İstatistikler',
                  "src":require('./assets/homeAssets/5.png')
              },{
                  "id": '6',
                  "title": 'Projeler',
                  "src":require('./assets/homeAssets/6.png')
              },{
                  "id": '7',
                  "title": 'İşçiler',
                  "src":require('./assets/homeAssets/7.png')
              },{
                  "id": '8',
                  "title": 'Kesim Listeleri',
                  "src":require('./assets/homeAssets/8.png')
              },{
                  "id": '9',
                  "title": 'İş Emirleri',
                  "src":require('./assets/homeAssets/9.png')
              },{
                  "id": '10',
                  "title": 'Ürün Ağaçları',
                  "src":require('./assets/homeAssets/10.png')
              },{
                  "id": '11',
                  "title": 'Tezgahlar',
                  "src":require('./assets/homeAssets/11.png')
              },{
                  "id": '12',
                  "title": 'Operasyonlar',
                  "src":require('./assets/homeAssets/12.png')
              },
          ],
          
      };

      renderItem = ({ item}) => {
       
        return(
            <TouchableOpacity style={styles.item}>
                
                <Image style={styles.image} source={item.src}></Image>
                <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
    
        );
        
        
       };

    render() {
        
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='white'></StatusBar>
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
        backgroundColor:'white'
    },
    item:{

        width:'33%',
        height:'25%',
        alignItems:'center',
        marginTop:'10%'
        
    },
    image:{
        width:100,
        height:100
    },
    title:{
        fontSize:16
    }
})