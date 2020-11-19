import React from "react"
import { Link, graphql } from "gatsby"
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = ({ data }) => (
  <Layout>
    <SEO title="Contact" />
    <main class="contact-us">
      <div class="max-width flex padding-both tall">
        <div class="col-half">
          <h2>{data.allContentstackPage.nodes[0].title}</h2>
          {ReactHtmlParser(
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
          </div>
        </div>
        <div class="col-half">
          <div class="contact-form"></div>
        </div>
      </div>
    </main>
  </Layout>
)

export const pageQuery = graphql`
  query {
    allContentstackPage(filter: { title: { eq: "Contact Us" } }) {
      nodes {
        url
        title
        page_components {
          contact_details {
            address
            email
            phone
          }
          rich_text {
            rte
          }
          section {
            description
            title_h1
          }
        }
        seo {
          meta_title
          meta_description
          keywords
          enable_search_indexing
        }
      }
    }
  }
`

export default Contact
