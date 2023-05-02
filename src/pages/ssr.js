import * as React from "react"
import Layout from '../components/layout'
import Seo from '../components/seo'

const SSRPage = ({ serverData }) => (
    <Layout>
        <h1>SSR Page with Dogs</h1>
        <img alt="Happy dog" src={serverData.message} />
    </Layout>
)

export default SSRPage

export async function getServerData() {
    try {
        const res = await fetch(`https://dog.ceo/api/breeds/image/random`)

        if (!res.ok) {
            throw new Error(`Response failed`)
        }

        return {
            props: await res.json(),
        }
    } catch (error) {
        return {
            status: 500,
            headers: {},
            props: {}
        }
    }
}

<>
    <html lang="en" />
    <Seo title="SSR" /> 
    <meta name="description" content="My SSR Page" />
</>
