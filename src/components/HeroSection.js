import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { breakpoints } from "../utils/breakpoints";
import { BgImage } from 'gbimage-bridge'


const MainSection = styled.main`
    height: 500px;
    position: relative;
    box-sizing: border-box;

    .absolute {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        background-color: var(--light-grey);
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
                <>
                <GatsbyImage image={image} alt="Slicks Slices" />
                <div className="absolute">
                    <h2>Fast and Powerful Websites</h2>
                    <p>Optimize your Website with new technology</p>
                    <button>Contact Us</button>
                </div>
               </>
            }
        </MainSection>
    )
}


export default HeroSection;