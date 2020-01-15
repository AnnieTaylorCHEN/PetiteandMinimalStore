import React from 'react'

import shoppingbag from '../images/shoppingbag.svg'


const ShoppingBagPreview = ({ onClick }) => {
  return (
    <div id="shopping-bag-toggle" role="button" onClick={onClick} onKeyDown={onClick} tabIndex={0}>
      <span>
        <img src={shoppingbag} alt="shopping bag icon" />
      </span>
      <span
        className="clayer-shopping-bag-items-count tag is-warning is-rounded"
        id="shopping-bag-preview-count"
      >
        0
      </span>
    </div>
  )
}

export default ShoppingBagPreview