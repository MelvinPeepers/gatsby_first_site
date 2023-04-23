// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking tired at the camera"
        src="https://gatsbytutorialexample.gatsbyjs.io/static/f7824272fbac2fda6a7bdb6f3567275f/5cc0d/clifford.webp"
      />
    </Layout>


  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => (

  <>
    <html lang="en" />
    <title>Home Page</title> 
    <meta name="description" content="My Home Page" />
  </>
  )

// Step 3: Export your component
export default IndexPage