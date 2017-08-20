import React from 'react';
import Helmet from 'react-helmet';
import {Header} from 'semantic-ui-react'
// import '../css/blog-post.css';

export default function Template({data}) {
  const {markdownRemark: post} = data;
  return (
    <div className="blog-post-container">
      <Helmet title={`Your Blog Name - ${post.frontmatter.title}`}/>
      <div className="blog-post">
        <Header as='h2'> {post.frontmatter.title} </Header>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{
          __html: post.html
        }}/>
      </div>
    </div>
  );
}

export const pageQuery = graphql `query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;