import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const LanguageSelectorNav = ({ shipping, lang }) => {
    const env = process.env.NODE_ENV
    const { allContentfulCountry } = useStaticQuery(graphql`
        {
        allContentfulCountry {
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

  const countries = allContentfulCountry.edges.filter(
    ({ node }) => node.defaultLocale === lang
  )
  
  return (
    
      <div>
        {countries.map(({ node: country }, index) => {
          const langLink =
            env !== 'production'
              ? `/${shipping.toLowerCase()}/${country.code.toLowerCase().replace('us', 'en-us')}/`
              : `/${country.code.toLowerCase().replace('us', 'en-us')}/`
          return (
            <Link
              key={index}
              to={langLink}
              state={{ marketId: country.marketId }}
            >
              {country.defaultLocale}
            </Link>
          )
        })}
      </div>
    
  )
}

LanguageSelectorNav.defaultProps = {
  lang: 'en-us'
}

export default LanguageSelectorNav