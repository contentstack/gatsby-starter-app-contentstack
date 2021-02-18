import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import ReactHtmlParser from "react-html-parser"

const SectionWithEmbedObject = ({ data }) => {
  if (data.section_with_embed_object.embed_object_alignment === "Left") {
    return (
      <>
        <div class="contact-page-section">
          <div class="contact-page-content">
            {data.section_with_embed_object.title ? (
              <h1>{data.section_with_embed_object.title}</h1>
            ) : (
              ""
            )}
            {data.section_with_embed_object.description ? (
              <p>{data.section_with_embed_object.description}</p>
            ) : (
              ""
            )}{" "}
          </div>
          <div class="contact-page-form">
            {data.section_with_embed_object.embed_object ? (
              <>
                {ReactHtmlParser(data.section_with_embed_object.embed_object)}
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      <div class="contact-maps-section">
        <div class="maps-details">
          {ReactHtmlParser(data.section_with_embed_object.embed_object)}
        </div>
        <div class="contact-maps-content">
          {data.section_with_embed_object.title ? (
            <h2>{data.section_with_embed_object.title}</h2>
          ) : (
            ""
          )}
          {data.section_with_embed_object.description ? (
            <p>{data.section_with_embed_object.description}</p>
          ) : (
            ""
          )}{" "}
        </div>
      </div>
    </>
  )
}

export default SectionWithEmbedObject
