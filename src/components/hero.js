import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import ReactHtmlParser from "react-html-parser"


const Hero = ({ data }) => {
  return (
    <>
      <div className="hero">
        <div className="max-width-banner">
          <div className="content hero-content">
            {data.hero_banner.banner_title ? <h1 className="heroTitle">{data.hero_banner.banner_title}</h1> : ''}
            {data.hero_banner.banner_description ? <p className="heroDescription">{data.hero_banner.banner_description}</p> : ''}
            {(data.hero_banner.call_to_action.title && data.hero_banner.call_to_action.href) ?
              <a href={data.hero_banner.call_to_action.href} className="thirdBtn">{data.hero_banner.call_to_action.title}</a>
              : ''}
          </div>
          <div className="heroImgDiv">{data.hero_banner.banner_image ? <img className="heroBannerImg" src={data.hero_banner.banner_image.url} /> : ''}</div>
        </div>
      </div>
      {console.log('hero', data)}
    </>
  )
}

export default Hero
