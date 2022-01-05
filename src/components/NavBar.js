import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { breakpoints } from "../utils/breakpoints";

const Navigation = styled.nav`
    box-sizing: border-box;
    display: flex;
    position: sticky;
    background-color: ${({ background }) => background ? `var(--light-green-tint)` : `var(--white)`};
    justify-content: space-around;
    align-items: center;
    z-index: 100;
    top: 0;
    transition: background-color ease-out 300ms;
    height: 75px;
`

const LogoStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    a {
        text-decoration: none;
        color: var(--light-green);
        font-size: 2rem;
        margin: 0 auto;
    }
`;

const Toggle = styled.div`
    display: flex;
    height: 100%;
    cursor: pointer;
    width: 48px;

    @media ${breakpoints.lg} {
        display: none;
    }
`;

const NavItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: ${({ open }) => open ? `var(--light-green-tint)` : `var(--white)`};
    backdrop-filter: ${({ open}) => open ? `blur(5px)` : `none`};
    border: 1px solid var(--light-green-shadow);
    border-radius: 5px;
    align-items: center;
    position: fixed;
    height: 100vh;
    top: 6vh;
    width: 70vw;
    margin: 0;
    right: ${({ open }) => open ? "0" : "-100%"};
    transition: right ease-out 500ms;
        ul {
            display: flex;
            align-items: center;
            gap: 2rem;
            flex-direction: column;
            padding: 0;
            li {
                list-style-type: none;
                transition: transform 500ms;

                :hover {
                    transform: translateY(-5px);
                }

                a {
                    text-decoration: none;
                    transition: color 300ms, transform 500ms;
                    font-size: 2rem;
                    color: ${({ open }) => open ? `var(--white)` : `var(--light-green)`};

                    :hover {
                        color: var(--dark-green);
                    }
                    &[aria-current="page"] {
                        color: ${({ open }) => open ? `var(--dark-grey)` : `var(--dark-green)`};
                    }
                }
            }
            
        }

        @media ${breakpoints.lg} {
            flex-direction: row;
            justify-content: space-around;
            position: static;
            height: auto;
            width: 300px;
            border: none;
            ul {
                flex-direction: row;
            }
        }
`;

const Hamburger = styled.div`
  background-color: var(--dark-green);
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${({open}) => open ? "rotate(-45deg)" : "inherit"};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: var(--dark-green);
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${({open}) => open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${({open}) => open ? "0" : "1"};
    transform: ${({open}) => open ? "rotate(90deg) " : "rotate(0deg)"};
    top: 10px;
  }

  @media ${breakpoints.lg} {
    display: none;
  }
`;


const NavBar = () => {

    const [navBarOpen, setNavBarOpen] = useState(false)

    const [background, setBackground] = useState(false)

    const changeBackground = () => {
        if (window.scrollY > 25) {
            setBackground(true);
        } else {
            setBackground(false);
        }
    }

    const toggleNavBar = () => setNavBarOpen(open => !open);

    useEffect(() => {
        window.addEventListener('scroll', changeBackground)

        return () => {
            window.removeEventListener('scroll', changeBackground)
        }
    },[window, background])

    useEffect(() => {
        if (window.innerWidth > 1024) {
            setNavBarOpen(false);
        }
    },[window,navBarOpen])

    return (
        <Navigation background={background}>
            <LogoStyle>
                <Link to="/">Performant Web</Link>
            </LogoStyle>
            <Toggle onClick={toggleNavBar}>
                <Hamburger open={navBarOpen} />
            </Toggle>
            <NavItems open={navBarOpen}>
                <ul>
                    <li>
                        <Link to="/" onClick={toggleNavBar}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={toggleNavBar}>About</Link>
                    </li>
                </ul>
            </NavItems>
        </Navigation> 
    )

}


export default NavBar;

