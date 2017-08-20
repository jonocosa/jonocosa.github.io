import React from 'react'
import { Container, Header} from 'semantic-ui-react'

const About = () => <Container text>
  <Header as='h2' style={{
    marginTop: '5em'
  }}>About</Header>
  <Header as='h3'>Hi, I'm Jose Santos</Header>

  <p style={{
    minHeight: '600px'
  }}>I'm a Senior Web Developer for Team
    Detroit and formerly a web applications developer for The University of Michigan
    and the Senior Developer at Q LTD in Ann Arbor, MI. I also do freelance web
    design and development for projects that I find interesting, challenging or
    exciting, and give private training or consulting in various web topics. In
    2012, I created Level Up Tuts with web developer Ben Schaaf. With Level Up
    Tutorials I have taken our knowledge of web technologies to YouTube to provide
    free training to developers looking to learn something new. I've also created
    premium tutorial packages for Packt Publishing. I also enjoy bboying also known
    as breakdancing, and have been dancing for over 8 years doing shows for
    professional NFL and NBA teams. I'm inspired by a hot cup of green tea,
    excellent music, and Shaw Bros. kung fu movies. Please contact me if you would
    like to work on a project together, or just want to chat.
  </p>
</Container>

export default About