const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

const PostTemplate = path.resolve("./src/templates/post-template.js")
const BlogTemplate = path.resolve("./src/templates/blog-template.js")
const ProductTemplate = path.resolve("./src/templates/product-template.js")
const CatalogTemplate = path.resolve("./src/templates/catalog-template.js")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "posts" })
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const env = process.env.NODE_ENV
  const blog = await graphql(`
  query MyQuery {
      allMarkdownRemark(limit: 1000, filter: {fields: {sourceName: {eq: "blog"}}}) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  //creating the blog pages

  const posts = blog.data.allMarkdownRemark.edges
  posts.forEach(({ node: post }) => {
      createPage({
        path: `/posts${post.fields.slug}`,
        component: PostTemplate,
        context: {
          slug: post.fields.slug,
        },
      })
    })

    const postsPerPage = 3
    const totalPages = Math.ceil(posts.length / postsPerPage)
    //generate a sequence of number from object with length, with "undefined" on each position, the underscore value is "undefined"
    Array.from({ length: totalPages }).forEach((_, index) => {
      const currentPage = index + 1
      const isFirstPage = index === 0
      const isLastPage = currentPage === totalPages

      createPage({
        path: isFirstPage ? "/blog" : `/blog/${currentPage}`,
        component: BlogTemplate,
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          isFirstPage,
          isLastPage,
          currentPage,
          totalPages,
        },
      })
  })
  //above ends the blog page

  //create products pages
  const products = await graphql(`
      query  {
      allContentfulCountry {
        edges {
          node {
            code
            node_locale
            contentful_id
            catalog {
              name
              node_locale
              categories {
                products {
                  name
                  contentful_id
                }
                productsus {
                  contentful_id
                  name
                }
              }
            }
          }
        }
      }
    }
  `)

  const edges = 
    products.data.allContentfulCountry.edges.filter(({ node }) => {
      return node.node_locale !== -1
    })
    
  edges.forEach(({ node}) => {
    const code = node.code.toLowerCase()
    const locale = node.node_locale.toLowerCase()
    if (locale === -1) return null
    const catalogPath = env !== 'production' ? `/${code}/${locale}` : `/${locale}`
      
    //create catalog page
    const categorySlug = node.catalog.categories.map(category => {
      category.name.trim().toLowerCase().replace(' & ', ' ').replace(/\s/gm, '-')})

    createPage({
      path: catalogPath,
      component: CatalogTemplate,
      context: {
        slug: catalogPath,
        language: node.node_locale,
        shipping: node.code, 
        categorySlug,
        pageTitle: node.node_locale,
        marketId: node.marketId
      }
    })
    
    // //create category and product pages
    // node.catalog.categories.map(category => {
    //   const categorySlug = category.name.trim().toLowerCase().replace(' & ', ' ').replace(/\s/gm, '-')
    // //create category page
    // createPage({
    //   path: `/${node.code.toLowerCase()}/${node.node_locale.toLowerCase()}/${categorySlug}`,
    //   component: ProductsTemplate, 
    //   context: {
    //     slug: `/${node.code.toLowerCase()}/${node.node_locale.toLowerCase()}/${categorySlug}`,
    //     language: node.node_locale,
    //     shipping: node.code,
    //     categoryId: category.contentful_id,
    //     categorySlug, 
    //     pageTitle: category.name.trim()
    //   }
    // })
    //create product page
    // category.products.map(product => {
    //   const productSlug = product.name.trim().toLowerCase().replace(/\s/gm, '-')
    //   createPage({
    //     path: `/${node.code.toLowerCase()}/${node.node_locale.toLowerCase()}/${categorySlug}/${productSlug}`, 
    //     component: ProductTemplate,
    //     context: {
    //       slug: `/${node.code.toLowerCase()}/${node.node_locale.toLowerCase()}/${categorySlug}/${productSlug}`,
    //       language: node.node_locale,
    //       shipping: node.code,
    //       categoryId: category.contentful_id,
    //       categorySlug,
    //       categoryName: category.name.trim(),
    //       productId: product.contentful_id,
    //       pageTitle: product.name.trim()
    //     }
    //   })
    // })
  // })

  })

}
