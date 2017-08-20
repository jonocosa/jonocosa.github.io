import React from 'react'
// import Link from 'gatsby-link'
import logo from '../assets/images/home-background.png'
import {Button, Header, Container, Icon} from 'semantic-ui-react'

const HomePage = () => <Container
  fluid
  style={{
  backgroundImage: `url(${logo})`,
  backgroundSize: 'cover',
  height: '-webkit-fill-available'
}}>
  <Container text textAlign='center'>
    <Header
      as='h1'
      inverted
      content='I am José Santos'
      style={{
      fontSize: '4em',
      fontWeight: 'normal',
      marginBottom: 0,
      paddingTop: '3em'
    }}/>
    <Header
      as='h2'
      inverted
      content='I make awesome, modern websites'
      style={{
      fontSize: '1.7em',
      fontWeight: 'normal'
    }}/>
    <Button primary inverted size='huge'>
      Contact me
      <Icon name='right arrow'/>
    </Button>
  </Container>
</Container>

export default HomePage