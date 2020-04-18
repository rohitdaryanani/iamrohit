import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => (
  <Layout>
    <SEO title="Blog" />
    <div
      style={{
        margin: "0px auto",
        height: "100vh",
        maxWidth: "600px",
        padding: "0px 1.0875rem 1.45rem",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <p>writing soon...</p>
    </div>
  </Layout>
)

export default Blog
