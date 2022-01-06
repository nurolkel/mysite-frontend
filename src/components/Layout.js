import React from "react";
import NavBar from "./NavBar";
import GlobalStyles from "../styles/GlobalStyles";
import Footer from "./Footer";



const Layout = ({ children }) => (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    )


export default Layout;