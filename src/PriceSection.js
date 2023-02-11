import React from 'react'

const PriceSection = ({label, priceType}) => {
  return (
    <div className="result-section__tip-amount">
      <p>{label} <br /> <span className="result-section__tip-amount--span">/person</span></p>
      <p className="result-section__tip-amount--price">${priceType}</p>
    </div>
  )
}

export default PriceSection