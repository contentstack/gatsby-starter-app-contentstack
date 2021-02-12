import React from "react"
import { Link, graphql } from "gatsby"
import ReactHtmlParser from "react-html-parser"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Section from "../components/section"
import SectionBucket from "../components/sectionBucket"
import TeamSection from "../components/teamSection"

const About = ({ data }) => (
  <Layout>
    <SEO title="About" />
    {console.log("About", data)}

    {data.allContentstackPage.nodes[0].page_components
      ? data.allContentstackPage.nodes[0].page_components.map(
          (component, index) => {
            if (component["hero_banner"]) {
              return <Hero data={component} />
            }
            if (component["section"]) {
              return <Section data={component} />
            }
            if (component["section_with_buckets"]) {
              return <SectionBucket data={component} />
            }
            if (component["our_team"]) {
              return <TeamSection data={component} />
            }
          }
        )
      : ""}

    {/* <div
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
              return index.section.heading.map(index => {
                return (
                  <div class="bucket">
                    <div class="inner">
                      <h3>{index.title_h2}</h3>
                      {ReactHtmlParser(index.description)}
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
      </div> */}
  </Layout>
)

export const pageQuery = graphql`
  query {
    allContentstackPage(filter: { title: { eq: "About Us" } }) {
      nodes {
        title
        url
        uid
        seo {
          enable_search_indexing
          keywords
          meta_description
          meta_title
        }
        page_components {
          contact_details {
            address
            email
            phone
          }
          from_blog {
            title_h2
            featured_blogs {
              title
              uid
              url
              featured_image {
                title
                url
              }
              body
              author {
                title
                url
                uid
                bio
              }
            }
            view_articles {
              title
              href
            }
          }
          hero_banner {
            banner_description
            banner_title
            banner_image {
              title
              url
            }
            call_to_action {
              title
              href
            }
          }
          our_team {
            title_h2
            description
            employees {
              name
              designation
              image {
                title
                url
              }
            }
          }
          rich_text {
            rte
          }
          section {
            title_h2
            description
            image {
              title
              url
            }
            image_alignment
            call_to_action {
              title
              href
            }
          }
          section_with_buckets {
            title_h2
            description
            buckets {
              title_h3
              description
              icon {
                title
                url
              }
              call_to_action {
                title
                href
              }
            }
          }
          section_with_cards {
            cards {
              title_h3
              description
              call_to_action {
                title
                href
              }
            }
          }
          section_with_embed_object {
            title
            embed_object_alignment
            embed_object
            description
          }
        }
      }
    }
  }
`

export default About
