import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


const Header = ({ siteTitle}) => (
  <header className="header">
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>

    <div className="header__info">
      <h3>
        <Link to="/store">Store</Link>
      </h3>
      <h3>
        <Link to="/blog">Blog</Link>
      </h3>
      
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
