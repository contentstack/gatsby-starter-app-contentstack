import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import ReactHtmlParser from "react-html-parser"


const SectionBucket = ({ data }) => {
  return (
    <>
      <div className="sectionBucket">
        <div className="bucketHead">
          {data.section_with_buckets.title_h2 ? <h2 className="bucketTitle">{data.section_with_buckets.title_h2}</h2> : ''}
          {data.section_with_buckets.description ? <p className="bucketDesc">{data.section_with_buckets.description}</p> : ''}
        </div>
        <div className="bucket-row">
          {data.section_with_buckets.buckets.map((bucket, index) => {
            return (
              <div className="bucket-col" key={index}>
                <span className="icon-span"><i className="fa fa-suitcase" aria-hidden="true"></i></span>
                {bucket.title_h3 ? <h3 className="bucket-col-title">{bucket.title_h3}</h3> : ''}
                {bucket.description ? <p className="bucket-col-desc">{ReactHtmlParser(bucket.description)}</p> : ''}
                {bucket.call_to_action.title && bucket.call_to_action.href
                  ?
                  <div className="bucket-cta">
                    <span>{bucket.call_to_action.title}</span>
                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                  </div>
                  : ''}
              </div>
            )
          })}
        </div>
      </div>
      {console.log('Section', data)}
    </>
  )
}

export default SectionBucket
