import React from "react";
import { graphql } from "gatsby";

import { AboutUs } from "./AboutUs";

const AboutUsPage = ({ data: { markdownRemark } }) => {
  return <AboutUs {...markdownRemark} />;
};

export default AboutUsPage;

export const pageQuery = graphql`
  query AboutUsPage($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1500, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`;
