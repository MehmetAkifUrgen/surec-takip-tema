import React, { Component } from 'react';
import { View, Text,StyleSheet,TextInput,StatusBar,Image} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { TouchableOpacity } from 'react-native-gesture-handler';



export default class LoginPage extends Component { 
  change = () =>{
      value=false
  }
  render() {
    const { navigate , push, goBack} = this.props.navigation
    return (
    
      <View style={styles.container}>
         <StatusBar  backgroundColor= '#f1f5f8' barStyle="dark-content"></StatusBar>
         <Image style={styles.image} source={require("./assets/logo.png")}></Image>
         <View style={styles.login}>
            <TextInput placeholder="Kullanıcı Adı" textContentType="username" inlineImageLeft="user" inlineImagePadding={10} style={styles.id}></TextInput>
            <TextInput placeholder="Parola" autoCompleteType={"password"} textContentType={"password"} inlineImageLeft="password" inlineImagePadding={10} style={styles.password}></TextInput>
            <View style={styles.checbox}>
                <CheckBox>
                    
               </CheckBox>
               <Text>Fcuk Man</Text>
             
            </View>
         </View>
         <TouchableOpacity style={styles.buton}  onPress={
             ()=>{
                 navigate('HomePage');
             }
         }> 
            <Text style={{textAlign:'center', fontSize:18}}>Giriş</Text>
         </TouchableOpacity>
        
      </View>
    );
  }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        
        backgroundColor:'#1c3faa'
    },
    id:{
        
        width:'80%',
        height:50,
        backgroundColor:'white',
        marginBottom:'5%', borderRadius:5
    },
    password:{
        width:'80%',
        height:50,
        backgroundColor:'white',
        borderRadius:5
    },
    image:{
        width:'80%',
        height:'20%',
        resizeMode:'stretch',
        borderRadius:5,
        marginTop:'20%'
    },
    login:{
        
        width:'80%',
        height:'25%',
        alignItems:'center',
        marginTop:'20%',
        backgroundColor:'#f1f5f8',
        borderRadius:20,
        justifyContent:'center',
        flexDirection:'column',
        marginBottom:50
    },
    checbox:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    buton:{
       width:80,
       height:40,
       backgroundColor:'white',
       borderRadius:25,
       justifyContent:'center'
    }
});