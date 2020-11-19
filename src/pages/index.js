import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Home = () => (
  <Layout>
    <SEO title="Home" />
    <main>
      <div class="hero">
        <div class="max-width">
          <div class="content">
            <h1>H1 Header Here</h1>
            <p>P1 Paragraph text goes here. Intro statement.</p>
          </div>
        </div>
      </div>
      <div class="max-width">
        <div class="top-section padding-top">
          <h2>H2 Headline goes here</h2>
          <p>P1 Paragraph text goes here. Intro statement.</p>
        </div>
        <div class="buckets padding-both">
          <div class="bucket">
            <div class="inner">
              <h3>H3 Content Headline</h3>
              <p>
                P2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea.
              </p>
            </div>
          </div>
          <div class="bucket">
            <div class="inner">
              <h3>H3 Content Headline</h3>
              <p>
                P2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea.
              </p>
            </div>
          </div>
          <div class="bucket">
            <div class="inner">
              <h3>H3 Content Headline</h3>
              <p>
                P2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea.
              </p>
            </div>
          </div>
          <div class="related-links">
            <h3>Related Pages</h3>
            <p>
              <a href="/blog.html">Read Our Blog</a>
            </p>
            <p>
              <a href="/about.html">About Us</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  </Layout>
)

export default Home
