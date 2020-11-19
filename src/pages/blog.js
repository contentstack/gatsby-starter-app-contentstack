import React from "react"
import { Link, graphql } from "gatsby"
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser"

import Layout from "../components/layout"
import SEO from "../components/seo"

function dateSetter(params) {
  const date = new Date(params)
  const yy = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date)
  const mm = new Intl.DateTimeFormat("en", { month: "short" }).format(date)
  const dd = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date)
  return `${mm}-${dd}-${yy}`
}

const Blog = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <main>
      <div
        class="hero short"
        style={{
          background: `url(${
            data.allContentstackPage.nodes[0].page_components[0].hero_banner
              .banner_image
              ? data.allContentstackPage.nodes[0].page_components[0].hero_banner
                  .banner_image.url
              : ""
          })`,
        }}
      >
        <div class="max-width">
          <div class="content">
            <h1>{data.allContentstackPage.nodes[0].title}</h1>
            <p>
              {data.allContentstackPage.nodes[0].page_components[0].hero_banner
                .banner_description
                ? data.allContentstackPage.nodes[0].page_components[0]
                    .hero_banner.banner_description
                : ""}
            </p>
          </div>
        </div>
      </div>
      <div class="max-width blog-roll padding-top">
        {data.allContentstackBlogPost.nodes.map(index => {
          return (
            <Link class="blog-entry padding-bottom" to={`/blog${index.url}`}>
              <div class="thumb">
                <img
                  src="https://via.placeholder.com/200x140"
                  alt="Blog Title"
                />
              </div>
              <div class="content">
                <div class="inner">
                  <h3>{index.title}</h3>
                  <cite>
                    <span class="date">
                      {dateSetter(index.date) ? dateSetter(index.date) : ""}
                    </span>
                    <span class="author">
                      {index.author[0].title ? index.author[0].title : ""}
                    </span>
                  </cite>
                  <p class="description">
                    {ReactHtmlParser(index.body)
                      ? ReactHtmlParser(index.body.slice(0, 210))
                      : ""}
                  </p>
                  <p class="cta">Read More</p>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </main>
  </Layout>
)

export const pageQuery = graphql`
  query {
    allContentstackBlogPost {
      nodes {
        url
        title
        body
        date
        author {
          bio
          title
          url
          picture {
            url
            title
          }
        }
        related_post {
          url
          title
          author {
            url
            title
            picture {
              url
              title
              description
            }
          }
        }
        seo {
          enable_search_indexing
          keywords
          meta_description
          meta_title
        }
      }
    }
    allContentstackPage(filter: { title: { eq: "Blog" } }) {
      nodes {
        url
        title
        page_components {
          hero_banner {
            banner_description
            banner_image {
              url
              title
              uid
            }
          }
        }
      }
    }
  }
`

export default Blog
