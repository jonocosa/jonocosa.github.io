import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import {Container,Header, Segment} from 'semantic-ui-react'

// import '../css/index.css'; // add some style if you want!

export default function Index({data}) {
  const {edges: posts} = data.allMarkdownRemark;
  return (
    <Container text style={{ paddingTop: '2em' , paddingBottom: '10em'}} >
       {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({node: post}) => {
          return (
            <Segment padded='very' raised key={post.id}>
              <Header as='h1'>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </Header>
              <Header as='h3' >{post.frontmatter.date}</Header>
              <p>{post.excerpt}</p>
            </Segment>
          );
        })}
    </Container>
  );
}

export const pageQuery = graphql `
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;