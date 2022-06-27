import React from "react"
import setupTags from "../utils/setupTags"

const TagsList = ({ recipes }) => {
  const newTags = setupTags(recipes)
  console.log(newTags)

  return (
    <div>
      <h3>TagsList</h3>
    </div>
  )
}

export default TagsList
