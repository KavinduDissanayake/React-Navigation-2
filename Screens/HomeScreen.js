import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {Header,Left,Right,Icon} from 'native-base';

class HomeScreen extends React.Component
{ static navigationOptions=
  { drawerIcon :(
  <Image
    style={{width: 30, height: 30}}
    source={require('../image/home-5-24.png')}
  />
  )}
  render()
  {
   
    return(
      <View style={styles.container}>

      <Header style={{backgroundColor:'#1AA910',}}>
      </Header>

      <View>
      
           <Icon  name="menu" onPress={()=> this.props.navigation.openDrawer()}/>                            

      </View>
            <View style={{flex :1,alignItems:"center",justifyContent:"center"}}>

                              <Text>Home Screen !</Text>
            </View>
  
     </View>
    );
  
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   // alignItems: 'center',
   // justifyContent: 'center',
  },
});

export default HomeScreen;

