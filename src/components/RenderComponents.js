import React from "react"

import Hero from "./Hero"
import Section from "./Section"
import BlogSection from "./BlogSection"
import CardSection from "./CardSection"
import TeamSection from "./TeamSection"
import SectionBucket from "./SectionBucket"
import AboutSectionBucket from "./AboutSectionBucket"
import SectionWithEmbedObject from "./SectionWithEmbedObject"

const RenderComponents = props => {
  const { components, about } = props
  return (
    <>
      {components?.map((component, index) => {
        if (component["hero_banner"]) {
          return (
            <Hero data={component} title={about ? "about" : ""} key={index} />
          )
        }
        if (component["section"]) {
          return <Section data={component} key={index} />
        }
        if (component["section_with_buckets"]) {
          return about ? (
            <AboutSectionBucket data={component} key={index} />
          ) : (
            <SectionBucket data={component} key={index} />
          )
        }
        if (component["from_blog"]) {
          return <BlogSection data={component} key={index} />
        }
        if (component["section_with_cards"]) {
          return <CardSection data={component} key={index} />
        }
        if (component["section_with_embed_object"]) {
          return <SectionWithEmbedObject data={component} key={index} />
        }
        if (component["our_team"]) {
          return <TeamSection data={component} key={index} />
        }
      })}
    </>
  )
}
export default RenderComponents
