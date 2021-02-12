import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import ReactHtmlParser from "react-html-parser"

const SectionBucket = ({ data }) => {
  console.log("bucket", data)
  return (
    <>
      <div className="sectionBucket">
        <div className="bucketHead">
          {data.section_with_buckets.title_h2 ? (
            <h2 className="bucketTitle">
              {data.section_with_buckets.title_h2}
            </h2>
          ) : (
            ""
          )}
          {data.section_with_buckets.description ? (
            <p className="bucketDesc">
              {data.section_with_buckets.description}
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="bucket-row">
          {data.section_with_buckets.buckets.map((bucket, index) => {
            return (
              <div className="bucket-col" key={index}>
                <span className="icon-span">
                  {bucket.icon&&<img src={bucket.icon.url} alt="bucket icon"/>}
                </span>
                {bucket.title_h3 ? (
                  <h3 className="bucket-col-title">{bucket.title_h3}</h3>
                ) : (
                  ""
                )}
                {bucket.description ? (
                  <p className="bucket-col-desc">
                    {ReactHtmlParser(bucket.description)}
                  </p>
                ) : (
                  ""
                )}
                {bucket.call_to_action.title ? (
                  <div className="bucket-cta">
                    <Link
                      className="bucket-cta-link"
                      to={
                        bucket.call_to_action.href
                          ? bucket.call_to_action.href
                          : "#"
                      }
                    >
                      {bucket.call_to_action.title}{" "}
                      <i
                        className="fa fa-long-arrow-right"
                        aria-hidden="true"
                      ></i>
                    </Link>
                  </div>
                ) : (
                  ""
                )}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default SectionBucket
