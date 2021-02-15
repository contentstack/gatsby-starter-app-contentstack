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

export default function blogPost({ data }) {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroBanner />
      <div className="blog-container">
        <div className="blog-detail">
          <h1>
            {data.contentstackBlogPost.title
              ? data.contentstackBlogPost.title
              : ""}
          </h1>
          <p>{ReactHtmlParser(data.contentstackBlogPost.body)}</p>
        </div>
        <div className="blog-column-right">
          <div className="related-post">
            <h1>{data.contentstackPage.page_components[2].widget.title_h2}</h1>
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
    contentstackPage {
      page_components {
        widget {
          title_h2
          type
        }
      }
    }
  }
`
