import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import moment from "moment"

const Outer = styled.li`
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0px 4px 40px #D6CEE8;
    transition: 0.2s ease-out;
    min-height: 300px;
    display: flex;
    background: white;
    /* overflow: hidden; */
    position: relative;
    flex-direction: column;
    &:hover, &:focus-within{
        box-shadow: 0px 4px 60px #D6CEE8;
        transform: translateY(-5px)
    }
    @media screen and (min-width: 700px){
        min-height: 350px;
    }
`

const Date = styled.p`
    color: ${theme.grey};
    margin-bottom: 10px;
`

const Name = styled.a`
    font-size: 1.5rem;
    color: ${props => props.color};
    font-weight: bold;
    text-decoration: none;
    margin-bottom: auto;
    &:after{
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        border-radius: 10px;
    }
    &:focus{
        outline: none;
        &:after{
            box-shadow: 0px 0px 0px 3px ${theme.yellow};
        }
    }
`

const Tags = styled.ul`
    list-style: none;
    margin-top: 30px;
`

const Tag = styled.li`
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: bold;
    display: inline-block;
    margin-right: 5px;
    margin-bottom: 5px;
    padding: 5px 15px;
    color: ${props => props.color};
    border: 3px solid ${props => props.color}33;
    border-radius: 100px;
`

const colors = {
    "service design": theme.purple,
    "product design": theme.pink,
    "delivery management": theme.green,
    "design research": theme.purple,
    "consultancy and org design": theme.pink
}

const Card = ({
    name, 
    practice,
    url,
    date,
    tags
}) =>
    <Outer>
        <Date>{moment(date).format("MMM D, YYYY")}</Date>
        <Name href={url} target="blank" color={colors[practice]}>
            {name}
        </Name>
        <Tags>
            {tags.slice(0, 4).map(tag => 
                <Tag key={tag} color={colors[practice]}>{tag}</Tag>    
            )}
        </Tags>
    </Outer>

export default Card