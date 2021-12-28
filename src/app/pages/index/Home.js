import React from "react";

import { Layout } from "components/Layout";
import { Posts } from "app/posts/Posts";

export const Home = ({ frontmatter, posts, preview }) => {
  const { image } = frontmatter || {};

  return (
    <Layout preview={preview} image={image}>
      <h1>Home</h1>
      <Posts posts={posts} />
    </Layout>
  );
};
