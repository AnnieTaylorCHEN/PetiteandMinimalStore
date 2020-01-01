import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const ProductTemplate = ({ data : { contentfulProduct }, location }) => (
    <Layout>
    <div
    style={{
        margin: '0 auto',
        width: '100%',
        textAlign: 'center'

    }}>
        {/* Prpduct info */}
        <h2>{contentfulProduct.name}</h2>
        <p>{contentfulProduct.description}</p>
        <p>$ {contentfulProduct.price}</p>
        <button
        style={{
            background: 'blue',
            color: 'white',
            padding: '0.5em',
            margin: '0.5em',
            borderRadius: '5px',
            cursor: 'pointer',
            border: 'none'
        }}
        className="snipcart-add-item"
        data-item-id={contentfulProduct.id}
        data-item-price={contentfulProduct.price}
        data-item-image={contentfulProduct.image.file.url}
        data-item-name={contentfulProduct.name}
        data-item-url={location.pathname}
        >Add to Cart</button>
        <Img fluid={contentfulProduct.image.fluid} />
    </div>
    </Layout>
)

export const query = graphql`
    query ($slug: String!) {
        contentfulProduct (slug: { eq: $slug}){
            id
            name
            price
            description
            image {
                fluid(maxWidth: 800) {
                    ...GatsbyContentfulFluid
                }
                file {
                url
                }
            }
            
        }
    }
`

export default ProductTemplate