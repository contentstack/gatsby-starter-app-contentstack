import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import ReactHtmlParser from "react-html-parser"


const TeamSection = ({ data }) => {
  return (
    <>
      {data.our_team.title_h2 ? <h2>{data.our_team.title_h2}</h2> : ''}
      {data.our_team.description ? <p>{data.our_team.description}</p> : ''}
      {data.our_team.employees.map((employee, index) => {
        return (
          <div>
            {employee.name ? <h4>{employee.name}</h4> : ''}
            {employee.designation ? <span>{employee.designation}</span> : ''}
            {employee.image ? <img src={employee.image.url} /> : ''}
          </div>
        )
      })}
      {console.log('TeamSection', data)}
    </>
  )
}

export default TeamSection
