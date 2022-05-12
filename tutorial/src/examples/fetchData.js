import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      siteMetadata {
        person {
          age
          name
        }
        complexData {
          age
          name
        }
        author
        description
        simpleData
      }
    }
  }
`

const FetchData = () => {
  // const data = useStaticQuery(getData)
  const {
    site: { siteMetadata },
  } = useStaticQuery(getData)
  return (
    <div>
      <h1>FetchData</h1>
      {/* <h2>Name: {data.site.siteMetadata.person.name}</h2> */}
      <h2>Name: {siteMetadata.person.name}</h2>
    </div>
  )
}

export default FetchData
