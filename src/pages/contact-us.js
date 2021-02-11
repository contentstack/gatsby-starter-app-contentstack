import React from "react";
import { Link, graphql } from "gatsby";
import ReactHtmlParser from "react-html-parser";
import Layout from "../components/layout";
import SEO from "../components/seo";
import SectionWithEmbedObject from "../components/sectionWithEmbedObject";

const Contact = ({ data }) => (
  <Layout>
    {console.log('contact', data)}
    <SEO title="Contact" />
    <main class="contact-us">
      <div class="max-width flex padding-both tall">
      {data.allContentstackPage.nodes[0].page_components ?
        data.allContentstackPage.nodes[0].page_components.map((component, index) => {
          if (component['section_with_embed_object']) {
            return (
              <SectionWithEmbedObject data={component} />
            )
          }
        })
        : ''
      }

        <div class="col-half">
          <h2>{data.allContentstackPage.nodes[0].title}</h2>
          {/* {ReactHtmlParser(
            data.allContentstackPage.nodes[0].page_components[0].rich_text.rte
          )}
          <div class="address-block padding-bottom">
            <h3>H3 Content Headline</h3>
            {data.allContentstackPage.nodes[0].page_components.map(index => {
              if (index.contact_details !== null) {
                return (
                  <>
                    <p>{index.contact_details.address}</p>
                    <p>{index.contact_details.phone}</p>
                    <p>{index.contact_details.email}</p>
                  </>
                )
              }
            })}
          </div> */}
        </div>
        {/* <div class="col-half">
          <div class="contact-form"></div>
        </div> */}
      </div>
    </main>
  </Layout>
)

export const pageQuery = graphql`
  query {
    allContentstackPage(filter: { title: { eq: "Contact Us" } }) {
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

export default Contact
