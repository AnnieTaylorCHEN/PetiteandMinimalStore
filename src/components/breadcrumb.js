import React from 'react'
import { Link } from 'gatsby'

const Breadcrumb = (props) => {
    const {categorySlug, shop, lang, productSlug, categoryName } = props
    
    const env = process.env.NODE_ENV
    const home = env !== 'production' ? `/${shop}/${lang.toLowerCase()}` : `/${shop}/${lang.toLowerCase()}`
    const categoryLink = env !== 'production' ? `/${shop}/${lang.toLowerCase()}/${categorySlug}` : `/${shop}/${lang.toLowerCase()}/${categorySlug}`
    const productLink = env !== 'production' ? `/${shop}/${lang.toLowerCase()}/${categorySlug}/${productSlug}` : `/${shop}/${lang.toLowerCase()}/${categorySlug}/${productSlug}`

    return (
        <nav className="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <li>
                    <a href={home}>Home</a>
                </li>
                
                {categorySlug && (
                <li className={productSlug ? '' : 'is-active'}>
                    <Link to={categoryLink}>{categoryName}</Link>
                </li>
                )}

                {productSlug && (
                <li className="is-active">
                    <Link to={productLink}>{productSlug}</Link>
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