exports.createPages = async ({ graphql, actions }) => {
    const { createRedirect } = actions
  
    createRedirect({
      fromPath: `www.mel.quest/blog/my-second-post/`,
      toPath: `www.mel.quest/about`,
    })
  }