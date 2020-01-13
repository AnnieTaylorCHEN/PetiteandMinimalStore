import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import facebook from "../images/facebook.svg"
import instagram from "../images/instagram.svg"
import pinterest from "../images/pinterest.svg"

const Footer = () => (
  <footer>
    <section className="newsletter">
      <input placeholder="sign up to our newsletter"></input>
      <button>OK</button>
    </section>

    <section className="social">
      <p>Follow us on social media</p>
      <div>
        <img src={facebook} alt="facebook logo" />
        <img src={instagram} alt="instagram logo" />
        <img src={pinterest} alt="pinterest logo" />
      </div>
    </section>

    <section className="links">
      <h6>
        <Link to="/">Home</Link>
      </h6>
      <h6>
        <Link to="/blog">Blog</Link>
      </h6>
      <h6>
        <Link to="/about">About</Link>
      </h6>
      <h6>
        <Link to="/contact">Contact</Link>
      </h6>
      <h6>
        <Link to="/customerservice">Customer Service</Link>
      </h6>
      <h6>
        <Link to="/responsibility">Responsibility</Link>
      </h6>
      <h6>
        <Link to="/terms">Terms &amp; Conditions</Link>
      </h6>
    </section>

    <section className="copyright">
      <p>
        {" "}
        © 2020, Handmade with &#10084; by{" "}
        <a href="https://www.annietaylorchen.com/">Annie Taylor Chen</a>
      </p>
    </section>
  </footer>
)

Footer.propTypes = {
  siteAuthor: PropTypes.string,
}

Footer.defaultProps = {
  siteAuthor: ``,
}

export default Footer
