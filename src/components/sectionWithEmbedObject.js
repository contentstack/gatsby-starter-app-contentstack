import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import ReactHtmlParser from "react-html-parser"


const SectionWithEmbedObject = ({ data }) => {
  if (data.section_with_embed_object.embed_object_alignment === 'Left') {
    return (
      <>
        <div className="container" >
          <div className="column-left">
            {data.section_with_embed_object.embed_object ?
              <div>{ReactHtmlParser(data.section_with_embed_object.embed_object)}</div>
              : ''}
          </div>
          <div className="column-right">
            <div className="section">
              {data.section_with_embed_object.title ? <h2>{data.section_with_embed_object.title}</h2> : ''}
              {data.section_with_embed_object.description ? <p>{data.section_with_embed_object.description}</p> : ''}
            </div>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      <div className="container" >
        <div className="column-left">
          <div className="section">
            {data.section_with_embed_object.title ? <h2>{data.section_with_embed_object.title}</h2> : ''}
            {data.section_with_embed_object.description ? <p>{data.section_with_embed_object.description}</p> : ''}
          </div>
        </div>
        <div className="column-right">
          {data.section_with_embed_object.embed_object ?
            <div>{ReactHtmlParser(data.section_with_embed_object.embed_object)}</div>
            : ''}
        </div>
      </div>
    </>
  )
}

export default SectionWithEmbedObject
