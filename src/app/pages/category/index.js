import React from "react";
import { graphql } from "gatsby";

import { Category } from "./Category";

const CategoryPage = ({ data: { markdownRemark, allMarkdownRemark }, pageContext }) => {
  return <Category {...markdownRemark} posts={allMarkdownRemark.nodes} label={pageContext.label} />;
};

export default CategoryPage;

export const pageQuery = graphql`
  query CategoryPage($slug: String, $category: String) {
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
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "post" }, category: { eq: $category } } }) {
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
