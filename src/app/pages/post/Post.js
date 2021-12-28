import React from "react";

import { Layout } from "components/Layout";
import { Image } from "components/Image";

export const Post = ({ html, frontmatter, preview, pageImage }) => {
  const { title, category, image } = frontmatter || {};

  return (
    <Layout preview={preview} image={pageImage}>
      <Image imageData={image} />
      <h1>{title}</h1>
      <h3>{category}</h3>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};