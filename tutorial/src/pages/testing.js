import React from "react"
import { graphql } from "gatsby"

const Testing = ({ data }) => {
  console.log(data)
  const author = data.site.info.author
  return (
    <div>
      <h2>Testing</h2>
      <h3>Author: {author}</h3>
    </div>
  )
}

export const data = graphql`
  {
    site {
      info: siteMetadata {
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

export default Testing
