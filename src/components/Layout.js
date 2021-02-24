/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 */

import React from "react"
import Header from "./Header"
import Footer from "./Footer"
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
