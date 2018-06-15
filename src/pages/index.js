import React from "react";
import Link from "gatsby-link";

export default ({ data }) => {
  return (
  <div style={{ margin: '3rem auto', maxWidth: 600 }}>
    <h4>{data.allMarkdownRemark.totalCount} 篇文章</h4>
    {data.allMarkdownRemark.edges.map( ({node}) => (
      <div>
        <h1><Link to={node.fields.slug}>{node.frontmatter.title}</Link></h1>
        <p>{node.excerpt}</p>
      </div>
    ))}
    {/*<div>*/}
      {/*<img src="https://source.unsplash.com/random/800x200" alt=""/>*/}
    {/*</div>*/}
  </div>
)};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            title
          }
          excerpt
        }
      }
    }
  }
`;