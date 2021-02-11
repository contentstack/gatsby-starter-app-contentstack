import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import ReactHtmlParser from "react-html-parser"


const BlogSection = ({ data }) => {
  return (
    <>
      <div className="blog-section">
        <div className="blog-section-head">
          {data.from_blog.title_h2 ? <h2 className="blog-section-title">{data.from_blog.title_h2}</h2> : ''}
          {data.from_blog.view_articles ?
            <button className="secondary-btn article-btn">{data.from_blog.view_articles.title}</button>
            : ''}
        </div>
        <div className="blog-container">
          {/* {data.from_blog.featured_blogs.map((blog, index) => {
            return (
              <div className="blog-thumbnail"><img src="/Images.svg" className="blogpost-Img" />
                <div className="blog-content">
                  <h3 className="blogpost-title">Optimizing CSS for faster page loads </h3>
                  <p className="blogpost-desc">Nunc, vitae purus vestibulum in pharetra. Lacinia in convallis faucibus
                  id
                  odio. Aenean est faucibus laoreet pharetra, vulputate gravida arcu nulla. Tortor neque nisi
                  quam
                  ac,
                  elementum. Amet id volutpat sem non tincidunt placerat turpis. Elementum viverra arcu cursus
                  enim
                  tellus vel arcu accumsan. Varius ipsum, eu praesent iaculis. Vitae metus, mauris in maecenas
                  suspendisse sem leo tellus. Enim duis odio eu id nisi, tristique at amet. Maecenas dui
                  senectus
                  bibendum a. Tortor sit gravida vel vel dui amet, massa. Hendrerit et accumsan et nulla erat
                  mattis
                            nibh at libero...</p>
                  <div className="blogpost-cta"><span className="blogpost-readmore">Read More</span> <i
                    className="fa fa-long-arrow-right" aria-hidden="true"></i> </div>
                </div>
              </div>
            )
          })} */}
          <div class="blog-thumbnail"><img src="/Images.svg" class="blogpost-Img" />
            <div class="blog-content">
              <h3 class="blogpost-title">Optimizing CSS for faster page loads </h3>
              <p class="blogpost-desc">Nunc, vitae purus vestibulum in pharetra. Lacinia in convallis faucibus
              id
              odio. Aenean est faucibus laoreet pharetra, vulputate gravida arcu nulla. Tortor neque nisi
              quam
              ac,
              elementum. Amet id volutpat sem non tincidunt placerat turpis. Elementum viverra arcu cursus
              enim
              tellus vel arcu accumsan. Varius ipsum, eu praesent iaculis. Vitae metus, mauris in maecenas
              suspendisse sem leo tellus. Enim duis odio eu id nisi, tristique at amet. Maecenas dui
              senectus
              bibendum a. Tortor sit gravida vel vel dui amet, massa. Hendrerit et accumsan et nulla erat
              mattis
                            nibh at libero...</p>
              <div class="blogpost-cta"><span class="blogpost-readmore">Read More</span> <i
                class="fa fa-long-arrow-right" aria-hidden="true"></i> </div>
            </div>
          </div>
          <div class="blog-thumbnail"><img src="/Image(1).svg" class="blogpost-Img" />
            <div class="blog-content">
              <h3 class="blogpost-title">Senectus aliquet quis fusce sit venenatis. </h3>
              <p class="blogpost-desc">Sagittis aliquam diam elementum morbi adipiscing id quam sed aliquet.
              Eu ut
              sit
              tristique cursus adipiscing. Adipiscing vitae a at aliquam nibh diam venenatis amet.
              Fermentum
              nam
              massa, molestie lorem ultrices semper. Et, sagittis nisi, sapien tincidunt mauris malesuada
              pulvinar. Orci auctor vitae volutpat ac nec scelerisque aliquam. Interdum hendrerit faucibus
              venenatis pulvinar diam id. Quis eu hendrerit id tortor facilisi et tortor. Eget id cursus
              tincidunt
              diam cras pretium massa. Suspendisse viverra pharetra turpis arcu aenean viverra vulputate
              ultrices
                            faucibus. Vitae proin tellus.</p>
              <div class="blogpost-cta"><span class="blogpost-readmore">Read More</span> <i
                class="fa fa-long-arrow-right" aria-hidden="true"></i> </div>
            </div>
          </div>
        </div>
      </div>
      {console.log('BlogSection', data)}
    </>
  )
}

export default BlogSection
