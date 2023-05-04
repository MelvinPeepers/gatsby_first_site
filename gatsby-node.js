exports.createPages = async ({ graphql, actions }) => {
    const { createRedirect } = actions
  
    createRedirect({
      fromPath: `/blog/my-sixth-post/`,
      toPath: `/blog/my-fifth-post`,
    })
  }