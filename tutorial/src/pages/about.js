import React from "react"
import Layout from "../components/Layout"
// import { page, text } from "../examples/about.module.css"
import * as aboutStyles from "../examples/about.module.css"
import styled from "styled-components"

const about = () => {
  return (
    <Layout>
      <Wrapper>
        <h1>about page</h1>
        <p className="text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad voluptas
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad voluptas
        </p>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  color: brown;

  h1 {
    color: yellowgreen;
  }

  .text {
    text-transform: uppercase;
  }
`

export default about
