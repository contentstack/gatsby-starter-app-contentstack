/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 */

import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/style.css"

const Layout = props => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  )
}

export default Layout
