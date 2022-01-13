import React from "react";
import styled from "@emotion/styled";
import { breakpoints } from "../utils/breakpoints";
import { FaMobileAlt, FaSearchLocation, FaCashRegister, FaMailBulk} from 'react-icons/fa'


const MobileIcon = styled(FaMobileAlt)`
    color: #fff;
    background: #04BFAD;
    margin-bottom: -3rem;
    border-radius: 20px;
    padding: 2px;
    margin-left: 0.5rem;
    font-size: 2.5rem;
    transition: transform 300ms;
    :hover {
        transform: translateY(-10px);
    }

    @media ${breakpoints.lg} {
        font-size: 3rem;
        height: 80px;
        width: 75px;
        padding: 10px;
        margin-left: 0;
        margin: 0 auto;

    }
`

const SearchIcon = styled(FaSearchLocation)`
    color: #fff;
    background: #04BFAD;
    margin-bottom: -3rem;
    border-radius: 20px;
    padding: 2px;
    margin-left: 0.5rem;
    font-size: 2.5rem;
    transition: transform 300ms;
    :hover {
        transform: translateY(-10px);
    }

    @media ${breakpoints.lg} {
        font-size: 3rem;
        height: 80px;
        width: 75px;
        padding: 10px;
        margin-left: 0;
        margin: 0 auto;

    }
`;

const CashIcon = styled(FaCashRegister)`
    color: #fff;
    background: #04BFAD;
    margin-left: 0.5rem;
    margin-bottom: -3rem;
    border-radius: 20px;
    padding: 2px;
    font-size: 2.5rem;
    transition: transform 300ms;
    :hover {
        transform: translateY(-10px);
    }

    @media ${breakpoints.lg} {
        font-size: 3rem;
        height: 80px;
        width: 75px;
        padding: 10px;
        margin-left: 0;
        margin: 0 auto;

    }
`;

const MailIcon = styled(FaMailBulk)`
    color: #fff;
    background: #04BFAD;
    margin-bottom: -3rem;
    border-radius: 20px;
    padding: 2px;
    margin-left: 0.5rem;
    font-size: 2.5rem;
    transition: transform 300ms;
    :hover {
        transform: translateY(-10px);
    }

    @media ${breakpoints.lg} {
        font-size: 3rem;
        height: 80px;
        width: 75px;
        padding: 10px;
        margin-left: 0;
        margin: 0 auto;

    }
`;

const ServiceFrontContainer = styled("div")`
    width: 100%;
    margin: 1.5rem 0;
    box-sizing: border-box;

     @media ${breakpoints.lg} {
         
     }
`;

const HeadingContainer = styled("div")`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    h2 {
        color: var(--light-green);
        text-transform: capitalize;
        text-decoration: underline var(--dark-green);
        font-size: 3rem;
       
        @media ${breakpoints.lg} {
            font-size: 5rem;
        }
    }

   
`;

const ListContainer = styled("ul")`
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    gap: 2rem;
    li {
        list-style: none;
        width: 300px;
        margin: 0 auto;
        transition: transform 300ms;
        transform-style: preserve-3d;
        box-shadow: 1px 1px 1px rgba(0,0,0,0.1);
        &:hover {
            transform: translateZ(100px);
            box-shadow: 3px 3px 3px rgba(0,0,0,0.2) ;
        }

        h3{
            text-align: center;
            font-size: 2rem;
            text-transform: capitalize;
            margin-left: 2.8rem;
            color: var(--dark-green);
        }
        p {
            text-align: center;
            font-size: 1.5rem;
            color: var(--dark-grey);
        }
        
        @media ${breakpoints.lg} {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 325px;
            height: 400px;
            border-radius: 15px;
            background-color: var(--light-green);
            backdrop-filter: blur(5px);
            box-shadow: 3px 3px 3px rgba(0,0,0,0.1);
            h3 {
                font-size: 3rem;
                margin: 2rem auto;
                color: var(--white);
            }

            p {
               font-size: 2rem;
               margin: 2rem auto;
               color: var(--white);
               padding: 0 1rem;
            }
        }
      
    }

    @media  ${breakpoints.md} {
        grid-template-columns: repeat(2, 1fr);
    }

    @media ${breakpoints.lg} {
        height: 900px;
        width: 800px;
        margin: 0 auto;
    }
`;





const HomeServices = () => {
    return ( 
        <ServiceFrontContainer>
            <HeadingContainer>
                <h2>What We Do</h2>
            </HeadingContainer>
            <ListContainer>
                <li>
                    <MobileIcon aria-label="Business Marketing Icon"/>
                    <h3>Business Marketing Page</h3>
                    <p>Mobile First Design Web Design and accessible for everyone increasing your business's marketability</p>
                </li>
                <li>
                    <CashIcon aria-label="E-Commerce Icon" />
                    <h3>E-Commerce Web Applications</h3>
                    <p>Sell your products online and enhance your customers web experience with a user focused UI</p>
                </li>
                <li>
                    <SearchIcon aria-label="SEO Icon" />
                    <h3>SEO</h3>
                    <p>Optimize your search results and have your website work as hard as you do</p>
                </li>
                <li>
                    <MailIcon aria-label="Digital Marketing Icon" />
                    <h3>Digital Marketing</h3>
                    <p>Communicate with your customers directly through direct emails, text messages and advertisment</p>
                </li>
            </ListContainer>
        </ServiceFrontContainer>
    )
}

export default HomeServices;