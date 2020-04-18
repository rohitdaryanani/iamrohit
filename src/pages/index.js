import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
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
      <h1
        style={{
          fontFamily: '"Raleway", sans-serif',
          fontSize: 60,
          fontWeight: 500,
        }}
      >
        I'm Rohit{" "}
        <span
          style={{
            fontSize: 12,
            fontWeight: "bold",
          }}
        >
          {" "}
          /Ro-hit/
        </span>
      </h1>
      <p>
        I’m a software developer, currently living in Singapore. I'm trying to
        <Link
          to="/blog"
          className="blog_link"
          style={{ color: "#000", fontWeight: 600, textDecoration: "none" }}
        >
          {" "}
          write
        </Link>{" "}
        more about my coding journey.
      </p>
      <p>
        Outside of programming, I enjoy video games, sushi, traveling and
        exploring new cultures.
      </p>
      <div
        style={{
          display: "flex",
          width: 110,
          justifyContent: "space-between",
          margin: "0 auto",
        }}
      >
        <a
          href="https://www.instagram.com/rohit.daryanani/"
          style={{ fontSize: 20, textDecoration: "none", color: "#000000" }}
        >
          <i className="jam jam-instagram"></i>
        </a>
        <a
          href="https://github.com/rohitdaryanani/"
          style={{ fontSize: 20, textDecoration: "none", color: "#000000" }}
        >
          <i className="jam jam-github"></i>
        </a>
        <a
          href="https://sg.linkedin.com/in/rohit-daryanani"
          style={{ fontSize: 20, textDecoration: "none", color: "#000000" }}
        >
          <i className="jam jam-linkedin"></i>
        </a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
