import React, { Component } from 'react'
import { Text, View ,Dimensions} from 'react-native'
import {
    LineChart
  } from "react-native-chart-kit";
import { TouchableOpacity } from 'react-native-gesture-handler';




export default class Uretim extends Component {
  
    
    render() {
        
        const data={
            labels:["Pazartesi","Salı","Çarşamba","Perşembe","Cuma"],
            datasets: [
                {
                  data: [
                    0,0.5,1,1,0.5,0.5
                
                  ]
                }
            ]
        }
        const dataAy={
            labels:["Ocak","Şubat","Mart","Nisan","Mayıs"],
            datasets: [
                {
                  data: [
                    0,0.5,1,1,0.5,0.5
                
                  ]
                }
            ]
        }
        const dataYil={
            labels:["2015","2016","2017","2018","2019"],
            datasets: [
                {
                  data: [
                    0,0.5,1,1,0.5,0.5
                
                  ]
                }
            ]
        }
        var deger=data
        const ay = () => {
            deger=dataYil
        }
        const gun = () => {
            deger=data
        }
            return (
                
                    <View style={{flex:1,alignItems:'center'}}>
                        <TouchableOpacity onPress={
                          ay
                        }><Text>Aylık</Text></TouchableOpacity>
                        <TouchableOpacity onPress={
                          gun
                        }><Text>Günlük</Text></TouchableOpacity>
                        <View style={{marginTop:10,marginHorizontal:5}}>
                            <LineChart
                                    
                                    data={deger}
                                    width={350} 
                                    height={300}
                                
                                    yAxisInterval={1} // optional, defaults to 1
                                    chartConfig={{
                                    backgroundColor: "#e26a00",
                                    backgroundGradientFrom: "#fb8c00",
                                    backgroundGradientTo: "#ffa726",
                                    decimalPlaces: 2, // optional, defaults to 2dp
                                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                    labelColor: (opacity = 1) => `white`,
                                    style: {
                                        borderRadius: 16
                                    },
                                    propsForDots: {
                                        r: "6",
                                        strokeWidth: "2",
                                        stroke: "#ffa726"
                                    }
                                    }}
                                    bezier
                                    style={{
                                    marginVertical: 8,
                                    borderRadius: 16
                                    }}
                                />
                        </View>
            </View>
        )
    }
}
