const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

const PostTemplate = path.resolve("./src/templates/post-template.js")
const BlogTemplate = path.resolve("./src/templates/blog-template.js")
const ProductTemplate = path.resolve("./src/templates/product-template.js")
const ProductsTemplate = path.resolve("./src/pages/products.js")

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


  const products = await graphql(`{
    query  {
        allContentfulCountry {
          edges {
            node {
              code
              node_locale
              catalog {
                name
                node_locale
                categories {
                  name
                  products {
                    name
                    contentful_id
                  }
                  contentful_id
                }
              }
            }
          }
        }
      }
  }`)

  //Creating products pages
  products.data.allContentfulCountry.edges.forEach(({ node}) => {
    //create language and shipping country code
    createPage({
      path: `/products/${node.code.toLowerCase()}/${node.node_locale.toLowerCase()}/`,
      component: ProductsTemplate,
      context: {
        slug: `/products/${node.code.toLowerCase()}/${node.node_locale.toLowerCase()}/`,
        language: node.node_locale,
        shipping: node.code
      },
    })
    //create category and product pages
    node.catalog.categories.map(category => {
      const categorySlug = category.name.trim().toLowerCase().replace(' & ', ' ').replace(/\s/gm, '-')
    //create category page
    createPage({
      path: `/products/${node.code.toLowerCase()}/${node.node_locale.toLowerCase()}/${categorySlug}`,
      component: ProductsTemplate, 
      context: {
        slug: `/products/${node.code.toLowerCase()}/${node.node_locale.toLowerCase()}/${categorySlug}`,
        language: node.node_locale,
        shipping: node.code,
        categoryId: category.contentful_id,
        categorySlug, 
        pageTitle: category.name.trim()
      }
    })
    //create product page
    category.products.map(product => {
      const productSlug = product.name.trim().toLowerCase().replace(/\s/gm, '-')
      createPage({
        path: `/products/${node.code.toLowerCase()}/${node.node_locale.toLowerCase()}/${categorySlug}/${productSlug}`, 
        component: ProductTemplate,
        context: {
          slug: `/products/${node.code.toLowerCase()}/${node.node_locale.toLowerCase()}/${categorySlug}/${productSlug}`,
          language: node.node_locale,
          shipping: node.code,
          categoryId: category.contentful_id,
          categorySlug,
          categoryName: category.name.trim(),
          productId: product.contentful_id,
          pageTitle: product.name.trim()
        }
      })
    })
  })

  })

}
