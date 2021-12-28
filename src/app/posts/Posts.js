import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledPosts = styled.div``;

export const Posts = ({ posts }) => {
  return (
    <StyledPosts>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link to={`/posts${post.fields.slug}`}>{post.frontmatter.title}</Link>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
            <div>{post.frontmatter.category}</div>
          </div>
        );
      })}
    </StyledPosts>
  );
};
