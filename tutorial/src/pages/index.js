import React from "react"
import { Link } from "gatsby"
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Hello world!</h1>
      <div>
        <Link to="/about/">about</Link>
      </div>
      <div>
        <Link to="/company/history">history</Link>
      </div>
      <a href="/about">regular link</a>
      <br />
      <a href="https://www.gatsbyjs.com/docs/how-to">gatsby docs</a>
    </div>
  )
}
