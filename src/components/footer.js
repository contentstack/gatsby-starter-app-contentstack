import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser"

const queryLayout = () => {
  const data = useStaticQuery(graphql`
    query {
      contentstackHeader {
        title
        navigation_menu {
          label
          page_reference {
            url
          }
        }
        logo {
          url
          title
        }
      }
      contentstackFooter {
        title
        social_share_title
        social_share {
          icon {
            url
            title
          }
          link {
            href
            title
          }
        }
        copyright
      }
    }
  `)
  return data
}

const Footer = () => {
  let data = queryLayout()
  return (
    <>
      <footer>
        <div class="max-width flex">
          <div class="col-quarter">
            <Link to="/" className="logo-align" title="Contentstack">
              <img
                src={data.contentstackHeader.logo.url}
                alt="demo"
                width="50px"
                height="50px"
              />
              <span>{data.contentstackHeader.title}</span>
            </Link>
          </div>
          <div class="col-half">
            <nav>
              <ul>
                {data.contentstackHeader.navigation_menu.map(index => {
                  return (
                    <>
                      <li>
                        <Link to={index.page_reference[0].url}>
                          {index.label}
                        </Link>
                      </li>
                    </>
                  )
                })}
              </ul>
            </nav>
          </div>
          <div class="col-quarter">
            <div class="social-nav">
              <a href="https://facebook.com" title="facebook">
                <span class="fa-1x fa-stack">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-stack-1x fa-inverse fa-facebook"> </i>
                </span>
              </a>
              <a href="https://twitter.com" title="twitter">
                <span class="fa-1x fa-stack">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-stack-1x fa-inverse fa-twitter"> </i>
                </span>
              </a>
              <a href="https://linkedin.com" title="linkedin">
                <span class="fa-1x fa-stack">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-stack-1x fa-inverse fa-linkedin"> </i>
                </span>
              </a>
            </div>
            <div class="copyright">
              {data.contentstackFooter.copyright
                ? ReactHtmlParser(data.contentstackFooter.copyright)
                : ""}
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
