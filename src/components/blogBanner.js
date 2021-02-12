import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import ReactHtmlParser from "react-html-parser"

const Hero = ({ data }) => {
  return (
    <>
      <div className="blog-banner">
        <div className="blog-content">
          {data.hero_banner.banner_title ? (
            <h1 className="blog-head-title">{data.hero_banner.banner_title}</h1>
          ) : (
            ""
          )}

          {data.hero_banner.banner_description ? (
            <p className="blog-head-desc">{data.hero_banner.banner_description}</p>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  )
}

export default Hero
