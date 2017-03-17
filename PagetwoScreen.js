

import React, { Component } from 'react';
import { ScrollView, Text, Image, View, StyleSheet } from 'react-native';
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
export default class PagetwoScreen extends React.Component {
  static navigationOptions = {
    title: 'About Udhayam-17',
  };
  render() {
      const { navigate } = this.props.navigation;
    return (

      <Container>
                  <ScrollView>
                   <Content>
                     <Card style={{ backgroundColor: '#000'}} >
                        {/* <CardItem>
                            <Left>
                                <Thumbnail source={images.launch} />
                                <Body>
                                    <Text>NativeBase</Text>
                                    <Text note>GeekyAnts</Text>
                                </Body>
                            </Left>
                          </CardItem> */}
                          <CardItem cardBody style={{ backgroundColor: '#000'}}>
                              <Image style={{ backgroundColor: '#000'}} source={images.udhayam} style={{width: 300, resizeMode: 'stretch'}} />
                          </CardItem>
                          <CardItem content>
                              <Text>Wait a minute. Wait a minute, Doc. Uhhh...
                              Are you telling me that you built a time machine... out of a DeLorean?!
                              Whoa. This is heavy.</Text>
                          </CardItem>
                          <CardItem>
                              <Left>
                                  <Button transparent>
                                      <Icon active name="thumbs-up" />
                                      <Text>12 Likes</Text>
                                  </Button>
                              </Left>
                            <Body>
                                <Button transparent>
                                    <Icon active name="chatbubbles" />
                                    <Text>4 Comments</Text>
                                </Button>
                            </Body>
                            <Right>
                                <Text>11h ago</Text>
                            </Right>
                        </CardItem>
                   </Card>
               {/* <Card >
                  <CardItem content>
                      <View>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Mrs.Indu Murugesan
                        </Text>
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Vice Chairperson
                        </Text>
                          <Text style={{fontSize: 15}}>
                            Let me begin by extending my greetings to all the aspirants to this prestigious Institution. To establish a college of repute was a dream of mine for a long time as I am committed to the cause of education. KIT-Kalaignarkarunanidhi Institute of Technology is dedicated to the cause of excellence in education. We place the student community at the centre and strive to instill confidence in them to face challenges of the contemporary globalized world. We are equally committed to the implementation of innovative, placement-oriented academic programmes and courses giving them a truly professional experience.
Young friends, I am confident that the ambience of this Institution will fulfil your long cherished dream of acquiring excellence in the field of higher education by providing the best infrastructure and training to achieve your career goals and ambitions.
                          </Text>
                      </View>
                    </CardItem>

             </Card> */}
             {/* <Card >


                  <CardItem content>
                    <View>
                      <Text style={{fontSize: 18, fontWeight: 'bold'}}>Dr.A.Vidhya Gokul,M.B.B.S,D.G.O.
                      </Text>
                      <Text style={{fontSize: 15, fontWeight: 'bold'}}>Managing Trustee
                      </Text>
                        <Text style={{fontSize: 15}}>
                          Let me begin by extending my greetings to all the aspirants to this prestigious Institution. To establish a college of repute was a dream of mine for a long time as I am committed to the cause of education. KIT-Kalaignarkarunanidhi Institute of Technology is dedicated to the cause of excellence in education. We place the student community at the centre and strive to instill confidence in them to face challenges of the contemporary globalized world. We are equally committed to the implementation of innovative, placement-oriented academic programmes and courses giving them a truly professional experience.
Young friends, I am confident that the ambience of this Institution will fulfil your long cherished dream of acquiring excellence in the field of higher education by providing the best infrastructure and training to achieve your career goals and ambitions.
                        </Text>
                    </View>
                  </CardItem>

           </Card> */}


                   </Content>
                 </ScrollView>
                 <Footer style={{backgroundColor: '#f00'}} >
                     <FooterTab style={{backgroundColor: '#f00'}} >
                        <Button onPress={() => navigate('Pagetwo')} >
                          <Text style={{color: '#fff', fontWeight: 'bold'}} >About</Text>
                          </Button>
                          <Button onPress={() => navigate('Pagethree')}>
                            <Text style={{color: '#fff', fontWeight: 'bold'}}>Events</Text>
                          </Button>
                          <Button >
                            <Text style={{color: '#fff', fontWeight: 'bold'}}>Register</Text>
                          </Button>
                          <Button>
                            <Text style={{color: '#fff', fontWeight: 'bold'}}>Contact</Text>
                          </Button>
                        </FooterTab>
                      </Footer>
               </Container>

    );
  }
}
