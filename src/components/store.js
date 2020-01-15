 
import React from 'react'
import {graphql, useStaticQuery } from 'gatsby'


const Store = (props) => {

  const {
    allContentfulCountry: { edges }
  } = useStaticQuery(graphql`
    {
      allContentfulCountry {
        edges {
          node {
            name
            node_locale
            code
          }
        }
      }
    }
  `)

  return (
    <>
        <div className="store blog-container">
        <h2>Choose store:</h2>
        {edges.map((country, index) => {
              const href = `/${country.node.code.toLowerCase()}/${country.node.node_locale.toLowerCase()}/`
                
              return (
                <div key={index} className="country" >
                    <a title={country.node.name} href={href}>
                       <h3> {country.node.name} </h3>
                    </a>  
                </div>
              )
            })}
        </div>
    </>
    )
}


export default Store