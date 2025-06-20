import * as React from "react"
import Layout from '../components/layout'
import Seo from '../components/seo'

const SSRPage = ({ serverData }) => (
    <Layout pageTitle="SSR Page with Dogs">
        <img alt="Happy dog" src={serverData.message} />
    </Layout>
)

export default SSRPage

export async function getServerData() {
    console.time("getServerData total");
    console.log("Memory before fetch:", process.memoryUsage());
    try {
        console.time("fetch dog image");
        const res = await fetch(`https://dog.ceo/api/breeds/image/random`)
        console.timeEnd("fetch dog image");

        if (!res.ok) {
            throw new Error(`Response failed`)
        }

        const json = await res.json();

        console.log("Memory after fetch", process.memoryUsage());
        console.timeEnd("getServerData total");

        return {
            props: await res.json(),
        }
    } catch (error) {
        console.error("Error in getServerData:", error);
        console.timeEnd('getServerData total');
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
