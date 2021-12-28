import React from "react";
import { graphql } from "gatsby";

import { ContactUs } from "./ContactUs";

const ContactUsPage = ({ data: { markdownRemark } }) => {
  return <ContactUs {...markdownRemark} />;
};

export default ContactUsPage;

export const pageQuery = graphql`
  query ContactUsPage($slug: String) {
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
