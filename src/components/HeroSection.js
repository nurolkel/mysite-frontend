import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { breakpoints } from "../utils/breakpoints";
import { BgImage } from 'gbimage-bridge'


const MainSection = styled.main`
    height: 500px;
    width: 100%;
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    div {
        height: 150px;
        width: 100%;
        padding: 10px;
    }
  
    @media ${breakpoints.lg} {
        flex-direction: row;
        flex: 1;
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
                        height: 800
                        layout: CONSTRAINED
                    )
                }
            }
        }
    `);

        

    const image = getImage(data.file);

    return (
        <MainSection>
          <div>
              <h1>Fast and Powerful Websites</h1>
              <p>Optimize Your Wesbite and Search Results</p>
              <button>Find Out How</button>
          </div>
          <GatsbyImage image={image} alt="Slick's Slices Website Example" />
        </MainSection>
    )
}


export default HeroSection;