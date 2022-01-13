import React from 'react'
import Layout from './src/components/Layout'
import { GlobalEmtionsStyle } from './src/styles/GlobalEmotion'


export const wrapRootElement = ({ element}) => (
    <>
        <GlobalEmtionsStyle />
            {element}    
   </>

)
        
        
export const wrapPageElement = ({ element, props}) => (
    <Layout {...props}>
        {element}
    </Layout>
)