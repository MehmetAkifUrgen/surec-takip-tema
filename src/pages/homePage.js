import React, { Component } from 'react'
import { Text, View , FlatList,SafeAreaView,Image,StyleSheet} from 'react-native'

  
   

export default class HomePage extends Component {

    state={
        DATA : [
            {
                id: '1',
                title: 'Müşteriler',
              },{
                id: '2',
                title: 'Sipariş Süreçleri',
              },{
                id: '3',
                title: 'Siparişler',
              }, {
                  id: '4',
                  title: 'Personeller',
              },{
                  id: '5',
                  title: 'İstatistikler',
              },{
                  id: '6',
                  title: 'Projeler',
              },{
                  id: '7',
                  title: 'İşçiler',
              },{
                  id: '8',
                  title: 'Kesim Listeleri',
              },{
                  id: '9',
                  title: 'İş Emirleri',
              },{
                  id: '10',
                  title: 'Ürün Ağaçları',
              },{
                  id: '11',
                  title: 'Tezgahlar',
              },{
                  id: '12',
                  title: 'Operasyonlar',
              },
          ],
         
        
      };
      renderItem = ({ item}) => {
        
        return(
            <View style={styles.item}>
                
                <Image style={styles.image} source={require(`./assets/homeAssets/${2}.png`)}></Image>
                <Text style={styles.title}>{item.id}</Text>
            </View>
    
        );
        
        
       };

    render() {
        
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    numColumns={3}
                    data={this.state.DATA}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    item:{
        width:'33%',
        height:'100%'
    },
    image:{
        width:100,
        height:100
    },
    title:{
        fontSize:16
    }
})