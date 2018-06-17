import React from "react";
import ReactDisqusThread from 'react-disqus-thread';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <ReactDisqusThread
        shortname="joyuer"
        identifier={post.frontmatter.title}
        title={post.frontmatter.title}
        url={"https://www.joyuer.cn/" + post.frontmatter.title}
        />
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

