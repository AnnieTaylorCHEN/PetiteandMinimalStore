import React from 'react'
import { Link } from 'gatsby'

const Breadcrumb = (props) => {
    const {categorySlug, shop, lang, productSlug, categoryName } = props
    const env = process.env.NODE_ENV
    const home = env !== 'production' ? '/' : 'https://contentful-gatsby-demo.netlify.com/'
    const categoryLink = env !== 'production' ? `/${shop}/${lang.toLowerCase()}` : `/${lang.toLowerCase()}/${categorySlug}`

    return (
        <nav aria-label="breadcrumbs">
            <ul>
                <li>
                    <a href={home}>Home</a>
                </li>
                
                {categorySlug && (
                <li className={productSlug ? '' : 'is-active'}>
                    <Link to={categoryLink}>{categoryName}</Link>
                </li>
                )}
                
            </ul>

        </nav>
    )
}

Breadcrumb.defaultProps = {
    categoryName: ''
  }

export default Breadcrumb