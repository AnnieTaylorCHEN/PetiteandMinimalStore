const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

const PostTemplate = path.resolve("./src/templates/post-template.js")
const BlogTemplate = path.resolve("./src/templates/blog-template.js")

const ProductTemplate = path.resolve("./src/templates/product-template.js")
const CategoryTemplate =path.resolve("./src/templates/category-template.js")
const CatalogTemplate = path.resolve("./src/templates/catalog-template.js")


exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  
    if (node.internal.type === "MarkdownRemark" && node.fields.sourceName
     === "blog") {
      const slug = createFilePath({ node, getNode, basePath: "posts" })
      console.log('slug :', slug)
      createNodeField({
        node,
        name: "slug",
        value: slug
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
  //---------------- above ends the blog page

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
                  name
                  contentful_id
                  products {
                    contentful_id
                    name
                  }
                  productsus {
                    contentful_id
                    name
                  }
                }
              }
              marketId
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
    const catalogPath = env !== 'production' ? `/${code}/${locale}/` : `/${locale}/`
    console.log('catalog path',  catalogPath)
     //create catalog page - indicating the all products for a specific region/country
    createPage({
      path: catalogPath,
      component: CatalogTemplate,
      context: {
        slug: catalogPath,
        language: node.node_locale,
        shipping: node.code, 
        pageTitle: node.code,
        marketId: node.marketId
      }
    })
    
    //create category page 
    node.catalog.categories.map(category => {
      const categorySlug = category.name.trim().toLowerCase().replace(/\s/gm, '-')
      const categoryPath = env !== 'production'
          ? `/${code}/${locale}/${categorySlug}`
          : `/${locale}/${categorySlug}`
      console.log('category path: ', categoryPath)
      console.log('categoryId: ', category.contentful_id)
      console.log('categorySlug: ', categorySlug)
    createPage({
      path: categoryPath,
      component: CategoryTemplate, 
      context: {
        slug: categoryPath,
        language: node.node_locale,
        shipping: node.code,
        categoryId: category.contentful_id,
        categorySlug,
        pageTitle: category.name.trim(), 
        marketId: node.marketId
      }
    })
    

    //create product page
    const products = category[`products${code}`] ? category[`products${code}`] :category.products

    products.map(product => {
      const productSlug = product.name.trim().toLowerCase().replace('%','percent').replace(/\s/gm, '-')
      const productPath = env !== 'production'
            ? `/${code}/${locale}/${productSlug}`
            : `/${locale}/${productSlug}`
      console.log('product path: ', productPath)
      console.log('productSlug: ', productSlug)
      createPage({
        path: productPath, 
        component: ProductTemplate,
        context: {
          slug: productPath,
          language: node.node_locale,
          shipping: node.code,
          categoryId: category.contentful_id,
          categorySlug,
          categoryName: category.name.trim(),
          productId: product.contentful_id,
          pageTitle: product.name.trim(),
          marketId: node.marketId
        }
      })
    })
  })

  })

}
