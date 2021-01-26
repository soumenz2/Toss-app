/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';
import {
  

  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,

} from 'react-native';
import snackbar from 'react-native-snackbar';
import Toast from 'react-native-simple-toast';
import { showMessage, hideMessage } from "react-native-flash-message";

import Toss from "./assets/toss.png"
import Head from "./assets/head.png"
import Tail from "./assets/tail.png"

const App=() => {
  //const uriToss=Toss;
  const[tossResult,setTossResult]=useState(Head);
  var snackResult
  

  const doToss=()=>{
    const r=Math.floor(Math.random()*2)
    r==0?setTossResult(Tail):setTossResult(Head)
    snackResult=r==0?true:false
  
    snackbar.show(
      {
        text:snackResult?'result is : Tail':'result is : Head',
        textColor:'red',
        
        duration:snackbar.LENGTH_SHORT,
      }
    )
  }
  const randomResult=()=>{
    setTossResult(Toss)
    setTimeout(()=>{doToss()

    },1000);
  }
return(
  <ScrollView style={{flex:1,backgroundColor:'rgb(204, 255, 155)'}}>
    <View style={{alignContent:'center',alignSelf:'center',marginTop:30,height:250,}}>
      {(tossResult==Toss?<View style={{
        backgroundColor:'#0f0',
        height:80,width:80,borderRadius:50,
      }}>
          <ActivityIndicator size='large' color="#f11"/></View>:<Image source={tossResult}/>)}
      
    </View>
    <View style={{alignContent:'center',alignSelf:'center', backgroundColor:'#845',marginTop:40,borderRadius:50}}>
      <TouchableOpacity 
       onPress={()=>randomResult()}>
        <Image style={{resizeMode:'contain',height:80,width:80}} source={Toss}/>
      </TouchableOpacity>
    </View>
  </ScrollView>
);
};


 

export default App;
