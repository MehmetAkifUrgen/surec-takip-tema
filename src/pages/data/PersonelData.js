import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class PersonelData extends Component {
    state={
        DATA : [
            {
                "id": '1',
                "title": 'Duha Yıldırım',
               
              
              },{
                "id": '2',
                "title": 'Yusuf Sürmeli',  
                
              },{
                    "id": '3',
                    "title": 'Mehmet Akif Ürgen',
                    
                    
              }, {
                  "id": '4',
                  "title": 'GÖKHAN',
                 
                 
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
