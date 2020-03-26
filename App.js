import React, { Component } from 'react';
import { StyleSheet, Text, View,SafeAreaView,Image,TouchableOpacity, Dimensions } from 'react-native';
import HomeScreen from './Screens/HomeScreen';

import Example from './Screens/Example';
import Test from './Screens/Test';

import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer' ;
import {createAppContainer} from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';



const {width} =Dimensions.get('window');

class App extends React.Component
{
    render(){

      const AppNavigator = createAppContainer(AppDrawerNavigator);
      return (
        <AppNavigator/>
    );
    }
}
const CustomDrawerComponent=(props) =>(
  
  <SafeAreaView style={{ flex:1}}>
  
    <View style ={{height:200,backgroundColor:'white',alignItems:"center",justifyContent:"center"}}>
    <Image
          style={{width: 120, height: 120,borderRadius: 60,}}
          source={require('./image/profileIcon.jpg')}
    />
        <Text>Kaviya</Text>     
     </View>



  <DrawerItems {...props}/>



  </SafeAreaView>

);
export default  App;


const AppDrawerNavigator =createDrawerNavigator({
  Home :HomeScreen , 
  Example:Example,
  Test:Test,
  
},{
  contentComponent:CustomDrawerComponent,
  drawerWidth :width *2/3,
  contentOptions:{
    activeTintColor: "#1AA910"
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  text: {
      color: "blue",
      fontSize: 20,
      fontWeight: "500"
  }
});