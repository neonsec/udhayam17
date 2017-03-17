

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
                     <Card style={{ backgroundColor: '#d00'}} >
                        {/* <CardItem>
                            <Left>
                                <Thumbnail source={images.launch} />
                                    <Text note>GeekyAnts</Text>
                                </Body>
                            </Left>
                          </CardItem> */}
                          <CardItem cardBody style={{ backgroundColor: '#d00'}}>
                              <Image style={{ backgroundColor: '#d00'}} source={images.udhayam} style={{width: '100%', resizeMode: 'stretch'}} />
                          </CardItem>
                          <CardItem content style={{backgroundColor: '#d00'}}>
                              <Text style={{color: '#fff', fontWeight: 'bold'}}>Udhayam'17, a national level techno-cultural  fest organised by KIT-KalaignarKarunanidhi Institute of Technology, Coimbatore which is going to be one of its kind piquant celebration of young talent and technology.
This one day fest on 17th March 2017 will pitch shot temperatures in the town with all the sass, jazz and zing. This year Udhayam'17 is all about 'Rising up' to achieve the cloud of success.   </Text>
                          </CardItem>

                   </Card>
                   <Card style={{ backgroundColor: '#000'}} >
                      {/* <CardItem>
                          <Left>
                              <Thumbnail source={images.launch} />
                                  <Text note>GeekyAnts</Text>
                              </Body>
                          </Left>
                        </CardItem> */}
                        <CardItem cardBody style={{ backgroundColor: '#000'}}>

                        </CardItem>
                        <CardItem content style={{backgroundColor: '#d00'}}>


                          <Text style={{color: '#fff', fontWeight: 'bold'}}> KIT-Kalaignarkarunanidhi Institute of Technology, one of the best Engineering College in Coimbatore, is located at a distance of 12 kilometers from Coimbatore Railway Station and 8 kilometers from Coimbatore Civil Aerodrome. Set in a calm and congenial locale, the college stands nestled in a spacious campus set in a vast area of 5 lakhs sq.ft with five storied buildings house classrooms, boratories, library, faculty rooms, conference halls, administrative and residential areas.  </Text>
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
                          Let me bimport React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Container, Icon, DeckSwiper, Card, CardItem, Left, Body, Thumbnail, Text } from 'native-base';

const cards = [
    {
        text: 'Card One',
        name: 'One'
    }
];

export default class PagetwoScreen extends Component {
    render() {
        return (
            <Container>
                <View>
                    <DeckSwiper
                      dataSource={cards}
                      renderItem={item =>
                          <Card style={{ elevation: 3 }}>
                              <CardItem>
                                  <Thumbnail source={item.image} />
                                  <Text>{item.text}</Text>
                                  <Text note>NativeBase</Text>
                              </CardItem>
                              <CardItem>
                                  <Image style={{ resizeMode: 'cover', width: null }} source={item.image} />
                              </CardItem>
                              <CardItem>
                                  <Icon name="ios-heart" style={{ color: '#ED4A6A' }} />
                                  <Text>{item.name}</Text>
                              </CardItem>
                          </Card>
                      }>
                    </DeckSwiper>
                </View>
            </Container>
        );
    }
}egin by extending my greetings to all the aspirants to this prestigious Institution. To establish a college of repute was a dream of mine for a long time as I am committed to the cause of education. KIT-Kalaignarkarunanidhi Institute of Technology is dedicated to the cause of excellence in education. We place the student community at the centre and strive to instill confidence in them to face challenges of the contemporary globalized world. We are equally committed to the implementation of innovative, placement-oriented academic programmes and courses giving them a truly professional experience.
Young friends, I am confident that the ambience of this Institution will fulfil your long cherished dream of acquiring excellence in the field of higher education by providing the best infrastructure and training to achieve your career goals and ambitions.
                        </Text>
                    </View>
                  </CardItem>

           </Card> */}


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
