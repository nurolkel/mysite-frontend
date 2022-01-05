import React from 'react';
import styled from 'styled-components';
import  { breakpoints }  from '../utils/breakpoints';
import { Link } from 'gatsby';
import IconComponent from './IconComponent.js';
import { MdOutlineEmail } from 'react-icons/md';
import { FaMobileAlt } from 'react-icons/fa';


const MobileIcon = styled(FaMobileAlt)`
    color: var(--light-green);
    font-size: 2rem;
    display: inline-block;
    margin: 0 0.5rem;
`;

const EmailIcon = styled(MdOutlineEmail)`
    color: var(--light-green);
    font-size: 2rem;
    display: inline-block;
    margin: 0 0.5rem;
`;


const FooterContainer = styled.footer`
    box-sizing: border-box;
    width: 100%;
    border-top: 1px solid var(--dark-grey);
`;

const FollowUs = styled.h2`
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 2rem;
`;


const FooterBox = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    justify-items: center;
    align-items: center;
    
    @media ${breakpoints.lg} {
        grid-template-columns: repeat(3, 1fr);
    }
`;

const FooterInfoItems = styled.div`
    justify-self: center;
    align-self: center;
    margin: 1rem 0.5rem;
    a {
        text-decoration: none;
        text-transform: capitalize;
        text-align: center;
        color: var(--light-grey);
    }
    p {
        text-align: center;
        font-size: 1.5rem;
        text-transform: capitalize;
    }
   h2, h3 {
       text-align: center;
       text-transform: capitalize;
       color: var(--dark-green);
       font-size: 2.5rem;
       font-weight: bold;
   }
`;

const FooterLinks = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 2rem;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
    padding: 0;
    li {
        list-style-type: none;
        a {
            font-size: 1.2rem;
            text-decoration: underline;
            color: var(--dark-grey);
        }
        &:nth-child(1) {
            grid-row-start: 1;
            grid-column-start: 1;
            text-align: center;
        }
        &:nth-child(2) {
            grid-row-start: 1;
            grid-column-start: 2;
            text-align: center;

        }
        &:nth-child(3) {
            grid-row-start: 2;
            grid-column-start: 1;
            grid-column-end: 3;
            text-align: center;
            justify-self: center;
        }

    }
    @media ${breakpoints.lg} {
        display: flex;
        flex-direction: row;
    }
`;
const FooterLinksContact = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    gap: 2rem;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
    padding: 0;
    li {
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        a {
            font-size: 1.2rem;
            text-decoration: underline;
            color: var(--dark-grey);
        }
        &:nth-child(1) {
            grid-row-start: 1;
            grid-column-start: 1;
            text-align: center;
        }
        &:nth-child(2) {
            grid-row-start: 2;
            grid-column-start: 1;
            text-align: center;

        }

    }
    @media ${breakpoints.xl} {
        display: flex;
        flex-direction: row;
    }
`;

const CopyFooter = styled.div`
    background: var(--light-green);
    text-align: center;
    margin: 0;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
        text-decoration: none;
        cursor: pointer;
        color: var(--white);
    }
    a, p {
        font-size: 1.5rem;
        margin: 0;
    }
`;

const Footer = () => {
    return ( 
        <FooterContainer>
            <FollowUs>Follow Us on our Socials</FollowUs>
            <IconComponent />
            <FooterBox>
                <FooterInfoItems>
                    <Link to ='/'>
                        <h3>Performant Web Design</h3>
                    </Link>
                    <p>Get the performance you need from your website</p>
                </FooterInfoItems>
                <FooterInfoItems>
                    <h3>Links</h3>
                        <FooterLinks>
                            <li>
                                <Link to="/">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Cookie Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Terms of Service Policy
                                </Link>
                            </li>
                        </FooterLinks>
                </FooterInfoItems>
                <FooterInfoItems>
                    <h3>Contact Info</h3>
                        <FooterLinksContact>
                            <li>
                                <a href="tel:13472379288">
                                    <MobileIcon aria-label="Mobile"/>347-237-9288
                                </a>
                            </li>
                            <li>
                                <a href="mailto:knunezweb@gmail.com">
                                    <EmailIcon aria-label="Email" />knunezweb@gmail.com
                                </a>
                            </li>
                        </FooterLinksContact>
                </FooterInfoItems>
            </FooterBox>
            <CopyFooter>
                <p>&copy; <Link to ="/" aria-label="Performant Web Design">Performant Web Design</Link> {new Date().getFullYear()}</p>
            </CopyFooter>
        </FooterContainer>
    )
};

export default Footer;