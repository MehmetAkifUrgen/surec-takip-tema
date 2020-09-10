import React, { Component } from 'react'
import { Text, View,StyleSheet, TouchableOpacity } from 'react-native'
import {
    PieChart
  } from "react-native-chart-kit";
  import { ProgressCircle } from 'react-native-svg-charts'





export default class TezgahYogunluk extends Component {

    
    render() {
        const data = [
            {
              name: "Beklemedeki",
              population: 6,
              color: "pink",
              legendFontColor: "black",
              legendFontSize: 15
            },
            {
              name: "Devam Edilen",
              population: 8,
              color: "orange",
              legendFontColor: "black",
              legendFontSize: 15
            },
            {
              name: "Tamamlanan",
              population: 10,
              color: "tomato",
              legendFontColor: "black",
              legendFontSize: 15
            },
            
          ];
          
        return (
            <View style={styles.container}>
                <PieChart style={styles.pieChart}
                    data={data}
                    width={350}
                    height={200}
                    chartConfig={{
                        
                     
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`
                    }}
                    accessor="population"
                    backgroundColor="transparent"
                   
                    
                />
                
                <View style={styles.list}>
                    <TouchableOpacity style={styles.item} >               
                    
                    <View>
                        <Text> 1. İstasyon</Text>
                        <Text> 1. İstasyon</Text>
                        <Text> 1. İstasyon</Text>
                    </View>
                        <View style={{flex:1,justifyContent:'flex-end',flexDirection:'row',marginRight:10}}>
                            <ProgressCircle style={styles.circle} progress={0.84} progressColor={'tomato'} >
                            <Text style={{textAlign:'center',marginTop:20}}> %84</Text>
                        </ProgressCircle>
                        </View>
                    </TouchableOpacity>
                    
                </View>

                <View style={styles.list}>
                    <TouchableOpacity style={styles.item} >               
                    
                    <View>
                        <Text> 1. İstasyon</Text>
                        <Text> 1. İstasyon</Text>
                        <Text> 1. İstasyon</Text>
                    </View>
                        <View style={{flex:1,justifyContent:'flex-end',flexDirection:'row',marginRight:10}}>
                            <ProgressCircle style={styles.circle} progress={0.56} progressColor={'tomato'} >
                            <Text style={{textAlign:'center',marginTop:20}}> %56</Text>
                        </ProgressCircle>
                        </View>
                    </TouchableOpacity>
                    
                </View>

                <View style={styles.list}>
                    <TouchableOpacity style={styles.item} >               
                    
                    <View>
                        <Text> 1. İstasyon</Text>
                        <Text> 1. İstasyon</Text>
                        <Text> 1. İstasyon</Text>
                    </View>
                        <View style={{flex:1,justifyContent:'flex-end',flexDirection:'row',marginRight:10}}>
                            <ProgressCircle style={styles.circle} progress={1} progressColor={'tomato'} >
                            <Text style={{textAlign:'center',marginTop:20}}> %100</Text>
                        </ProgressCircle>
                        </View>
                    </TouchableOpacity>
                    
                </View>

            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'white'
        
    },
    pieChart:{
        marginTop:'5%',
        backgroundColor:'white',
        shadowColor: "white",
        shadowOffset: {
	        width: 0,
	        height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 16,
        borderRadius:25
    },
    item:{ 
        flex:1,
        flexDirection: 'row',
        marginTop:30,
        backgroundColor:'white'  ,
        borderRadius:10 ,
        padding:10,
       
        shadowColor: "white",
        shadowOffset: {
	        width: 0,
	        height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 12,
        
        
        
    },
    list:{
        
        flexDirection:'row',
        width:350
    },
    circle:{
         height: 60 , width:60,
    }
    
})