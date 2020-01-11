import React from 'react'
import { Link, useStaticQuery, graphql} from 'gatsby'

const CountrySelectorNav = ({shipping, language }) => {
    
    const { allContentfulCountry } = useStaticQuery(graphql`
        {
            allContentfulCountry (sort: { fields: name }
            filter: { node_locale: { eq: "en-US" } })  {
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
    const selected = allContentfulCountry.edges.filter(
    ({ node }) => node.code === shipping && node.defaultLocale === language)

    return (
        <div>
            <Link>
                {selected.map((selectedItem, index) => (
                <span key={index}>{selectedItem.defaultLocale}</span>
                ))}
            </Link>   

            <div>
                {countries.map(({ node: country }, index) => {
                const href =`/${country.code.toLowerCase()}/${country.defaultLocale.toLowerCase()}`
                return (
                    <Link key={index} to={href}>{country.code}</Link>
                )
                })}
             </div> 
        </div>
    )

}

CountrySelectorNav.defaultProps = {
    lang: 'en-us'
}

export default CountrySelectorNav