import React from "react"
import Layout from "./src/components/Layout"
import GlobalStyles from "./src/styles/GlobalStyles"


export const wrapRootElement = ({ element}) => (
    <>
        <GlobalStyles />
            {element}
    </>

)

export const wrapPageElement = ({ element, props}) => (
    <Layout {...props}>
        {element}
    </Layout>
)
    
        
        
