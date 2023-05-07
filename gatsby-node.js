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

  

  