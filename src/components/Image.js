import React from "react";
import Img from "gatsby-image";

export const Image = ({ imageData = {}, heading, useRegularImgInPreview, ...props }) => {
  const { alt = "", childImageSharp, image, url } = imageData;

  const headingAttrs = heading
    ? { style: { minHeight: "30vh", height: "100%", maxHeight: "26rem", minWidth: "100%" }, imgStyle: { objectPosition: "center center" }, loading: "eager" }
    : {};

  const attrs = { alt, durationFadeIn: 40, ...headingAttrs, ...props };

  if (!!image && !!image.childImageSharp) {
    return <Img fluid={image.childImageSharp.fluid} {...attrs} />;
  }

  if (!!childImageSharp) {
    return <Img fluid={childImageSharp.fluid} {...attrs} />;
  }

  if (!!image && typeof image === "string") {
    return <Img fluid={{ src: url }} {...attrs} />;
  }

  if (!!url && typeof url === "string") {
    if (useRegularImgInPreview) {
      return <img src={url} alt={attrs.alt} {...attrs} />;
    } else {
      return <Img fluid={{ src: url }} {...attrs} />;
    }
  }

  return null;
};
