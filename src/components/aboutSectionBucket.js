import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import ReactHtmlParser from "react-html-parser"


const AboutSectionBucket = ({ data }) => {
  return (
    <>
      <div className="sectionBucket about-bucket">
        <div className="bucketHead about-bucket-head">
          {data.section_with_buckets.title_h2 ? <h2 className="bucketTitle">{data.section_with_buckets.title_h2}</h2> : ''}
          {data.section_with_buckets.description ? <p className="bucketDesc">{data.section_with_buckets.description}</p> : ''}
        </div>
        <div className="about-bucket-container">
          <div className="about-bucket-row">
            {data.section_with_buckets.buckets.map((bucket, index) => {
              return (
                <div className="about-bucket-col" key={index}>
                  <span class="about-span-icon">
                    {bucket.icon ? <img src={bucket.icon.url} alt="art work" /> : ''}
                  </span>

                  <div className="about-bucket-div">
                    {bucket.title_h3 ? <h3 className="bucket-col-title">{bucket.title_h3}</h3> : ''}
                    {bucket.description ? <p className="bucket-col-desc">{ReactHtmlParser(bucket.description)}</p> : ''}
                  </div>


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
      </div>
      {console.log('Section', data)}
    </>
  )
}

export default AboutSectionBucket;
