import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import ReactHtmlParser from "react-html-parser"

const BlogSection = ({ data }) => {
  return (
    <div className="blog-section">
      <div className="blog-section-head">
        {data.from_blog.title_h2 ? (
          <h2 className="blog-section-title">{data.from_blog.title_h2}</h2>
        ) : (
          ""
        )}
        {data.from_blog.view_articles ? (
          <Link to={data.from_blog.view_articles.href}>
            <button className="secondary-btn article-btn">
              {data.from_blog.view_articles.title}
            </button>
          </Link>
        ) : (
          ""
        )}
      </div>
      <div className="home-blog-container">
        {data.from_blog.featured_blogs.map((blog, index) => {
          return (
            <div className="blog-thumbnail" key={index}>
              {blog.featured_image ? (
                <img src={blog.featured_image.url} className="blogpost-Img" />
              ) : (
                ""
              )}
              <div className="home-blog-content">
                {blog.title ? (
                  <h3 className="blogpost-title">{blog.title}</h3>
                ) : (
                  ""
                )}
                {blog.body ? (
                  <p className="blogpost-desc">
                    {ReactHtmlParser(blog.body.slice(0, 500) + "...")}
                  </p>
                ) : (
                  ""
                )}
                <div className="blogpost-cta">
                  <Link className="blogpost-readmore" to={blog.url}>
                    {"Read More -->"}
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BlogSection
