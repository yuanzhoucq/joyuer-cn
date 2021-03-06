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
  </div>
)};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC})
     {
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