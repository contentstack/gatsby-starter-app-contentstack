import { useStaticQuery, graphql,Link } from "gatsby"
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
  return data.allContentstackBlogPost.nodes.map((index, key) => {
    return (
      <Link href={index.url} key={key}>
        <div>
          <h4>{index.title}</h4>
          {ReactHtmlParser(index.body.slice(0, 80))}
        </div>
      </Link>
    )
  })
}

export default fromBlog
