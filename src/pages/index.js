import React, { useState, useEffect } from "react"
import ContentstackLivePreview from "@contentstack/live-preview-utils"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import RenderComponents from "../components/RenderComponents"
import { UniformTracker } from "@uniformdev/optimize-tracker-react"
import { localTracker } from "../lib/local-tracker"
import { livePreview } from "../lib/live-preview"

const Home = props => {
  const entryUid = props.data.allContentstackPage.nodes[0]?.uid
  const [data, setData] = useState(props.data.allContentstackPage.nodes[0])
  const trackerInstance = localTracker

  const fetchLivePreviewData = async () => {
    // pass initial data to livePreview.get()
    const updatedData = await livePreview.get(props.data.allContentstackPage.nodes[0]);
    if (updatedData?.uid === entryUid) {
      setData(updatedData)
    }
  }

  useEffect(() => {
    const callbackId = ContentstackLivePreview.onLiveEdit(fetchLivePreviewData);
    return () => ContentstackLivePreview.unsubscribeOnEntryChange(callbackId);
  }, [])

  return (
    <UniformTracker trackerInstance={trackerInstance}>
      <Layout property={props}>
        <SEO title="Home" />
        {data.page_components ? (
          <RenderComponents
            components={data.page_components}
          />
        ) : (
          ""
        )}
      </Layout>
    </UniformTracker>
  )
}

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
            bg_color
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
          personalized_component {
            reference {
              customer_type {
                title
                description
                unfrm_opt_intent_tag
                internal {
                  type
                }
                link {
                  title
                  href
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Home
