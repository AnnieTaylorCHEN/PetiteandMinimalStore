import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

import ShoppingBagPreview from './shoppingbagpreview'


const Header = ({ siteTitle, shipping, lang, shoppingBagPreviewProps : {onClick} }) => {
  
  const [isActive, setActiveBurger] = useState(false)
  const active = isActive ? 'is-active' : ''
  const handleActive = () => setActiveBurger(!isActive)
  const handleShoppingBag = () => {
    onClick()
    handleActive()
  }

  return (
     <header className="header">
      <Link to="/"><h1>{siteTitle}</h1></Link>
      <div >

      {/* {shipping && (
            <a
              role="button"
              className={`navbar-burger ${active}`}
              aria-label="menu"
              aria-expanded="false"
              onClick={handleActive}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
        )} */}

        <div className={` shoppingbagicon ${active}`}>
          <div>
            {shipping && <ShoppingBagPreview onClick={handleShoppingBag} />}
          </div>
        </div>
    </div>
  </header>

  )
 
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
