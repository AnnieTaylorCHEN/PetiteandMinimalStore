import React from "react"
import { Link } from "gatsby"


const Products = (props) => {
  
  const { data, shop, lang, categorySlug }= props
  const env = process.env.NODE_ENV

  return (
    <div>    
        {/* Product list */}
        {data.map((product) => {
          const srcImg = `https:${product.image.file.url}?fm=jpg&q=70`
          const productSlug = product.name.trim().toLowerCase().replace(/\s/gm, '-')
          const productLink = env!== 'production' ? `/${shop}/${lang}/${categorySlug}/${productSlug}` : `/${lang}/${categorySlug}/${productSlug}`
          return (
            <div key={product.id}>
              <Link to={productLink} aria-label={product.name}>
                <img 
                src={srcImg} 
                alt={product.name} />
                <h3>{product.name}</h3>
                <p>Reference: {product.reference}</p>
              </Link>
            </div>
          )
        })}
    </div>
  )
}

export default Products
