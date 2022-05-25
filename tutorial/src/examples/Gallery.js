import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const query = graphql`
  {
    allFile(filter: { extension: { ne: "svg" } }) {
      nodes {
        name
        childImageSharp {
          id
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            transformOptions: { grayscale: true }
          )
        }
      }
    }
  }
`

const Gallery = () => {
  const data = useStaticQuery(query)
  console.log(data)
  return (
    <div>
      <h1>Simple Image Gallery</h1>
    </div>
  )
}

export default Gallery
