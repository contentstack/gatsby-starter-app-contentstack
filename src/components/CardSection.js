import { Link } from "gatsby"
import React from "react"

const CardSection = ({ data }) => {
  return (
    <div className="demo-section">
      {data.section_with_cards.cards.map((card, index) => {
        return (
          <div className="cards" key={index}>
            {card.title_h3 && <h3>{card.title_h3}</h3>}
            {card.description && <p>{card.description}</p>}
            <div className="card-cta">
              {card.call_to_action.title && card.call_to_action.href ? (
                <Link to={card.call_to_action.href} className="btn primary-btn">
                  {card.call_to_action.title}
                </Link>
              ) : (
                ""
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CardSection
