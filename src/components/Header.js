import {Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import ReactHtmlParser from "react-html-parser"

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          color: isCurrent ? "#715cdd" : "#222"
        }
      };
    }}
  />
);

const queryHeader = () => {
  const query = graphql`
    query {
      contentstackHeader {
        title
        uid
        logo {
          title
          url
        }
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
  `
  return useStaticQuery(query)
}
const Header = props => {
  let data = queryHeader()
  return (
    <header className="header">
      {data.contentstackHeader.notification_bar.show_announcement ? (
        <div className="note-div">
          {ReactHtmlParser(
            data.contentstackHeader.notification_bar.announcement_text
          )}
        </div>
      ) : null}
      <div className="max-width header-div">
        <div className="wrapper-logo">
          <Link to="/" className="logo-tag" title="Contentstack">
            <img
              className="logo"
              src={data.contentstackHeader.logo.url}
              alt={data.contentstackHeader.title}
              title={data.contentstackHeader.title}
            />
          </Link>
        </div>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>

        <nav className="menu">
          <ul className="nav-ul header-ul">
            {data.contentstackHeader.navigation_menu.map((menu, index) => {
              return (
                <li className="nav-li" key={index}>
                  <NavLink
                    to={menu.page_reference[0].url}
                    activeClassName="active"
                  >
                    {menu.label}
                  </NavLink>
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
