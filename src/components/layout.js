/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import * as CLayer from 'commercelayer-react'

import Header from "./header"
import Footer from "./footer"
import ShoppingBag from './shoppingbag'

import "../css/style.css"

const Layout = ({ 
  children, 
  location, 
  shoppingBagStatus,
  setShoppingBagStatus, 
  ...props
 }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  const {
    pageContext: { shipping, language, marketId }
  } = props
  
  const sectionOpacity = shoppingBagStatus ? 'open' : ''

  return (
    <>
      <Header 
      siteTitle={data.site.siteMetadata.title}
      shipping={shipping}
      lang={language}
      shoppingBagPreviewProps={{
          onClick: setShoppingBagStatus
        }}
       />

      <section id="main" className={`section ${sectionOpacity}`}>
        <main className="container">{children}</main>
      </section>
        
      <Footer siteAuthor={data.site.siteMetadata.author} />

      <ShoppingBag
        lang={language}
        open={shoppingBagStatus}
        close={setShoppingBagStatus}
      />
      
      <CLayer.Config
        baseUrl="https://petiteminimal.commercelayer.io"
        clientId="9ffaf636e288070f50725524b83d26e0af7760b9e3c5c9715129ece387671d4c"
        marketId={marketId}
        countryCode={shipping ? shipping.toUpperCase() : 'US'}
        languageCode={
          language ? language.toLowerCase().replace('-us', '') : 'en'
        }
        cartUrl="https://petiteandminimalstore.netlify.com/"
        returnUrl="https://petiteandminimalstore.netlify.com/"
        privacyUrl="https://petiteandminimalstore.netlify.com/"
        termsUrl="https://petiteandminimalstore.netlify.com/"
      />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  location: {
    pathname: ''
  }
}

export default Layout
