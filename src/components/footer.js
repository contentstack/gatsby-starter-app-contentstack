import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import ReactHtmlParser from "react-html-parser"

const queryLayout = () => {
  const data = useStaticQuery(graphql`
    query {
      contentstackFooter {
        title
        uid
        footer_color
        logo {
          url
          title
        }
        navigation {
          navigation_title
          link {
            href
            title
          }
        }
        social {
          social_share_title
          social_share {
            link {
              href
              title
            }
            icon {
              url
              title
            }
          }
        }
        copyright
      }
    }
  `)
  return data
}

const Footer = () => {
  let data = queryLayout();
  console.log('data foo', data);
  return (
    <>
      <footer>
        <div className="max-width footer-div">
          <div className="col-quarter">
            <Link to="/" className="logo-tag">
              <img
                src={data.contentstackFooter.logo.url}
                alt="contentstack logo"
                title="Contentstack"
                className="logo footer-logo"
              />
            </Link>
          </div>
          <div className="col-half">
            <nav>
              <ul className="nav-ul">
                {data.contentstackFooter.navigation.link.map((menu, index) => {
                  return (
                    <>
                      <li className="nav-li" key={index}>
                        <Link to={menu.href}>
                          {menu.title}
                        </Link>
                      </li>
                    </>
                  )
                })}
              </ul>
            </nav>
          </div>
          <div className="col-quarter social-link">
            <div className="social-nav">
              {data.contentstackFooter.social.social_share.map((social, index) => {
                return (
                  <a href={social.link.href} title={social.link.title.toLowerCase()} key={index}>
                    <span className="fa-1x fa-stack">
                      <i className={"fa fa-stack-1x fa-inverse fa-" + social.link.title.toLowerCase()}> </i>
                    </span>
                  </a>
                )
              })}
            </div>
            <div className="copyright">
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
