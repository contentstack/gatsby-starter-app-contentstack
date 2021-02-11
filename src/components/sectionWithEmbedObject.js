import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import ReactHtmlParser from "react-html-parser"


const SectionWithEmbedObject = ({ data }) => {
  return (
    <>
      {console.log('SectionWithEmbedObject', data)}
      {data.section_with_embed_object.title ? <h2>{data.section_with_embed_object.title}</h2> : ''}
      {data.section_with_embed_object.description ? <p>{data.section_with_embed_object.description}</p> : ''}
      {data.section_with_embed_object.embed_object ?
        <div className={data.section_with_embed_object.embed_object_alignment === 'Left' ? 'left' : 'right'}>{data.section_with_embed_object.embed_object}</div>
        : ''}
    </>
  )
}

export default SectionWithEmbedObject
