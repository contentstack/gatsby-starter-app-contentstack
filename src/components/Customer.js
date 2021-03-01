import React from "react"

const Customer = props => {
  return (
    <>
      {props.title ? <h2>{props.title}</h2> : ""}
      {props.description ? <p>{props.description}</p> : ""}
    </>
  )
}

export default Customer
