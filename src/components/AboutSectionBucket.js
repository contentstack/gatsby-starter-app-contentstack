import React from "react"
import ReactHtmlParser from "react-html-parser"

const AboutSectionBucket = ({ data }) => {
  function bucketContent(bucket, index) {
    return (
      <div className="mission-content-section" key={index}>
        {bucket.icon && (
          <img className="mission-icon" src={bucket.icon.url} alt="art work" />
        )}

        <div className="mission-section-content">
          {bucket.title_h3 && <h3>{bucket.title_h3}</h3>}
          {bucket.description && <p>{ReactHtmlParser(bucket.description)}</p>}
        </div>
      </div>
    )
  }

  return (
    <div className="member-main-section">
      <div className="member-head">
        {data.section_with_buckets.title_h2 && (
          <h2>{data.section_with_buckets.title_h2}</h2>
        )}
      </div>
      <div className="mission-section">
        <div className="mission-content-top">
          {data.section_with_buckets.buckets.map(
            (bucket, index) => index < 2 && bucketContent(bucket, index)
          )}
        </div>
        <div className="mission-content-bottom">
          {data.section_with_buckets.buckets.map(
            (bucket, index) => index >= 2 && bucketContent(bucket, index)
          )}
        </div>
      </div>
    </div>
  )
}

export default AboutSectionBucket
