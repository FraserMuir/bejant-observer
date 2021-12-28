import React from "react";
import { graphql } from "gatsby";

import { Post } from "./Post";

const PostPage = ({ data: { markdownRemark } }) => {
  return <Post {...markdownRemark} />;
};

export default PostPage;

export const pageQuery = graphql`
  query PostPage($post: String) {
    markdownRemark(frontmatter: { type: { eq: "post" } }, fields: { slug: { eq: $post } }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 900, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
        category
      }
      html
    }
  }
`;
