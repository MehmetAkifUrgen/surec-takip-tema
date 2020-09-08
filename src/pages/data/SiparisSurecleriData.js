import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class SiparisSurecleriData extends Component {
    state={
        DATA : [
            {
                "id": '1',
                "title": 'Müşteriler Listesi',   
                "src":require('../assets/SiparisSurecleri/1.png'),           
              },{
                "id": '2',
                "title": 'Pazarlama-Satış',  
                "src":require('../assets/SiparisSurecleri/2.png'), 
              },{
                    "id": '3',
                    "title": 'Projelendirme Birimi',
                    "src":require('../assets/SiparisSurecleri/3.png'), 
              }, {
                  "id": '4',
                  "title": 'Üretim Planlama Birimi',
                  "src":require('../assets/SiparisSurecleri/4.png'), 
              },
              {
                "id": '5',
                "title": 'Satın Alma Planlama Birimi',
                "src":require('../assets/SiparisSurecleri/5.png'), 
            },
            {
                "id": '6',
                "title": 'Transfer Edilen',
                "src":require('../assets/SiparisSurecleri/6.png'), 
            },
          ],
    }
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
