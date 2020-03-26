import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

class Example extends React.Component
{
  static navigationOptions=
  { drawerIcon :(
  <Image
    style={{width: 30, height: 30}}
    source={require('../image/logout-24.png')}
  />
  )}
  render()
  {

    return(
      <View style={styles.container}>
        <Text>Example Screen !</Text>
      </View>
    );
  
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Example;

