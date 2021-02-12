import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import ReactHtmlParser from "react-html-parser"


const TeamSection = ({ data }) => {
  return (
    <>
      <div className="team-section">
        <div className="team-header">
          {data.our_team.title_h2 ? <h2 className="team-title">{data.our_team.title_h2}</h2> : ''}
          {data.our_team.description ? <p className="team-dec">{data.our_team.description}</p> : ''}
        </div>
        <div className="employees-section">
          {data.our_team.employees.map((employee, index) => {
            return (
              <div className="employ-card" key={index}>
                {employee.image ? <img className="employ-Img" src={employee.image.url} /> : ''}
                {employee.name ? <h3 className="employ-name">{employee.name}</h3> : ''}
                {employee.designation ? <p className="employ-desc">{employee.designation}</p> : ''}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default TeamSection
