import React from "react"
import Fade from "react-reveal/Fade"
import personalData from "../personal-data"

const Promotion = () => {
  const data = personalData()
  return (
    <div className="section">
      <div className="container">
        <div className="promotion-container">
          <Fade bottom cascade>
            <h1>{data.promotionHeading}</h1>
          </Fade>
          <p>{data.promotionPara}</p>
        </div>
      </div>
    </div>
  )
}

export default Promotion
