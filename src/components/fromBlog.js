import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import ReactHtmlParser from "react-html-parser"

const fromBlog = ({ data }) => {
  console.log("new", data)
  return (
    <div class="blog-lib">
      <h1>{data.from_blog.title_h2 ? data.from_blog.title_h2 : ""}</h1>
      {data.from_blog.featured_blogs.map(index => {
        return (
          <>
            <a href={index.url}>
              <div>
                <h4>{index.title}</h4>

                {ReactHtmlParser(index.body.slice(0, 80))}
              </div>
            </a>
          </>
        )
      })}
    </div>
  )
}

export default fromBlog
