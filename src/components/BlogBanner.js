import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useBehaviorTracking } from "@uniformdev/optimize-tracker-react"
import ContentstackLivePreview from "@contentstack/live-preview-utils"
import { livePreview } from "../lib/live-preview"

const queryBlogBanner = () => {
  const data = useStaticQuery(graphql`
    query myQuery {
      allContentstackPage(filter: { title: { eq: "Blog" } }) {
        nodes {
          uid
          title
          page_components {
            hero_banner {
              banner_title
              banner_description
            }
          }
        }
      }
    }
  `)
  return data
}

const blogHero = ({ intentTags }) => {
  let heroData = queryBlogBanner()
  const entryUid = heroData.allContentstackPage.nodes[0]?.uid;
  const [data, setData] = useState(heroData.allContentstackPage.nodes[0])

  if (intentTags) {
    useBehaviorTracking(intentTags)
  }

  const fetchLivePreviewData = async () => {
    // pass initial data to livePreview.get()
    console.log("fetching ddata")
    const updatedData = await livePreview.get(heroData.allContentstackPage.nodes[0]);
    console.log(data, updatedData)
    if (updatedData?.uid === entryUid) {
      setData(updatedData)
    }
  }

  useEffect(() => {
    const callbackId = ContentstackLivePreview.onLiveEdit(fetchLivePreviewData);
    return () => ContentstackLivePreview.unsubscribeOnEntryChange(callbackId);
  }, [])

  return (
    <>
      <div className="blog-page-banner">
        <div className="blog-page-content">
          {data.page_components[0].hero_banner
            .banner_title ? (
            <h1 className="hero-title">
              {
                data.page_components[0].hero_banner
                  .banner_title
              }
            </h1>
          ) : (
            ""
          )}

          {data.page_components[0].hero_banner
            .banner_description ? (
            <p className="hero-description">
              {
                data.page_components[0].hero_banner
                  .banner_description
              }
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  )
}

export default blogHero
