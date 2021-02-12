import React from "react"
import { Link, graphql } from "gatsby"
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FromBlog from "../components/fromBlog"
import HeroBanner from "../components/blogBanner"

const dateSetter = params => {
  const date = new Date(params)
  const yy = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date)
  const mm = new Intl.DateTimeFormat("en", { month: "short" }).format(date)
  const dd = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date)
  return `${mm}-${dd}-${yy}`
}

export default function blogPost({ data }) {
  console.log("S",data)
  return (
    <Layout>
      <SEO title="Home" />
       <HeroBanner/>
        <div class="blog-container">
          <div class="blog-detail">
            <h1>
              {data.contentstackBlogPost.title
                ? data.contentstackBlogPost.title
                : ""}
            </h1>
            <p>{ReactHtmlParser(data.contentstackBlogPost.body)}</p>
          </div>
          <div class="blog-column-right">
            <div class="related-post">
              <h1>Related Post</h1>
              <FromBlog />
            </div>
          </div>
        </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query($title: String!) {
    contentstackBlogPost(title: { eq: $title }) {
      url
      title
      body
      date
      author {
        url
        title
        bio
        picture {
          url
          title
        }
      }
      related_post {
        body
        url
        title
        date
      }
      seo {
        enable_search_indexing
        keywords
        meta_description
        meta_title
      }
    }
  }
`
