import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { page, text } from "../examples/home.module.css"
import { ExampleButton } from "../examples/button"

export default function Home() {
  return (
    <Layout>
      <div className={page}>
        <ExampleButton>click me</ExampleButton>
        <h1>home page</h1>
        <h1>hello world</h1>
        <h1>hello people</h1>
        <p className={text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad voluptas
          cupiditate dolores fuga nobis quam cumque ullam numquam magni dicta
          voluptatibus, suscipit repellendus maxime nemo placeat! Amet ad
          expedita nemo!{" "}
        </p>
      </div>
    </Layout>
  )
}
