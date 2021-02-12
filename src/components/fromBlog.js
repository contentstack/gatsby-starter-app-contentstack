import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import ReactHtmlParser from "react-html-parser"

const queryArchived = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentstackBlogPost(filter: { is_archived: { eq: true } }) {
        nodes {
          url
          title
          body
        }
      }
    }
  `)
  return data
}

const fromBlog = () => {
  let data = queryArchived()

  console.log("new", data)
  return (
    <div class="blog-lib">
      <h1>Archived Blogs</h1>
      {data.allContentstackBlogPost.nodes.map(index => {
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
