import React from 'react'
import Layout from '../components/layout'
import { graphql, StaticQuery, Link } from 'gatsby'

const getImageData = graphql`
    query {
        allFile {
            edges {
            node {
                relativePath
                size
                extension
                birthTime
            }
            }
        }
    }`

export default () => {
    return (
        <Layout>
            <h1>hello from page 3</h1>
            <h3>Image File Data</h3>
            <StaticQuery
            query={getImageData}
            render={data => (
                <table>
                    <thead>
                        <tr>
                            <th>Relative Path</th>
                            <th>Size</th>
                            <th>Extension</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.allFile.edges.map((edge, index) => (
                            <tr key={index}>
                                <td>{edge.node.relativePath}</td>
                                <td>{edge.node.size}</td>
                                <td>{edge.node.extension}</td>
                                <td>{edge.node.birthTime}</td>
                            </tr>
                        ) )}
                    </tbody>
                </table>
            )}
            />
            <Link to="/page-2">Page 2</Link>
        </Layout>
    )
}
