import React from "react"
import TagsList from "./TagsList"
import RecipesList from "./RecipesList"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllRecipes = () => {
  // Long way
  // const data = useStaticQuery(query)
  // console.log(data)
  // const recipes = data.allContentfulRecipe.nodes
  // console.log(recipes)

  // Short way
  const {
    allContentfulRecipe: { nodes: recipes },
  } = useStaticQuery(query)
  console.log(recipes)
  return (
    <div>
      <h3>All Recipes</h3>
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </div>
  )
}

export default AllRecipes
