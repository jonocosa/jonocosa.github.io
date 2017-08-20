import React from 'react'
import { Image, Container, Item} from 'semantic-ui-react'
import MupImg from '../assets/images/portfolio/muphoric-sounds.png'
import IconImg from '../assets/images/portfolio/circular-icon-set.png'
import RanImg from '../assets/images/portfolio/random-quotes.png'


const Projects = () => <Container style={{marginTop:'2em'}} >
 <Item.Group>
    <Item>

      <Item.Image  size='tiny' src={MupImg} />
      <Item.Content>
        <Item.Header as='a'>Muphoric Sound</Item.Header>
        <Item.Meta>Myphoric sound is one of my favorite project. It is a wordpress site </Item.Meta>
        <Item.Description>
          <Image src={MupImg} />
        </Item.Description>
        <Item.Extra>Additional Details</Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size='tiny' src={IconImg} />

      <Item.Content>
        <Item.Header as='a'>Icon Set</Item.Header>
        <Item.Meta>An Icon Set I created for a non profite site</Item.Meta>
        <Item.Description>
          <Image src={IconImg} />
        </Item.Description>
        <Item.Extra>Additional Details</Item.Extra>
      </Item.Content>
    </Item>
    <Item>
      <Item.Image size='tiny' src={RanImg} />

      <Item.Content>
        <Item.Header as='a'>Random Quoting Machine</Item.Header>
        <Item.Meta>A fun random quoting machine I creaded</Item.Meta>
        <Item.Description>
          <Image src={RanImg} />
        </Item.Description>
        <Item.Extra>Additional Details</Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
</Container>

export default Projects