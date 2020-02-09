import React from "react"
import styled from "styled-components"
import Card from "../Card"
import theme from "../_theme"

const Outer = styled.section`
    max-width: ${theme.maxWidth};
    margin: 0 auto;
    padding: 20px;
    @media screen and (min-width: 700px){
        padding: 40px 20px;
    }
`

const Headline = styled.h2`
    color: ${theme.black};
    margin-bottom: 20px;
    @media screen and (min-width: 700px){
        font-size: 2rem;
    }
`

const CardList = styled.ul`
    list-style: none;
    display: grid;
    gap: 20px;
    @media screen and (min-width: 500px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 40px;
    }
    @media screen and (min-width: 900px){
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media screen and (min-width: 1200px){
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`

const PracticeSection = ({
    title,
    practice,
    allArtefacts
}) => {
    let filtered = allArtefacts.filter(artefact => artefact.node.practice === practice)
    if (filtered.length) return(
        <Outer id={practice}>
            <Headline>{title}</Headline>
            <CardList>
                {filtered.map(artefact => 
                    <Card 
                        key={artefact.node.id} 
                        {...artefact.node}
                    />  
                )}
            </CardList>
        </Outer>
    )
    return null
}

export default PracticeSection