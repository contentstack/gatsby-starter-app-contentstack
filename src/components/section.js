import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import ReactHtmlParser from "react-html-parser"

const Section = ({ data }) => {
  return (
    <>
      <div className="max-width-section">
        <div
          className={
            data.section.image_alignment === "Left"
              ? "top-section padding-top section-right "
              : "top-section padding-top  section-left"
          }
        >
          {data.section.title_h2 ? (
            <h2 className="section-title">{data.section.title_h2}</h2>
          ) : (
            ""
          )}
          {data.section.description ? (
            <p className="section-description">{data.section.description}</p>
          ) : (
            ""
          )}
          {data.section.call_to_action.title &&
          data.section.call_to_action.href ? (
            <Link to={data.section.call_to_action.href}>
              <button className="secondary-btn bannerBtn">
                {data.section.call_to_action.title}
              </button>
            </Link>
          ) : (
            ""
          )}
        </div>
        <div className="buckets padding-both">
          <div className="bucket">
            <div className="inner">
              {data.section.image ? (
                <img
                  src={data.section.image.url}
                  className={
                    data.section.image_alignment === "Left"
                      ? "sectionImg section-left"
                      : "sectionImg section-right"
                  }
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section
