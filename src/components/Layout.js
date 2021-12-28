import React from "react";
import styled from "styled-components";
import { device } from "styles/breakpoints";
import { GlobalStyle } from "styles/global";

import { Footer } from "./Footer";
import { Image } from "./Image";
import { Navbar } from "./Navbar";
import { Seo } from "./SEO";

const StyledLayout = styled.div`
  width: 100%;
  height: 100%;
  .content {
    margin-top: ${props => props.has_image ? 0 : "90px"};
  }
  main {
    width: 80em;
    max-width: 96%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    margin: 0 auto;
    margin-top: -90px;
    padding-top: 90px;
    & > * {
      margin-top: 3em;
    }
    & > :last-child {
      margin-bottom: 3em;
    }
    @media ${device.laptop} {
      max-width: 97%;
      & > * {
        margin-top: 2.25em;
      }
    }
    @media ${device.tablet} {
      max-width: 98%;
      & > * {
        margin-top: 1.75em;
      }
    }
    @media ${device.tablet} {
      & > * {
        margin-top: 1.25em;
      }
    }
    @media ${device.mobile} {
      max-width: 100%;
      & > * {
        margin-top: 1em;
      }
      & > :first-child {
        margin-top: 0;
      }
      & > :last-child {
        margin-bottom: 0;
      }
      & > :first-child :last-child {
        margin: 2em 0;
      }
    }
  }
`;

export const Layout = ({ preview, children, image }) => {
  console.log(image);
  return (
    <StyledLayout has_image={!!image}>
      {!preview && <Seo />}
      <GlobalStyle />
      <Navbar isSticky={!!image}/>
      <div className="content">
        {image && <Image heading imageData={image} />}
        <main id="main">{children}</main>
      </div>
      <Footer />
    </StyledLayout>
  );
};
