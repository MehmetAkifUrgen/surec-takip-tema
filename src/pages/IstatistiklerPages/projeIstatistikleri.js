import React, { Component } from 'react'
import { Text, View ,StyleSheet} from 'react-native'
import {
    LineChart
  } from "react-native-chart-kit";
import { TouchableOpacity } from 'react-native-gesture-handler';




export default class ProjeIstatistikleri extends Component {
  state={
    
    dataGun:{
      labels:["Pazartesi","Salı","Çarşamba","Perşembe","Cuma"],
      datasets: [
          {
            data: [
            1,0.5,0.5,1,1
          
            ]
          }
      ]
  },
  dataAy:{
    labels:["Ocak","Şubat","Mart","Nisan","Mayıs"],
    datasets: [
        {
          data: [
            0,0.5,1,1,0.5
        
          ]
        }
    ]
},
    dataYil:{
      labels:["2015","2016","2017","2018","2019"],
      datasets: [
          {
            data: [
              1,1,0,5,0.5,0.5
          
            ]
          }
      ]
    },
    data:{
      labels:["Pazartesi","Salı","Çarşamba","Perşembe","Cuma"],
      datasets: [
          {
            data: [
              0.5,0.5,1,1,0.5
            ]
          }
      ]
    },
    
  }
    
    render() {
        
            return (
                
                    <View style={styles.container}>
                      <View style={styles.zaman}>
                              <TouchableOpacity style={styles.zamanButton}  onPress={()=>{
                                      this.setState({
                                  
                                        data:this.state.dataAy
                                      })
                                }
                                  
                                }><Text style={styles.zamanText}>Aylık</Text></TouchableOpacity>
                                <TouchableOpacity  style={styles.zamanButton} onPress={()=>{
                                      this.setState({
                                  
                                        data:this.state.dataGun
                                      })
                                    }}><Text style={styles.zamanText}>Günlük</Text></TouchableOpacity>
                                    <TouchableOpacity  style={styles.zamanButton} onPress={()=>{
                                      this.setState({
                                  
                                        data:this.state.dataYil
                                      })
                                    }}><Text style={styles.zamanText}>Yıllık</Text></TouchableOpacity>
                      </View>
                        
                        <View style={{marginTop:10,marginHorizontal:5}}>
                            <LineChart
                                    
                                    data={this.state.data}
                                    width={350} 
                                    height={300}
                                
                                    yAxisInterval={1} // optional, defaults to 1
                                    chartConfig={{
                                    backgroundColor: "#d6a5a3",
                                    backgroundGradientFrom: "#d6a5a3",
                                    backgroundGradientTo: "#d6a5a3",
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
const styles=StyleSheet.create({
      container:{
        flex:1,alignItems:'center'
      },
      zaman:{
        flexDirection:'row',
        alignItems:'center',
        
      },
      zamanButton:{
      
        backgroundColor:'white',
        marginHorizontal:10,
        marginTop:20,
        borderRadius:10,
        width:50,
        shadowColor: "white",
        shadowOffset: {
	        width: 0,
	        height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 16,
        
      },
      zamanText:{
        textAlign:'center',
        fontSize:16,
        fontStyle:'italic',
        color:'blue'
      }
})