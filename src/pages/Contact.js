import React from 'react'
import Link from 'gatsby-link'
import {Container, Header, Form, Button} from 'semantic-ui-react'

const Contact = () =>
<Container text>
    <Header  
        as='h1'
      
      content='I am José Santos'
      style={{
      fontSize: '4em',
      fontWeight: 'normal',
      marginBottom: 0,
      paddingTop: '3em'}}
      />
      <Form>
    <Form.Field>
      <label>Name</label>
      <input placeholder='Name' />
    </Form.Field>
    <Form.Field>
      <label>Email Address</label>
      <input placeholder='Email Address' />
    </Form.Field>
        <Form.Field>
            <Form.TextArea label='messege' placeholder='How can I help you ?'/>
        </Form.Field>
    <Button type='submit'>Send</Button>
  </Form>
</Container>

export default Contact