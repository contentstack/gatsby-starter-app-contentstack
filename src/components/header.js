import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"

const queryHeader = () => {
  const data = useStaticQuery(graphql`
    query {
      contentstackHeader {
        title
        uid
        logo {
          title
          url
        }
        header_color
        navigation_menu {
          label
          page_reference {
            title
            url
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
        <div className="note-div">
          <p className="note-display">
            To Our Community: Please read this important update.
          </p>
        </div>
        <div className="max-width">
          <div className="wrapper-logo">
            <Link to="/" className="logo-tag" title="Contentstack">
              <img
                className="logo"
                src={data.contentstackHeader.logo.url}
                alt="Contentstack logo"
              />
            </Link>
          </div>
          <nav>
            <ul className="nav-ul">
              {data.contentstackHeader.navigation_menu.map((menu, index) => {
                return (
                  <li className="nav-li" key={index}>
                    <Link to={menu.page_reference[0].url}>{menu.label}</Link>
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
