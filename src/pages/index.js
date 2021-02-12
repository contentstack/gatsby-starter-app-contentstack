import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Section from "../components/section"
import SectionBucket from "../components/sectionBucket"
import BlogSection from "../components/blogSection"
import CardSection from "../components/cardSection"

const Home = ({ data }) => (
  <Layout>
    {console.log("EEE", data)}
    <SEO title="Home" />
    <main>
      {data.allContentstackPage.nodes[0].page_components
        ? data.allContentstackPage.nodes[0].page_components.map(
            (component, index) => {
              if (component["hero_banner"]) {
                return <Hero data={component} key={index} />
              }
              if (component["section"]) {
                return <Section data={component} key={index} />
              }
              if (component["section_with_buckets"]) {
                return <SectionBucket data={component} key={index} />
              }
              if (component["from_blog"]) {
                return <BlogSection data={component} key={index} />
              }
              if (component["section_with_cards"]) {
                return <CardSection data={component} key={index} />
              }
            }
          )
        : ""}

      {/* <div class="hero">
        <div class="max-width">
          <div class="content">
            <h1>{data.allContentstackPage.nodes[0].title}</h1>
            <p>P1 Paragraph text goes here. Intro statement.</p>
          </div>
        </div>
      </div> */}
      {/* <div class="max-width">
        <div class="top-section padding-top">
          <h2>H2 Headline goes here</h2>
          <p>P1 Paragraph text goes here. Intro statement.</p>
        </div>
        <div class="buckets padding-both">
          <div class="bucket">
            <div class="inner">
              <h3>H3 Content Headline</h3>
              <p>
                P2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea.
              </p>
            </div>
          </div>
          <div class="bucket">
            <div class="inner">
              <h3>H3 Content Headline</h3>
              <p>
                P2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea.
              </p>
            </div>
          </div>
          <div class="bucket">
            <div class="inner">
              <h3>H3 Content Headline</h3>
              <p>
                P2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea.
              </p>
            </div>
          </div>
          <div class="related-links">
            <h3>Related Pages</h3>
            <p>
              <a href="/blog.html">Read Our Blog</a>
            </p>
            <p>
              <a href="/about.html">About Us</a>
            </p>
          </div>
        </div>
      </div> */}
    </main>
  </Layout>
)

export const pageQuery = graphql`
  query {
    allContentstackPage(filter: { title: { eq: "Home" } }) {
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

export default Home
