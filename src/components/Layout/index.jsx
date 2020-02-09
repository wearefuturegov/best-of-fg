import React from "react"
import Helmet from "react-helmet"
import theme from "../_theme"
import { createGlobalStyle } from "styled-components"
import Header from "../Header"
import Footer from "../Footer"

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Proxima Nova"
    }
    body{
        background-color: ${theme.background};
        @media screen and (min-width: 1200px){
            background-image: linear-gradient(90deg, rgba(229, 221, 244, 0.5) 0.17%, ${theme.background} 0.17%, ${theme.background} 50%, rgba(229, 221, 244, 0.5) 50%, rgba(229, 221, 244, 0.5) 50.17%, ${theme.background} 50.17%, ${theme.background} 100%);
            background-size: 652.00px 652.00px;
            background-position: center;
        }
    }
`

const Layout = ({
    children
}) =>
    <>
        <GlobalStyle/>
        <Helmet>
            <link rel="stylesheet" href="https://use.typekit.net/uru8mtl.css"/>
        </Helmet>
        <Header/>
        {children}
        <Footer/>
    </>

export default Layout