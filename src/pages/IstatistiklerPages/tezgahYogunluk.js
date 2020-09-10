import React, { Component } from 'react'
import { Text, View,StyleSheet, Dimensions } from 'react-native'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

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
    barChart:{
        backgroundColor:'white'
    }
})