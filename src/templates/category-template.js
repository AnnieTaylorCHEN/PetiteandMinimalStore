import React from 'react'
import {graphql } from 'gatsby'

import useShoppingBag from '../hooks'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Breadcrumb from '../components/breadcrumb'
import Products from '../components/products'

export default props => {
    const {
        pageContext: {
            language, shipping, slug, categorySlug, pageTitle
        }, data
    }= props

    console.log(data)
    
    const ship = shipping.toLowerCase()
    const products = 
        data.contentfulCategory[`products${ship}`] &&
        data.contentfulCategory[`products${ship}`].length > 0
        ? data.contentfulCategory[`products${ship}`]
        : data.contentfulCategory.products

    console.log(products)

    const [status, setStatus] = useShoppingBag()

        return (
            <Layout 
            {...props}
            shoppingBagStatus={status}
            setShoppingBagStatus={setStatus}
            >
                <SEO title={pageTitle} />
                <Breadcrumb 
                    shop={shipping.toLowerCase()}
                    lang={language}
                    uri={slug}
                    categorySlug={categorySlug}
                    categoryName={data.contentfulCategory.name.trim()}
                />
                <Products 
                    shop={shipping.toLowerCase()}
                    lang={language.toLowerCase()}
                    categorySlug={categorySlug}
                    data={products}
                />

            </Layout>
        )

    }

    export const query = graphql`
    query ProductsbyCategory ($categoryId: String, $language: String) {
        contentfulCategory(contentful_id: {eq: $categoryId}, node_locale: {eq: $language}) {
            name
            node_locale
            products {
                contentful_id
                name
                reference
                image {
                    file {
                    url
                    }
                }
                variants {
                    code
                }
            }
            productsus {
                contentful_id
                name
                reference
                image {
                    file {
                    url
                    }
                }
                variants {
                    code
                }
            }
        }
    }
    `
