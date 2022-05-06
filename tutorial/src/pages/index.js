import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <h1 style={{ color: "red", textTransform: "capitalize" }}>Home page</h1>
      <div>
        <Link to="/about/">about</Link>
      </div>
      <div>
        <Link to="/company/history">history</Link>
      </div>
      <a href="/about">regular link</a>
      <br />
      <a href="https://www.gatsbyjs.com/docs/how-to">gatsby docs</a>
    </Layout>
  )
}
