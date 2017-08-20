import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import MenuFixed from '../templates/MenuFixed'
import Footer from '../templates/Footer'
import {Container, Grid} from 'semantic-ui-react'

const Head = <Helmet
  title="Jose Santos Web Developer"
  meta={[{
    name: 'description',
    content: 'Sample'
  }
]}>
  <link
    rel="stylesheet"
    href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"></link>
</Helmet>

const TemplateWrapper = ({children}) => <Container fluid>
  {Head}
  <Grid >
    <Grid.Row style={{
      marginBottom: 0,
      paddingBottom: 0
    }}>
      <MenuFixed/>
    </Grid.Row>
    <Grid.Row style={{
      margin: 0,
      padding: 0
    }}>
      {children()}
    </Grid.Row>
    <Grid.Row>
      <Footer/>
    </Grid.Row>
  </Grid>

</Container>

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
