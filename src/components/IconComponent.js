import React from "react";
import styled from "styled-components";
import { breakpoints } from "../utils/breakpoints";
import { BsFacebook, BsGoogle, BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaYelp } from "react-icons/fa";

const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 3rem;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
    a {
        color: var(--light-green);
        transition: color 300ms, margin 300ms, transform 300ms;
        :hover {
            color: var(--light-green-shadow);
            margin-top: -10px;
            transform: rotate(45deg)
        }
    }
    @media ${breakpoints.md} {
        flex-direction: row;
        padding: 2rem 0;
    }

`;

const FaceBookIcon = styled(BsFacebook)`
    font-size: 2.5rem;
    color: var(--light-green);
`;
const GoogleIcon = styled(BsGoogle)`
    font-size: 2.5rem;
    color: var(--light-green);
`;
const InstagramIcon = styled(BsInstagram)`
    font-size: 2.5rem;
    color: var(--light-green);
`;
const LinkedinIcon = styled(BsLinkedin)`
    font-size: 2.5rem;
    color: var(--light-green);
`;
const YelpIcon = styled(FaYelp)`
    font-size: 2.5rem;
    color: var(--light-green);
`;

export default function IconComponent() {
    return ( 
        <IconContainer>
            <a href="#" aria-label="FaceBook">
                <FaceBookIcon aria-label="FaceBook" />
            </a>
            <a href="#" aria-label="Instagram"> 
                <InstagramIcon aria-label="Instagram" />
            </a>
            <a href="#" aria-label="Linkedin">
                <LinkedinIcon aria-label="Linkedin" />
            </a>
            <a href="#" aria-label="Google">
                <GoogleIcon aria-label="Google"/>
            </a>
            <a href="#" aria-label="Yelp">
                <YelpIcon aria-label="Yelp" />
            </a>
        </IconContainer>

    )
}

