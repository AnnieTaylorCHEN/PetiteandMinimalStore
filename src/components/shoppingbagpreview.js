import React from 'react'

import shoppingbag from '../images/shoppingbag.svg'


const ShoppingBagPreview = ({ onClick }) => {
  return (
    <a id="shopping-bag-toggle" onClick={onClick}>
      <span>
        <img src={shoppingbag} alt="shopping bag icon" />
      </span>
      <span
        className="clayer-shopping-bag-items-count tag is-warning is-rounded"
        id="shopping-bag-preview-count"
      >
        0
      </span>
    </a>
  )
}

export default ShoppingBagPreview