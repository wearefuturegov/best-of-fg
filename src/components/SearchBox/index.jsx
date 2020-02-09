import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import spyglass from "./spyglass.svg"
import Result from "./Result"
import { Index } from "elasticlunr"

const Outer = styled.section`
    max-width: ${theme.maxWidth};
    margin: 0 auto;
    padding: 20px;
    padding-bottom: 70px;
`

const Form = styled.form`
    position: relative;
    max-width: 500px;
`

const Input = styled.input`
    font-size: 1.1rem;
    color: ${theme.black};
    padding: 20px 25px;
    border-radius: 100px;
    width: 100%;
    border: none;
    background: white;
    box-shadow: 0px 4px 40px #D6CEE833;
    &:focus{
        outline: none;
        box-shadow: 0px 0px 0px 3px ${theme.yellow};
    }
    @media screen and (min-width: 700px){
        font-size: 1.2rem;
    }
`

const Button = styled.button`
    background: ${theme.pinkGradient};
    position: absolute;
    right: 0px;
    top: 0px;
    height: 100%;
    padding: 0px 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 0px 100px 100px 0px;
    &:focus{
        outline: none;
        box-shadow: 0px 0px 0px 3px ${theme.yellow};
    }
`

const Icon = styled.img`
    width: 22px;
`

const Results = styled.ul`
    display: grid;
    gap: 20px;
    margin-top: 40px;
    @media screen and (min-width: 700px) {
        gap: 40px;
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (min-width: 900px){
        grid-template-columns: 1fr 1fr 1fr;
    }
`

const Headline = styled.h2`
    background: ${theme.pinkGradient};
    border-radius: 10px;
    padding: 25px;
    color: white;
    min-height: 200px;
    font-size: 2rem;
    display: flex;
    align-items: flex-end;
    grid-row: 1 / 2;
    /* @media screen and (min-width: 700px){
        font-size: 2.5rem;
    } */
`


class SearchBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          query: ``,
          results: [],
        }
    }

    getOrCreateIndex = () => this.index ? this.index : Index.load(this.props.index)

    search = e => {
        const query = e.target.value
        this.index = this.getOrCreateIndex()
        this.setState({
            query,
            // Query the index with search string to get an [] of IDs
            results: this.index
                .search(query, {})
                // Map over each ID and return the full document
                .map(({ ref }) => this.index.documentStore.getDoc(ref)),
        })
    }

    render(){
        console.log(this.state.results)
        return(
            <Outer>
                <Form method="get">
                    <Input 
                        required
                        placeholder="eg. journey map" 
                        name="query"
                        value={this.state.query} 
                        onChange={this.search}
                    />
                    <Button><Icon src={spyglass} alt="Search"/></Button>
                </Form>
                {this.state.results.length > 0 &&
                    <Results>
                        <Headline>Showing {this.state.results.length} search results</Headline>
                        {this.state.results.map(result => 
                            <Result key={result.id} {...result}/>
                        )}
                    </Results>
                }
            </Outer>
        )
    }
}
export default SearchBox