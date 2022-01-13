import React from "react";
import styled from "@emotion/styled";
import { breakpoints } from "../utils/breakpoints";
import { useStaticQuery, graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import SEO from "../components/SEO";

const HeadingContainer = styled("div")`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    margin-bottom: 2rem;
    h2 {
        color: var(--light-green);
        text-transform: capitalize;
        text-decoration: underline var(--dark-green);
        font-size: 2.5rem;
    }

    @media ${breakpoints.lg} {
        font-size: 3.3rem;
    }
`;



const MessageContainer = styled("div")`
    position: relative;
    box-sizing: border-box;
    background-color: var(--light-green);
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    h3 {
        text-align: center;
        color: var(--white);
        font-size: 2rem;
        
    }
    p {
        color: var(--white);
        margin: 2rem 1rem;
        text-align: center;
        line-height: 25px;
        font-size: 1.7rem;
    }

    @media ${breakpoints.lg} {
        width: 600px;
        margin: 0 auto;
        border-radius: 15px;
        gap: 2rem;
    }
`;



const RelativeCard = styled("div")`
    position: relative;
    border: 0.5rem solid var(--light-green);
    margin: 1rem auto;
    box-shadow: 1px 1px 1px rgba(0,0,0,0.1);
    width: 250px;
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    p, h3 {
        padding: 1rem 0;
    }

    h3 {
        margin: 0 auto;
        color: var(--dark-green);
        font-size: 2rem;
    }
    p { 
        width: 150px;
        margin: 0 auto;
        color: var(--dark-grey);
        font-size: 1.5rem;
    }

    .about-img {
        height: 150px;
        width: 150px;
        border-radius: 50%;
    }

    @media ${breakpoints.md} {
        width: 300px;
        height: 800px;

        h3 {
            font-size: 2.5rem;
        } 

        p {
            width: 250px;
            font-size: 1.9rem;
        }

        .about-img {
            height: 200px;
            width: 200px
        }
    }
`;







const AboutPage = () => {


    const data = useStaticQuery(graphql`
        query headshot {
            file(name: {eq: "kelvinheadshotl"}) {
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
        <>
            <SEO />
            <HeadingContainer>
                <h2>About</h2>
            </HeadingContainer>
            <MessageContainer>
                    <h3>Our Mission Statement</h3>
                    <p>In March 2020, our world completely changed due to the Corona Virus. And in that time, many small and medium size businesses had to close their doors because they weren't essential and yet the biggest and most profitable business not only were able to stay open, but they thrived. Small and Medium size business were no longer competing in the same game. We feel that incorporating technology in your business can even the playing game and get you back in the global competitve marketplace.</p>
            </MessageContainer>
            <HeadingContainer>
                <h2>
                    Our Team
                </h2>
            </HeadingContainer>
            <RelativeCard>
                <GatsbyImage className="about-img" image={image} alt="Kelvin Nunez, CEO" />
                <h3>Kelvin Nunez</h3>
                <p>CEO, President, Web Developer</p>
                <p>Kelvin Started coding in 2020 to be able to learn how technology really works and how it can benefit people. He's worked in sales as a car salesman and a business to business consultant. The move to web developer came as a suprise and he is currently loving his choice.</p>
                <p>On his free time, Kelvin enjoys going to the gym, reading, exploring musuems, and hanging out with friends. One of his personal goals is to travel more and learn about other countries and cultures.</p>
            </RelativeCard>
        </>
    )
}

export default AboutPage;