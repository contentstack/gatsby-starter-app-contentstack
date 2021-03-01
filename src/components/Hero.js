import { Link } from "gatsby"
import React from "react"

const Hero = props => {
  const data = props.data
  return (
    <div
      className="hero-banner"
      style={{
        background: data.hero_banner.bg_color ? data.hero_banner.bg_color : "",
      }}
    >
      <div className={`${props.title == "about" ? "about" : "home"}-content`}>
        {data.hero_banner.banner_title ? (
          <h1 className="hero-title">{data.hero_banner.banner_title}</h1>
        ) : (
          ""
        )}
        {data.hero_banner.banner_description ? (
          <p
            className={`hero-description ${
              props.title == "about" && "about-desc"
            }`}
          >
            {data.hero_banner.banner_description}
          </p>
        ) : (
          ""
        )}
        {data.hero_banner.call_to_action.title &&
        data.hero_banner.call_to_action.href ? (
          <Link
            to={data.hero_banner.call_to_action.href}
            className="btn tertiary-btn"
          >
            {data.hero_banner.call_to_action.title}
          </Link>
        ) : (
          ""
        )}
      </div>
      {data.hero_banner.banner_image ? (
        <img
          alt={data.hero_banner.banner_image.filename}
          src={data.hero_banner.banner_image.url}
        />
      ) : (
        ""
      )}
    </div>
  )
}

export default Hero
