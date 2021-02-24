import { useStaticQuery, graphql } from "gatsby"
import React from "react"

const queryBlogBanner = () => {
  const data = useStaticQuery(graphql`
    query myQuery {
      allContentstackPage(filter: { title: { eq: "Blog" } }) {
        nodes {
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

const blogHero = () => {
  let data = queryBlogBanner()
  return (
    <>
      <div className="blog-page-banner">
        <div className="blog-page-content">
          {data.allContentstackPage.nodes[0].page_components[0].hero_banner
            .banner_title ? (
            <h1 className="hero-title">
              {
                data.allContentstackPage.nodes[0].page_components[0].hero_banner
                  .banner_title
              }
            </h1>
          ) : (
            ""
          )}

          {data.allContentstackPage.nodes[0].page_components[0].hero_banner
            .banner_description ? (
            <p className="hero-description">
              {
                data.allContentstackPage.nodes[0].page_components[0].hero_banner
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
