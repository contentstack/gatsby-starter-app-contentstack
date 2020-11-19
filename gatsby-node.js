//Module dependency

const path = require("path")


module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve("src/templates/blog-post.js")
  const result = await graphql(`
    query {
      allContentstackBlogPost {
        nodes {
          title
          url
        }
      }
    }
  `)
  //  console.log(result.data.allContentstackBlogPost.nodes[0]);
  function createnewPage(path, comp, title) {
    createPage({
      path: `${path}`,
      component: comp,
      context: {
        title: title,
      },
    })
  }
  result.data.allContentstackBlogPost.nodes.forEach(node => {
    createnewPage("/blog" + node.url, blogPostTemplate, node.title)
  })
}
