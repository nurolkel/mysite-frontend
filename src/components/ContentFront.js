import React from "react";
import styled from "@emotion/styled";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { breakpoints } from "../utils/breakpoints";

const MainSection = styled("main")`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px 0;
    padding: 10px 0;
    height: 500px;

    .content-img {
        width: 350px;
        height: 275px;
        margin: 0 auto;


       

        @media ${breakpoints.lg} {
            height: 500px;
            width: 600px;
        }
    }

    .content-text {
        width: 350px;
        h2 {
            font-size: 2.5rem;
            color: var(--light-green);
            @media ${breakpoints.lg} {
                font-size: 3rem;
            }
        }
        p {
            font-size: 1.7rem;
            color: var(--dark-grey);
        }
    }

    @media ${breakpoints.md} {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin: 3rem 0;

        .content-img {
            height: 400px;
            width: 500px;
        }

        .content-text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 400px;
            width: 300px;

            h2 {
                font-size: 3rem;
                width: 250px;

            }
            p {
                font-size: 2rem;
                width: 250px;
            }
        }
    }

    @media ${breakpoints.lg} {
        height: 750px;
        background-color: var(--dark-green);
        margin: 0;
        .content-img {
            height: 600px;
            width: 600px;
            margin: 0 auto;
        }

        .content-text {
            height: 500px;
            width: 400px;
            background-color: var(--light-green);
            border-radius: 15px;
            margin: 0 auto;
            h2 {
                font-size: 3.5rem;
                color: var(--white);
                width: 350px;

                br {
                    display: none;
                }
            }
            p {
                font-size: 2.1rem;
                color: var(--white);
                width: 350px;
            }
        }
    }

`;



const ContentFront = () => {

    const data = useStaticQuery(graphql`
        query ContentFront {
            file(name: {eq: "logisticsDesign"}) {
                childImageSharp {
                    gatsbyImageData(
                        webpOptions: {quality: 75}
                        layout: CONSTRAINED
                        pngOptions: {quality: 50}
                        placeholder: TRACED_SVG
                        width: 1400
                        height: 1000
                    )
                }
            }
        }
    `)

    const image = getImage(data.file)

    return ( 
        <MainSection>
            <GatsbyImage  className="content-img" image={image} alt="Logistics Design Page" />
            <div className="content-text">
                <h2>Update and Add <br /> New Content to your Website<br/> fast and easy!</h2>
                <p>Switch and change what you need without all the complications using a simple interface</p>
            </div>
        </MainSection>
    )
}


export default ContentFront;