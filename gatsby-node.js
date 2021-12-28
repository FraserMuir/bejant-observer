const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  // Create 404 page
  createPage({
    path: "/404.html",
    component: path.resolve(`src/app/pages/404.js`),
  });

  // Fetch pages
  const pagesData = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "page" } } }) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            templateKey
          }
        }
      }
    }
  `);

  const pages = pagesData.data.allMarkdownRemark.nodes;

  pages.forEach((page) => {
    if (!page.frontmatter.templateKey) return null;
    const pagePath = parsePathFromSlug(page.fields.slug);

    createPage({
      path: pagePath,
      component: path.resolve(`src/app/pages/${String(page.frontmatter.templateKey)}/index.js`),
      context: {
        slug: page.fields.slug,
      },
    });
  });

  // Fetch posts
  const postsData = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "post" } } }) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
            category
          }
        }
      }
    }
  `);

  // Create a page for each post
  const posts = postsData.data.allMarkdownRemark.nodes;

  posts.forEach((post) => {
    const postPath = parsePathFromSlug(post.fields.slug);

    createPage({
      path: `posts${postPath}`,
      component: path.resolve(`src/app/pages/post/index.js`),
      context: {
        post: post.fields.slug,
        slug: "/post/"
      },
    });
  });

  // Fetch categories
  const categoriesData = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "category" } } }) {
        nodes {
          frontmatter {
            label
            title
          }
        }
      }
    }
  `);

  const categories = categoriesData.data.allMarkdownRemark.nodes;

  // Create a page for each category
  categories.forEach((category) => {
    createPage({
      path: `category/${category.frontmatter.title}`,
      component: path.resolve(`src/app/pages/category/index.js`),
      context: {
        category: category.frontmatter.title,
        label: category.frontmatter.label,
        slug: "/category/",
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

const parsePathFromSlug = (slug) => {
  // Remove trailing slash
  if (slug.endsWith("/")) slug = slug.slice(0, -1);
  // Remove trailing index
  if (slug.endsWith("index")) slug = slug.replace("index", "");
  return slug;
};
