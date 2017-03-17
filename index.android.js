

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {  AppRegistry } from 'react-native';
import { ScrollView, Text, Image, View, StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button , Body, Footer, Icon, Title} from 'native-base';
import PagetwoScreen from './PagetwoScreen.js';
import PagethreeScreen from './PagethreeScreen.js';
// import PagethreeScreen from './PagethreeScreen.js';
// import ItemScreen from './ItemScreen.js';
const images = {
  background: require('./BG.png'),
  launch: require('./logo.png'),
  launchs: require('./logo2.png')

}
const styles = {
imageBg: {
  flex: 1,
  width: null,
  height: null,
}

}

class App extends React.Component {
  static navigationOptions = {
  //   title: 'NaturesBowl',
  header: ({ state, setParams }) => ({
    visible: false,
     headerMode: 'none'
  })
  };
  render () {
    const { navigate } = this.props.navigation;

    return (


      <ScrollView>
      <Container>

        <Image source={images.background} style={styles.imageBg}>

                   <Content>
                     <Body>
                       <Image source={images.launchs} style={{  marginTop: 50, height: 125, width: 125 ,  resizeMode: 'cover', alignItems: 'center', justifyContent: 'center', borderRadius: 40 }} />
                       <Image source={images.launch} style={{   height: 100, width: 250 ,  resizeMode: 'cover', alignItems: 'center', justifyContent: 'center', borderRadius: 50, }} />
                       <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white', fontFamily: 'italic', borderRadius: 50 }}> KIT- Udhayam '17</Text>
                     </Body>
{/* // onPress={} () => navigate('Pagetwo') */}
                       <Button onPress={() => navigate('Pagetwo')} primary title="Register" full="submit" style={{backgroundColor: '#f00', marginLeft: 30, marginRight: 30, marginTop: 50, borderRadius: 10, alignItems: 'center' }}>
                         <Text style={{fontWeight: 'bold', color: '#fff'}}>Click to know more!</Text>
                       </Button>
                   </Content>

                 </Image>

               </Container>
                        </ScrollView>
    )
  }
};

const Nav = StackNavigator({
  Home: {screen: App},
  Pagetwo: { screen: PagetwoScreen },
  Pagethree: { screen: PagethreeScreen}
  // Pagethree: { screen: PagethreeScreen }


});
AppRegistry.registerComponent('kitfest', () => Nav);
