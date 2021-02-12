import React from "react"
import { Link, graphql } from "gatsby"
import ReactHtmlParser from "react-html-parser"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroBanner from "../components/blogBanner"
import FromBlog  from '../components/fromBlog'

function dateSetter(params) {
  const date = new Date(params)
  const yy = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date)
  const mm = new Intl.DateTimeFormat("en", { month: "short" }).format(date)
  const dd = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date)
  return `${mm}-${dd}-${yy}`
}

const Blog = ({ data }) => (
  <Layout>
    {console.log("blog", data)}
    <SEO title="Blog" />
    <main>
      {data.allContentstackPage.nodes[0].page_components
        ? data.allContentstackPage.nodes[0].page_components.map(
            (component, index) => {
              if (component["hero_banner"]) {
                return <HeroBanner data={component} />
              }
            }
          )
        : ""}
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
                          {ReactHtmlParser(blog.body.slice(0,300))}
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
        {data.allContentstackPage.nodes[0].page_components
        ? data.allContentstackPage.nodes[0].page_components.map(
            (component, index) => {
              if (component["from_blog"]) {
                return <FromBlog data={component} /> 
              }
            }
          )
        : ""}
        </div>
      </div>
    </main>
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

    allContentstackBlogPost {
      nodes {
        title
        url
        uid
        body
        featured_image {
          title
          url
        }
      }
    }
  }
`

export default Blog

// export const pageQuery = graphql`
//   query {
//     allContentstackBlogPost {
//       nodes {
//         url
//         title
//         body
//         date
//         author {
//           bio
//           title
//           url
//           picture {
//             url
//             title
//           }
//         }
//         related_post {
//           url
//           title
//           author {
//             url
//             title
//             picture {
//               url
//               title
//               description
//             }
//           }
//         }
//         seo {
//           enable_search_indexing
//           keywords
//           meta_description
//           meta_title
//         }
//       }
//     }
//     allContentstackPage(filter: { title: { eq: "Blog" } }) {
//       nodes {
//         url
//         title
//         page_components {
//           hero_banner {
//             banner_description
//             banner_image {
//               url
//               title
//               uid
//             }
//           }
//         }
//       }
//     }
//   }
// `
