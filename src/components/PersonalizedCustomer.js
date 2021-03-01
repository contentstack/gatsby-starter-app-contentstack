import React from "react"
import { Personalize } from "@uniformdev/optimize-tracker-react"
import { contentstackOptimizeListReader } from "@uniformdev/optimize-tracker-contentstack"
import Customer from "./Customer"

const PersonalizedCustomer = props => {
  const data = props.data.personalized_component.reference[0].customer_type
  const contentstackEntries = data.map(entry => {
    return {
      ...entry,
      _content_type_uid: entry.internal.type,
    }
  })
  const contentstackVariations = contentstackOptimizeListReader(
    contentstackEntries
  )
  return (
    <div className="member-main-section personalized-component">
      <div className="member-head">
        <Personalize variations={contentstackVariations} component={Customer} />
      </div>
    </div>
  )
}

export default PersonalizedCustomer
