import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"

const queryHeader = () => {
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
      }
    }
  `)
  return data
}

const Header = () => {
  let data = queryHeader()
  return (
    <>
      <header>
        <div className="max-width">
          <div className="wrapper-logo">
            <Link to="/" className="logo-align" title="Contentstack">
              <img
                className="logo"
                src={data.contentstackHeader.logo.url}
                alt="logo"
                width="50px"
                height="50px"
              />
              <span>{data.contentstackHeader.title}</span>
            </Link>
          </div>
          <nav>
            <ul>
              {data.contentstackHeader.navigation_menu.map(index => {
                return (
                  <li>
                    <Link to={index.page_reference[0].url}>{index.label}</Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
