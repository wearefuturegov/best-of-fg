import React from "react"
import styled from "styled-components"
import theme from "../_theme"

const Outer = styled.footer`
    max-width: ${theme.maxWidth};
    margin: 0 auto;
    padding: 30px 20px;
    color: ${theme.grey};
    p{
        margin-bottom: 10px;
    }
    a{
        color: ${theme.pink};
        text-decoration: none;
        &:hover{
            text-decoration: underline;
        }
        &:focus{
            outline: 3px solid ${theme.yellow};
            background: ${theme.yellow};
        }
    }
`

const Footer = () =>
    <Outer>
        <p>Built and maintained by the FutureGov product team.</p>
        <p><a href="https://futuregov.slack.com/archives/CL11GC5NC" target="blank">Suggest a change</a></p>
    </Outer>

export default Footer