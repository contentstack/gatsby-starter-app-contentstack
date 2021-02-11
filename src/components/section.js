import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import ReactHtmlParser from "react-html-parser"


const Section = ({ data }) => {
  return (
    <>
      <div className="max-width-section">
        <div className="top-section padding-top">
          {data.section.title_h2 ? <h2 className="section-title">{data.section.title_h2}</h2> : ''}
          {data.section.description ? <p className="section-description">{data.section.description}</p> : ''}
          {(data.section.call_to_action.title && data.section.call_to_action.href) ?
            <a className="secondary-btn bannerBtn" href={data.section.call_to_action.href}>{data.section.call_to_action.title}</a>
            : ''}
        </div>
        <div className="buckets padding-both">
          <div className="bucket">
            <div className="inner">
              {data.section.image ? <img src={data.section.image.url} className={data.section.image_alignment === "Left" ? "left sectionImg" : "right sectionImg"} /> : ''}

              {/* <img src="./Image(1).svg" className="sectionImg" /> */}
            </div>
          </div>
        </div>
      </div>
      {console.log('Section', data.section)}
      {/* <div>
        {data.section.title_h2 ? <h2>{data.section.title_h2}</h2> : ''}
        {data.section.image ? <img src={data.section.image.url} className={data.section.image_alignment === "Left" ? "left" : "right"} /> : ''}
        {data.section.description ? <span>{data.section.description}</span> : ''}
        {(data.section.call_to_action.title && data.section.call_to_action.href) ?
          <a href={data.section.call_to_action.href}>{data.section.call_to_action.title}</a>
          : ''}
      </div> */}
    </>
  )
}

export default Section
