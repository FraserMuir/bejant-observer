import React from "react";
import { graphql } from "gatsby";

import { Home } from "./Home";

const HomePage = ({ data: { markdownRemark, allMarkdownRemark } }) => {
  return <Home {...markdownRemark} posts={allMarkdownRemark.nodes} />;
};

export default HomePage;

export const pageQuery = graphql`
  query HomePage($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 1500, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "post" } } }) {
      nodes {
        id
        frontmatter {
          category
          title
        }
        excerpt(format: HTML, pruneLength: 100)
        fields {
          slug
        }
      }
    }
  }
`;
