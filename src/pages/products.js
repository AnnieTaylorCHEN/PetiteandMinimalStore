import React from 'react'
import {graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const Products = ({ data: { allContentfulProduct}}) => (
    <Layout>
        <div
        
        >
            <h2>Gatsby Store Products</h2>
            <div 
            style={{
                display: 'flex',
                flexWrap: 'wrap'
            }}>
            {/* Product list */}
            {allContentfulProduct.edges.map(({ node: product }) => (
                <div 
                key={product.id}
                style={{
                    margin: '1em'
                }}
                >
                    <Link to={`/products/${product.slug}`}>
                        <h3>{product.name}</h3>
                    </Link>
                    <Img 
                        style={{maxWidth: 400}}
                        fluid={product.image.fluid}
                    />
                </div>
            ))}
            </div>
        </div>
    </Layout>
)

export const query = graphql `
{
    allContentfulProduct {
        edges {
            node {
                id
                slug
                name
                image {
                    fluid(maxWidth: 800) {
                        ...GatsbyContentfulFluid_tracedSVG
                    }
                }
            }
        }
    }
}
`

export default Products