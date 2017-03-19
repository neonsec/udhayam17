

import React, { Component } from 'react';
import {Linking, ScrollView, Text, Image, View, StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button , Body, Footer, FooterTab, Card, CardItem, Right, Left, Thumbnail, Icon} from 'native-base';

const images = {
  udhayam: require('./logo.png'),
  launch: require('./logo2.png'),
  // college: require('./pic1.jpg'),
  // chairman: require('./chair.jpg'),
  // founder: require('./found.jpg')

}
const styles = {
imageBg: {
  flex: 1,
  width: null,
  height: null,
}

}
// const cards = [
//     {
//         text: 'Card One',
//         name: 'One',
//         // image: require('./img/s
// ];
export default class PagefiveScreen extends React.Component {
  static navigationOptions = {
    title: 'Contact Udhayam-17',
    header: ({ state, setParams }) => ({
      header: {
        visible: false
      },
      style: {
        backgroundColor: '#d00',

      },
      titleStyle: {
        color: '#fff'
      }
    })
  };
  render() {
      const { navigate } = this.props.navigation;
    return (

      <Container>
                  <ScrollView>
                   <Content>

                   <Card style={{ backgroundColor: '#000'}} >

                        <CardItem cardBody style={{ backgroundColor: '#000'}}>

                        </CardItem>
                        <CardItem content style={{backgroundColor: '#d00'}}>

                          <Button transparent onPress={()=>{
                            return(
                              Linking.openURL('tel:+917845934960')
                            )
                          }}>
                          <Text style={{color: '#fff', fontWeight: 'bold'}}> SUDHAKAR. M +917845934960</Text>
                        </Button>
                        </CardItem>
                        <CardItem></CardItem>
                        <CardItem content style={{backgroundColor: '#d00'}}>


                          <Button transparent onPress={()=> {
                            return (
                              Linking.openURL('tel: +919894239802')
                            )
                          }}><Text style={{color: '#fff', fontWeight: 'bold'}}> MR. DEEPAK. M +919894239802</Text>
                        </Button>
                        </CardItem>
                        <CardItem></CardItem>
                        <CardItem content style={{backgroundColor: '#d00'}}>
                          <Button transparent onPress={()=> {
                            return (
                              Linking.openURL('http://kitinfonest.com')
                            )
                          }}><Text style={{color: '#fff', fontWeight: 'bold'}}> Developed by InfoNest</Text>
                        </Button>

                        </CardItem>

                 </Card>



                   </Content>
                 </ScrollView>
                 <Footer style={{backgroundColor: '#d00'}} >
                     <FooterTab style={{backgroundColor: '#d00'}} >
                        <Button onPress={() => navigate('Pagetwo')} >
                          <Text style={{color: '#fff', fontWeight: 'bold'}} >About</Text>
                          </Button>
                          <Button onPress={() => navigate('Pagethree')}>
                            <Text style={{color: '#fff', fontWeight: 'bold'}}>Events</Text>
                          </Button>
                          <Button onPress={() => navigate('Pagefour')}>
                            <Text style={{color: '#fff', fontWeight: 'bold'}}>Register</Text>
                          </Button>
                          <Button onPress={() => navigate('Pagefive')}>
                            <Text style={{color: '#fff', fontWeight: 'bold'}}>Contact</Text>
                          </Button>
                        </FooterTab>
                      </Footer>
               </Container>

    );
  }
}
