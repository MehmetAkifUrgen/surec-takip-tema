import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class PersonelData extends Component {
    state={
        DATA : [
            {
                "id": '1',
                "title": 'Duha Yıldırım',
                "telefon" : "123456789",
                "email":"afdafsdf@mail.com"
               
              
              },{
                "id": '2',
                "title": 'Yusuf Sürmeli',  
                "telefon" : "123456789",
                "email":"afdafsdf@mail.com"
                
              },{
                    "id": '3',
                    "title": 'Mehmet Akif Ürgen',
                    "telefon" : "123456789",
                    "email":"afdafsdf@mail.com"
                    
                    
              }, {
                  "id": '4',
                  "title": 'GÖKHAN',
                  "telefon" : "123456789",
                  "email":"afdafsdf@mail.com"
                 
                 
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
