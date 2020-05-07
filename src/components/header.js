import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

import ShoppingBagPreview from "./shoppingbagpreview"
import CountrySelectorNav from "./countryselectornav"

const Header = ({
  siteTitle,
  shipping,
  lang,
  shoppingBagPreviewProps: { onClick },
}) => {
  const [isActive, setActiveBurger] = useState(false)
  const active = isActive ? "is-active" : ""
  const handleActive = () => setActiveBurger(!isActive)
  const handleShoppingBag = () => {
    onClick()
    handleActive()
  }

  return (
    <header className="header">
      <Link to="/">
        <h1>{siteTitle}</h1>
      </Link>
      <div className="nav-container">
        {shipping && <CountrySelectorNav shipping={shipping} lang={lang} />}
        <div className={` shoppingbagicon ${active}`}>
          {shipping && <ShoppingBagPreview onClick={handleShoppingBag} />}
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
