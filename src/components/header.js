import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import ReactHtmlParser from "react-html-parser"

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
        notification_bar {
          show_announcement
          announcement_text
        }
      }
    }
  `)
  return data
}

const Header = () => {
  let data = queryHeader()
  return (
    <header className="header">
      {data.contentstackHeader.notification_bar.show_announcement ? (
        <div className="note-div">
          {ReactHtmlParser(
            data.contentstackHeader.notification_bar.announcement_text
          )}
        </div>
      ) : (
        ""
      )}
      <div className="max-width header-div">
        <div className="wrapper-logo">
          <Link to="/" className="logo-tag" title="Contentstack">
            <img
              className="logo"
              src={data.contentstackHeader.logo.url}
              alt="Contentstack logo"
            />
          </Link>
        </div>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn">
          <span class="navicon"></span>
        </label>
        <nav>
          <ul className="nav-ul header-ul menu">
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
  )
}

export default Header
