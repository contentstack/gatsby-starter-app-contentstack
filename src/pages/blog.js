import React from "react"
import { Link, graphql } from "gatsby"
import ReactHtmlParser from "react-html-parser"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroBanner from "../components/blogBanner"
import FromBlog from "../components/fromBlog"

const Blog = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <HeroBanner />
    <div className="blog-container">
      <div className="blog-column-left">
        {data.allContentstackBlogPost.nodes.map((blog, index) => {
          return (
            <>
              <a href={blog.url} key={index}>
                <div class="blog-list">
                  {blog.featured_image ? (
                    <img class="blog-img" src={blog.featured_image.url} />
                  ) : (
                    ""
                  )}
                  <div class="blog-content">
                    {blog.title ? (
                      <h2 class="blog-content-h2">{blog.title}</h2>
                    ) : (
                      ""
                    )}
                    {blog.body ? (
                      <p class="blog-content-p">
                        {ReactHtmlParser(blog.body.slice(0, 300))}
                      </p>
                    ) : (
                      ""
                    )}
                    {blog.url ? (
                      <a class="blog-list-cta" href={blog.url}>
                        Read More..
                      </a>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </a>
            </>
          )
        })}
      </div>
      <div class="blog-column-right">
        <div class="blog-lib">
          <h1>Archived Blogs</h1>
          <FromBlog />
        </div>
      </div>
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query {
    allContentstackPage(filter: { title: { eq: "Blog" } }) {
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
              is_archived
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
        }
      }
    }

    allContentstackBlogPost(filter: { is_archived: { eq: false } }) {
      nodes {
        url
        title
        uid
        featured_image {
          url
        }
        body
      }
    }
  }
`

export default Blog
