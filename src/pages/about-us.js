import React from "react"
import { Link, graphql } from "gatsby"
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = ({ data }) => (
  <Layout>
    <SEO title="About" />
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
            <h1>
              {data.allContentstackPage.nodes[0].title
                ? data.allContentstackPage.nodes[0].title
                : ""}
            </h1>
            {data.allContentstackPage.nodes[0].page_components.map(index => {
              if (index.rich_text !== null) {
                return <>{ReactHtmlParser(index.rich_text.rte.slice(0, 98))}</>
              }
            })}
          </div>
        </div>
      </div>
      <div class="max-width">
        <div class="buckets padding-both">
          {data.allContentstackPage.nodes[0].page_components.map(index => {
            if (index.section !== null) {
              return index.section.heading.map(i => {
                return (
                  <div class="bucket">
                    <div class="inner">
                      <h3>{i.title_h2}</h3>
                      {ReactHtmlParser(i.description)}
                    </div>
                  </div>
                )
              })
            }
          })}
          <div class="related-links">
            {data.allContentstackPage.nodes[0].related_pages.map(index => {
              return (
                <div>
                  <h3>Related Pages</h3>
                  <p>
                    <Link to={index.url}>{index.title}</Link>
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  </Layout>
)

export const pageQuery = graphql`
  query MyQuery {
    allContentstackPage(filter: { title: { eq: "About Us" } }) {
      nodes {
        page_components {
          contact_details {
            address
            email
            phone
          }
          hero_banner {
            banner_description
            banner_image {
              url
              title
            }
          }
          rich_text {
            rte
          }
          section {
            description
            heading {
              description
              title_h2
            }
            title_h1
          }
        }
        seo {
          enable_search_indexing
          keywords
          meta_description
          meta_title
        }
        title
        url
        related_pages {
          url
          title
        }
      }
    }
  }
`

export default About
