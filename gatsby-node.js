const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)
  const projTemplate = path.resolve(`src/templates/project.js`)

  const blogResult = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
        filter: {frontmatter: {template: {eq: "BlogPost"}}}
      ) {
        edges {
          node {
            id
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  const projResult = await graphql(`
    {
      allMarkdownRemark(filter: {frontmatter: {template: {eq: "Project"}}}) {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (blogResult.errors || projResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  blogResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    })
  });

  projResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: projTemplate,
      context:  {
        slug: node.frontmatter.slug
      }
    })
  });
}