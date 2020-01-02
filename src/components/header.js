import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const isActive = ({ isCurrent }) => {
  return { className: isCurrent ? "active" : "navlink" }
}

const NavLink = props => <Link getProps={isActive} {...props} />

const Header = ({ siteTitle }) => (
  <header className="header">
    <h1>
      <NavLink to="/">{siteTitle}</NavLink>
    </h1>

    <div className="header__info">
      <h3>
        <NavLink to="/products">Store</NavLink>
      </h3>
      <h3>
        <NavLink to="/blog">Blog</NavLink>
      </h3>
      {/* shopping cart summary */}
      <div
        style={{
          color: "black",
          cursor: "pointer",
          border: "3px solid black",
          padding: "1em",
        }}
        className="snipcart-summary snipcart-checkout"
      >
        <div>
          <strong>My cart</strong>
        </div>
        <div>
          <span className="snipcart-total-items"></span> items added to cart
        </div>
        <div>
          Total price <span className="snipcart-total-price"></span>
        </div>
      </div>
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
