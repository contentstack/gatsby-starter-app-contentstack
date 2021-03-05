import React from "react"
import { Link, graphql } from "gatsby"
import ReactHtmlParser from "react-html-parser"
import moment from "moment"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import HeroBanner from "../components/BlogBanner"
import FromBlog from "../components/FromBlog"

const Blog = props => {
  let { data } = props
  let archived = [],
    blogList = []
  data.allContentstackBlogPost.nodes.forEach(blogs => {
    if (blogs.is_archived) {
      archived.push(blogs)
    } else {
      blogList.push(blogs)
    }
  })

  return (
    <Layout>
      <SEO title="Blog" />
      <HeroBanner />
      <div className="blog-container">
        <div className="blog-column-left">
          {blogList.map((blog, index) => {
            return (
              <div className="blog-list" key={index}>
                {blog.featured_image && (
                  <Link to={blog.url}>
                    <img
                      alt="blog img"
                      className="blog-list-img"
                      src={blog.featured_image.url}
                    />
                  </Link>
                )}
                <div className="blog-content">
                  {blog.title && (
                    <Link to={blog.url}>
                      <h3>{blog.title}</h3>
                    </Link>
                  )}
                  <p>
                    {moment(blog.date).format("ddd, MMM D YYYY")},{" "}
                    <strong>{blog.author[0].title}</strong>
                  </p>
                  {blog.body ? (
                    <p>{ReactHtmlParser(blog.body.slice(0, 300))}</p>
                  ) : (
                    ""
                  )}
                  {blog.url ? (
                    <Link to={blog.url}>
                      <span>{"Read more -->"}</span>
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            )
          })}
        </div>
        <div className="blog-column-right">
          <h2>
            {
              data.allContentstackPage.nodes[0].page_components[1].widget
                .title_h2
            }
          </h2>
          <FromBlog data={archived} />
        </div>
      </div>
    </Layout>
  )
}

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

          widget {
            title_h2
            type
          }
        }
      }
    }

    allContentstackBlogPost {
      nodes {
        url
        title
        uid
        author {
          title
        }
        related_post {
          title
          body
        }
        date
        featured_image {
          url
        }
        is_archived
        body
      }
    }
  }
`

export default Blog
