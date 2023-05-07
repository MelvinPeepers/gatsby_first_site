// exports.createPages = async ({ graphql, actions }) => {
//     const { createRedirect } = actions
  
//     // createRedirect({
//     //   fromPath: `/blog/my-sixth-post/`,
//     //   toPath: `/blog/my-fifth-post`,
//     // })
//     // the above redirects from /blog/my-sixth-post (which doesn't exist) to /blog/my-fifth-post which does exist 

//     // Wildcard path redirects
//     createRedirect({
//       fromPath: `/blog/*`,
//       toPath: `/blog`
//     })
//         // the above wildcard redirect rule redirects back to the blog page if the page doesn't exist 

//     createPage({
//       path: "page-path",
//       component: "component-path",
//       context: {},
//       defer: true,
//     })    
//   }

const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx(filter: {fileAbsolutePath: {regex: "/content/blog/"}}) {
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

  if (result.errors) {
    throw result.errors
  }

  // Create blog post pages.
  const posts = result.data.allMdx.edges

  // Create a page for each mdx file in the blog directory
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: `/${post.node.frontmatter.slug}`,
      component: path.resolve(`./src/pages/blog-post.js`),
      context: {
        id: post.node.id,
        previous,
        next,
      },
    })
  })
}
