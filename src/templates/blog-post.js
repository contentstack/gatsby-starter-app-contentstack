import React from "react"
import { Link, graphql } from "gatsby"
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser"

import Layout from "../components/layout"
import SEO from "../components/seo"

const dateSetter=(params)=> {
  const date = new Date(params)
  const yy = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date)
  const mm = new Intl.DateTimeFormat("en", { month: "short" }).format(date)
  const dd = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date)
  return `${mm}-${dd}-${yy}`
}

export default function blogPost({ data }) {
  return (
    <Layout>
      <SEO title="Home" />
      <main class="blog-post">
        <div class="max-width flex padding-both tall">
          <div class="col-quarter">
            <div class="page-thumb padding-bottom">
              <img src="https://via.placeholder.com/200x140" alt="Blog Title" />
            </div>
          </div>
          <div class="col-half">
            <h2>
              {data.contentstackBlogPost.title
                ? data.contentstackBlogPost.title
                : ""}
            </h2>
            <p class="blog-meta">
              <span class="date">
                {dateSetter(data.contentstackBlogPost.date)
                  ? dateSetter(data.contentstackBlogPost.date)
                  : ""}
              </span>
              <span class="author">
                {data.contentstackBlogPost.author[0].title
                  ? data.contentstackBlogPost.author[0].title
                  : ""}
              </span>
            </p>
            <div class="blog-content">
              {ReactHtmlParser(data.contentstackBlogPost.body)
                ? ReactHtmlParser(data.contentstackBlogPost.body)
                : ""}
            </div>
          </div>
          <div class="col-quarter">
            <div class="padding-left">
              <h3>Related Blogs</h3>
              {data.contentstackBlogPost.related_post.map(index => {
                if (index != null) {
                  return (
                    <p>
                      <Link href={`/blog${index.url}`}>{index.title}</Link>
                    </p>
                  )
                }
              })}
            </div>
          </div>
        </div>
      </main>
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
