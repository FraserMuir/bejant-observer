import React from "react";

import { Layout } from "components/Layout";
import { Posts } from "app/posts/Posts";

export const Category = ({ frontmatter, posts, label, preview }) => {
  const { image } = frontmatter || {};

  console.log(posts);

  return (
    <Layout preview={preview} image={image}>
      <h1>{label}</h1>
      <Posts posts={posts} />
    </Layout>
  );
};