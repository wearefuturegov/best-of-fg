import React from "react"
import styled from "styled-components"
import logo from "./logo.svg"
import theme from "../_theme"

const Outer = styled.header`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  padding: 50px 20px;
  @media screen and (min-width: 700px){
    padding: 70px 20px;
  }
`

const Logo = styled.img`
  margin-bottom: 20px;
  width: 100%;
  max-width: 600px;
  @media screen and (min-width: 700px){
    margin-bottom: 40px;
  }
`

const Intro = styled.p`
  color: ${theme.black};
  font-size: 1.2rem;
  max-width: 600px;
  line-height: 1.5;
  @media screen and (min-width: 700px){
    font-size: 1.5rem;
  }
`

const Header = () => 
    <Outer>
        <Logo src={logo} alt="The Best of FutureGov"/>
        <Intro>Explore examples of our best work, to inspire you and keep us moving forward. Explore by practice or search for keywords.</Intro>
    </Outer>

export default Header