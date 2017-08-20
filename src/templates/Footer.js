import React from 'react'
import {
  Container,
  Grid,
  Button,
  Icon,
  Header,
  Divider
} from 'semantic-ui-react'

const Footer = () => <Container fluid>
   <Grid centered>

  <Grid.Row>
    <Header as='h3'  content='WHERE TO FIND ME'/>
    <Divider />
  </Grid.Row>

  <Grid.Row >
    <Button
      color='facebook'
      compact
      size='large'
      href="https://facebook.com/jonocosa">
      <Icon name='facebook'/>
      Facebook
    </Button>

    <Button
      color='twitter'
      compact
      size='large'
      href="https://twitter.com/jonocosa">
      <Icon name='twitter'/>
      Twitter
    </Button>

    <Button color='grey' compact size='large' href="https://github.com/jonocosa">
      <Icon name='github'/>
      Github
    </Button>

    <Button
      color='linkedin'
      compact
      size='large'
      href="https://www.linkedin.com/in/jonocosa/">
      <Icon name='linkedin'/>
      LinkedIn
    </Button>

  </Grid.Row>

</Grid>
</Container>

export default Footer