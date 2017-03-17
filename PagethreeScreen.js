import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Container, Icon, DeckSwiper, Card, CardItem, Left, Body, Thumbnail, Text, Button, Right } from 'native-base';

const images = {
  logo: require('./logo.png'),
  launch: require('./logo2.png'),
}

export default class PagetwoScreen extends Component {
  static navigationOptions = {
    title: 'Events @ Udhayam-17',
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
        return (
            <Container>

                  <Card >
    <CardItem>
        <Left>

            <Body>
                <Text>Paperix</Text>
                <Text note>Paper Presentation</Text>
            </Body>
        </Left>
      </CardItem>
      <CardItem cardBody>
          <Image source={'https://3.imimg.com/data3/OT/SA/MY-13702196/paper-presentation-event-500x500.jpg'}/>
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

            </Container>
        );
    }
}
