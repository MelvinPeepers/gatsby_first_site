exports.createPages = async ({ graphql, actions }) => {
    const { createRedirect } = actions
  
    createRedirect({
      fromPath: `/blog/my-second-post`,
      toPath: `/about`,
    })
  }