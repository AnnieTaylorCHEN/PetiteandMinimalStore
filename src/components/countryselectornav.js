import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const CountrySelectorNav = ({ shipping, language }) => {
  const { allContentfulCountry } = useStaticQuery(graphql`
    {
      allContentfulCountry(
        sort: { fields: name }
        filter: { node_locale: { eq: "en-US" } }
      ) {
        edges {
          node {
            name
            marketId
            defaultLocale
            code
          }
        }
      }
    }
  `)

  const countries = allContentfulCountry.edges

  return (
    <div className="dropdown">
      <div className="dropbtn">Ship to your country</div>
      <div className="dropdown-content">
        {countries.map(({ node: country }, index) => {
          const href = `/${country.code.toLowerCase()}/${country.defaultLocale.toLowerCase()}`
          return (
            <Link key={index} to={href}>
              {country.name}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

CountrySelectorNav.defaultProps = {
  lang: "en-us",
}

export default CountrySelectorNav
