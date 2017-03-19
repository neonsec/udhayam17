import React, { Component } from 'react';
import { Image, View, ScrollView } from 'react-native';
import { Container, Icon, DeckSwiper, Card, CardItem, Left, Body, Thumbnail, Text, Button, Right, Footer, FooterTab } from 'native-base';

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
        const { navigate } = this.props.navigation;
        return (
            <Container>
<ScrollView>
                  <Card>


      <CardItem>
        <Image
       style={{width: '100%', height: 100}}
       source={{uri: 'http://www.canaraengineering.in/Aakriti/images/events/ppt/image1.jpg'}}
     />
      </CardItem>


  <CardItem>
            <Body>
                <Text>Paperix</Text>
                <Text note>Paper Presentation</Text>
            </Body>

      </CardItem>

      <CardItem content>

        <Body>
          <Text style={{fontWeight: 'bold'}}> Rules and Regulations</Text>
          <Text>Maximum 3 per team</Text>
          <Text>Mail the paper to:  paper.kitudhayam17@gmail.com</Text>
          <Text>Judge's Decision will be final</Text>

          <Text>Winner Prize: &#8377;2000 </Text>
          <Text>Runner Prize: &#8377;1000 </Text>
        </Body>
      </CardItem>

      <CardItem>
        <Image
       style={{width: '100%', height: 150, }}
       source={{uri: 'https://i.ytimg.com/vi/pUsh97YIX64/maxresdefault.jpg'}}
     />
      </CardItem>


  <CardItem>
            <Body>
                <Text>GREY MATTER</Text>
                <Text note> Technical Quiz for All Dept.</Text>
            </Body>

      </CardItem>

      <CardItem content>

        <Body>
          <Text style={{fontWeight: 'bold'}}> Rules and Regulations</Text>
          <Text>There will be two rounds.</Text>
          <Text>Each round has 50 questions</Text>
          <Text>Judge's Decision will be final</Text>
          <Text>Winner Prize: &#8377;2000 </Text>
          <Text>Runner Prize: &#8377;1000 </Text>
        </Body>
      </CardItem>
      <CardItem>
        <Image
       style={{width: '100%', height: 150, }}
       source={{uri: 'https://www.teachermagazine.com.au/files/Computing,_programming_and_coding_in_schools.jpg'}}
     />
      </CardItem>


  <CardItem>
            <Body>
                <Text>Hello World</Text>
                <Text note> Code Debugging for CS/IT</Text>
            </Body>

      </CardItem>

      <CardItem content>

        <Body>
          <Text style={{fontWeight: 'bold'}}> Rules and Regulations</Text>
          <Text>There will be two rounds.</Text>
          <Text>First round will be MCQ on C, C++</Text>
          <Text>Second round will be the Debugging round</Text>
          <Text>Judge's Decision will be final</Text>
          <Text>Winner Prize: &#8377;2000 </Text>
          <Text>Runner Prize: &#8377;1000 </Text>
        </Body>
      </CardItem>
      <CardItem>
        <Image
       style={{width: '100%', height: 150, }}
       source={require('./circuit.jpg')}
     />
      </CardItem>


  <CardItem>
            <Body>
                <Text>Think and Blink</Text>
                <Text note> Circuit Debugging for ECE/EEE</Text>
            </Body>

      </CardItem>

      <CardItem content>

        <Body>
          <Text style={{fontWeight: 'bold'}}> Rules and Regulations</Text>
          <Text>There will be three rounds of circuit debugging.</Text>
          <Text>Max. 2 per team</Text>
          <Text>Three Rounds: Easy, Medium, Difficult</Text>
          <Text>Judge's Decision will be final</Text>
          <Text>Winner Prize: &#8377;2000 </Text>
          <Text>Runner Prize: &#8377;1000 </Text>
        </Body>
      </CardItem>
      <CardItem>
        <Image
       style={{width: '100%', height: 150, }}
       source={require('./cad.jpg')}
     />
      </CardItem>


  <CardItem>
            <Body>
                <Text>Deception</Text>
                <Text note> CAD Modelling for Aero/Mech</Text>
            </Body>

      </CardItem>

      <CardItem content>

        <Body>
          <Text style={{fontWeight: 'bold'}}> Rules and Regulations</Text>
          <Text>There will be two rounds of Designing</Text>
          <Text>First round is Object Designing</Text>

          <Text>Second round is Assembly Modelling</Text>
          <Text>Judge's Decision will be final</Text>
          <Text>Winner Prize: &#8377;2000 </Text>
          <Text>Runner Prize: &#8377;1000 </Text>
        </Body>
      </CardItem>
      <CardItem>
        <Image
       style={{width: '100%', height: 150, }}
       source={require('./2.jpg')}
     />
      </CardItem>


  <CardItem>
            <Body>
                <Text>Group Dance</Text>

            </Body>

      </CardItem>

      <CardItem content>

        <Body>
          <Text style={{fontWeight: 'bold'}}> Rules and Regulations</Text>
          <Text>1 team per college.</Text>
          <Text>Max. of 20 teams / college</Text>
          <Text>Song Limit: Max 6 minutes</Text>
          <Text>Judge's Decision will be final</Text>
          <Text>1st Prize: &#8377;5000 </Text>
          <Text>2nd Prize: &#8377;3000 </Text>
          <Text>3rd Prize: &#8377;2000 </Text>
        </Body>
      </CardItem>
      <CardItem>
        <Image
       style={{width: '100%', height: 150, }}
       source={require('./solo.jpg')}
     />
      </CardItem>


  <CardItem>
            <Body>
                <Text>Solo Dance</Text>

            </Body>

      </CardItem>

      <CardItem content>

        <Body>
          <Text style={{fontWeight: 'bold'}}> Rules and Regulations</Text>
          <Text>2 Participants per college</Text>
          <Text>Song limit of 4 min</Text>
          <Text>Judge's Decision will be final</Text>
          <Text>1st Prize: &#8377;3000 </Text>
          <Text>2nd Prize: &#8377;2000 </Text>
          <Text>3rd Prize: &#8377;1000 </Text>
        </Body>
      </CardItem>
      <CardItem>
        <Image
       style={{width: '100%', height: 150, }}
       source={require('./waste.jpg')}
     />
      </CardItem>


  <CardItem>
            <Body>
                <Text>Wealth Out Of Waste</Text>

            </Body>

      </CardItem>

      <CardItem content>

        <Body>
          <Text style={{fontWeight: 'bold'}}> Rules and Regulations</Text>
          <Text>Bring your own necessary things to make waste useful</Text>
          <Text>One team per college</Text>
          <Text>Judge's Decision will be final</Text>
          <Text>1st Prize: &#8377;2000 </Text>
          <Text>2nd Prize: &#8377;1000 </Text>
          <Text>3rd Prize: &#8377;750 </Text>
        </Body>
      </CardItem>
      <CardItem>
        <Image
       style={{width: '100%', height: 150, }}
       source={require('./shorts.jpg')}
     />
      </CardItem>


  <CardItem>
            <Body>
                <Text>Short Film</Text>

            </Body>

      </CardItem>

      <CardItem content>

        <Body>
          <Text style={{fontWeight: 'bold'}}> Rules and Regulations</Text>
          <Text>Time limit: 15minutes.</Text>
          <Text>One team per college</Text>
          <Text>Judge's Decision will be final</Text>
          <Text>1st Prize: &#8377;3000 </Text>
          <Text>2nd Prize: &#8377;2000 </Text>
          <Text>3rd Prize: &#8377;1000 </Text>
        </Body>
      </CardItem>
      <CardItem>
        <Image
       style={{width: '100%', height: 150, }}
       source={require('./event.png')}
     />
      </CardItem>


  <CardItem>
            <Body>
                <Text>Variety Events</Text>

            </Body>

      </CardItem>

      <CardItem content>

        <Body>
          <Text style={{fontWeight: 'bold'}}> Rules and Regulations</Text>
          <Text>1team per college.</Text>
          <Text>It can be solo or group (20 Members Max)</Text>
          <Text> Limit: 6 minutes</Text>
          <Text>Judge's Decision will be final</Text>
          <Text>1st Prize: &#8377;5000 </Text>
          <Text>2nd Prize: &#8377;3000 </Text>
          <Text>3rd Prize: &#8377;2000 </Text>
        </Body>
      </CardItem>
</Card>


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
