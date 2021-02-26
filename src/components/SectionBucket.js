import { Link } from "gatsby"
import React from "react"
import ReactHtmlParser from "react-html-parser"

const SectionBucket = ({ data }) => {
  return (
    <div className="member-main-section">
      <div className="member-head">
        {data.section_with_buckets.title_h2 ? (
          <h2>{data.section_with_buckets.title_h2}</h2>
        ) : (
          ""
        )}
        {data.section_with_buckets.description ? (
          <p>{data.section_with_buckets.description}</p>
        ) : (
          ""
        )}
      </div>
      <div className="member-section">
        {data.section_with_buckets.buckets.map((bucket, index) => {
          return (
            <div className="content-section" key={index}>
              {bucket.icon && <img src={bucket.icon.url} alt="bucket icon" />}

              {bucket.title_h3 ? <h3>{bucket.title_h3}</h3> : ""}
              {bucket.description && ReactHtmlParser(bucket.description)}
              {bucket.call_to_action.title ? (
                <Link
                  to={
                    bucket.call_to_action.href
                      ? bucket.call_to_action.href
                      : "#"
                  }
                >
                  {`${bucket.call_to_action.title} -->`}
                </Link>
              ) : (
                ""
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SectionBucket
