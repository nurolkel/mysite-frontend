import React from 'react'
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { breakpoints } from '../utils/breakpoints';


const FrontDifferenceContainer = styled("div")`
    width: 100%;
    position: relative;
    height: 250px;

    @media ${breakpoints.lg} {
        height: 500px;

    }
`;

const TextContainer = styled("div")`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
    height: 100%;
    background-color: var(--light-green);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    h3, a {
        text-transform: capitalize;
        color: white;
        text-align: center;
        padding: 2rem 0;
        margin: 0;
        display: block;
    }

    h3 {
        font-size: 3rem;
    }

    a {
        text-decoration: none;
        font-size: 1.7rem;
    }

    @media ${breakpoints.lg} {
        width: 500px;
        height: 400px;
        border-radius: 15px;
    }
`;


const ContactFront = () => {
    return ( 
        <FrontDifferenceContainer>
            <TextContainer>
                <h3>Want to speak to us?</h3>
                <button><Link to="/">Contact Us</Link></button>
            </TextContainer>
        </FrontDifferenceContainer>
    )
}

export default ContactFront