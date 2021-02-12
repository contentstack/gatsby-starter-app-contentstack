/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 */

import React from "react"
import Header from "./header"
import Footer from "./footer"
import '../styles/style.css'

// const Wrapper = props => {
//   return <>{props.children}</>
// }

const Layout = props => {
  return (
    <>
      <Header />
      {/* <Wrapper> */}
      <main>{props.children}</main>
      <Footer />
      {/* </Wrapper> */}
    </>
  )
}

export default Layout
