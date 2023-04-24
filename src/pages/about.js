import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>Hi there! I'm a proud creator of this site, which I built with Gatsby.</p>
        </Layout>
    )
}

export const Head = () => (

<>
    <html lang="en" />
    <Seo title="About Me" /> 
    <meta name="description" content="My About Page" />
</>
)

export default AboutPage