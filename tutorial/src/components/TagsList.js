import React from "react"
import setupTags from "../utils/setupTags"

const TagsList = ({ recipes }) => {
  setupTags(recipes)
  const newTags = setupTags(recipes)

  return (
    <div>
      <h3>TagsList</h3>
    </div>
  )
}

export default TagsList
