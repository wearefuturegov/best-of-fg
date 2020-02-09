import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/Layout"
import PracticeSection from "../components/PracticeSection"
import SearchBox from "../components/SearchBox"
import TeamFilmstrip from "../components/TeamFilmstrip"

const IndexPage = ({
  data
}) => {

  let allArtefacts = data.allArtefactsYaml.edges

  return(
    <Layout>
      <SearchBox 
        artefacts={allArtefacts} 
        index={data.siteSearchIndex.index}
      />
      <TeamFilmstrip/>
      <PracticeSection
        title="Service design 🙌"
        practice="service design"
        allArtefacts={allArtefacts}
        />
      <PracticeSection
        title="Product design 🎨"
        practice="product design"
        allArtefacts={allArtefacts}
        />
      <PracticeSection
        title="Delivery management 🗓"
        practice="delivery management"
        allArtefacts={allArtefacts}
        />
      <PracticeSection
        title="Design research 🧪"
        practice="design research"
        allArtefacts={allArtefacts}
        />
      <PracticeSection
        title="Consultancy and organisation design 📈"
        practice="consultancy and organisation design"
        allArtefacts={allArtefacts}
        />
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery {
    allArtefactsYaml {
      edges {
        node {
          id
          name
          practice
          url
          tags
        }
      }
    }
    siteSearchIndex {
      index
    }
  }
`

export default IndexPage