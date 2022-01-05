import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { breakpoints } from "../utils/breakpoints";
import { BgImage } from 'gbimage-bridge'


const MainSection = styled.main`
    height: 500px;
    position: relative;


    .masthead {
        height: 400px;
        width: 100%;
        background-blend-mode: darken;
    }

`;



const HeroSection = () => {
    
    
    const [mobile, setMobile] = useState(true)

    const handleSize = () => {
        if (window.innerWidth > 768) {
            setMobile(false)
        } else {
            setMobile(true)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleSize)
        
        return ()=> window.removeEventListener('resize',handleSize)
    }, [mobile])


    
    const data = useStaticQuery(graphql`
        query MyQuery {
            file(name: {eq: "picturesWeb"}) {
                childImageSharp {
                    gatsbyImageData(
                        webpOptions: {quality: 75}
                        pngOptions: {quality: 50}
                        placeholder: TRACED_SVG
                        width: 1000
                        layout: CONSTRAINED
                    )
                }
            }
        }
    `);

        

    const image = getImage(data.file);

    return (
        <MainSection>
            {mobile && 
                <BgImage image={image} className="masthead">
                    <h1>Fast and Powerful Websites</h1>
                    <p>Optimize your Webpage with New Technology</p>
                    <button>Contact Us</button>
                </BgImage>
            }
        </MainSection>
    )
}


export default HeroSection;