import React, { useState, useEffect } from "react";
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { breakpoints } from "../utils/breakpoints";



const MainSection = styled("main")`
    height: 650px;
    width: 100%;
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    
    .hero-text {
        height: 250px;
        width: 300px;
        text-align: center;
        h1 {
            font-size: 3rem;
            color: var(--light-green)
        }
        p {
            font-size: 1.7rem;
            color: var(--dark-grey)
        }
        button {
            font-size: 1.7rem;
            padding: 1rem 2rem;
            min-height: 48px;
            min-width: 48px;
        }
    }

    .hero-img {
        height: 300px;
        width: 350px;
    }


  
    @media ${breakpoints.md} {
        flex-direction: row;
        flex: 1;
        height: 550px;
        justify-content: space-between;
        align-items: center;
        gap: 0;
        width: 100%;
        .hero-img {
            height: 400px;
            width: 500px;
        }
        .hero-text {
            width: 350px;
            height: 400px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            h1 {
                font-size: 3rem;
            }
            p, button {
                font-size: 2rem;
            }
        }
    }

    @media ${breakpoints.lg} {
        height: 800px;

        .hero-img {
            height: auto;
            width: 800px;
            margin: 0 auto;
        }

        .hero-text {
            width: 500px;
            height: 400px;
            background-color:  var(--light-green);
            border-radius: 15px;
            margin: 0 auto;
            box-shadow: 2px 2px 2px rgba(0,0,0,0.1);
            h1 {
                font-size: 3.5rem;
                font-weight: bold;
                color: var(--white);
            }
            p {
                color: var(--white);
            }
        }
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
                        width: 1400
                        height: 1000
                        layout: CONSTRAINED
                    )
                }
            }
        }
    `);

        

    const image = getImage(data.file);

    return (
        <MainSection>
          <div className="hero-text">
              <h1>We Build Fast And <br /> Powerful Websites</h1>
              <p>Does Your Business Need a New Website?</p>
              <button>Start Here</button>
          </div>
            <GatsbyImage image={image} className="hero-img" alt="Slick's Slices Website Example" />
        </MainSection>
    )
}


export default HeroSection;