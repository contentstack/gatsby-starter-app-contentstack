import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import ReactHtmlParser from "react-html-parser"

const CardSection = ({ data }) => {
  return (
    <>
      <div className="card-section">
        <div className="card-row">
          {data.section_with_cards.cards.map((card, index) => {
            return (
              <div className="card-col" key={index}>
                {card.title_h3 ? (
                  <h3 className="card-title">{card.title_h3}</h3>
                ) : (
                  ""
                )}
                {card.description ? (
                  <p className="card-desc">{card.description}</p>
                ) : (
                  ""
                )}
                <div className="card-cta">
                  {card.call_to_action.title && card.call_to_action.href ? (
                    <button className="primary-btn">
                      {card.call_to_action.title}
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {console.log("CardSection", data)}
    </>
  )
}

export default CardSection
