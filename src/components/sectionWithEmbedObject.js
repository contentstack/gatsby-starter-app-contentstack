import React from "react"
import ReactHtmlParser from "react-html-parser"

const SectionWithEmbedObject = ({ data }) => {
  if (data.section_with_embed_object.embed_object_alignment === "Left") {
    return (
      <div className="contact-page-section">
        <div className="contact-page-content">
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
        <div className="contact-page-form">
          {data.section_with_embed_object.embed_object ? (
            <>{ReactHtmlParser(data.section_with_embed_object.embed_object)}</>
          ) : (
            ""
          )}
        </div>
      </div>
    )
  }
  return (
    <>
      <div className="contact-maps-section">
        <div className="maps-details">
          {ReactHtmlParser(data.section_with_embed_object.embed_object)}
        </div>
        <div className="contact-maps-content">
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
