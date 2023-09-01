import React, { useState, useEffect } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import ReactHtmlParser from "react-html-parser"
import ContentstackLivePreview from "@contentstack/live-preview-utils"
import { livePreview } from "../lib/live-preview"

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
  `
  return useStaticQuery(query)
}
const Header = props => {
  let headerData = queryHeader()
  const entryUid = headerData.contentstackHeader?.uid;
  const [data, setData] = useState(headerData.contentstackHeader)

  const fetchLivePreviewData = async () => {
    // pass initial data to livePreview.get()
    const updatedData = await livePreview.get(headerData.contentstackHeader);
    if (updatedData?.uid === entryUid) {
      setData(updatedData)
    }
  }

  useEffect(() => {
    const callbackId = ContentstackLivePreview.onLiveEdit(fetchLivePreviewData);
    return () => ContentstackLivePreview.unsubscribeOnEntryChange(callbackId);
  }, [])

  return (
    <header className="header">
      {data.notification_bar.show_announcement ? (
        <div className="note-div">
          {ReactHtmlParser(
            data.notification_bar.announcement_text
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
              src={data.logo.url}
              alt="Contentstack logo"
            />
          </Link>
        </div>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>

        <nav className="menu">
          <ul className="nav-ul header-ul">
            {data.navigation_menu.map((menu, index) => {
              return (
                <li className="nav-li" key={index}>
                  {/* <Link to={menu.page_reference[0].url}>{menu.label}</Link> */}
                  {props.property.uri.includes(menu.page_reference[0].url) &&
                    menu.label !== "Home" ? (
                    <Link className="active" to={menu.page_reference[0].url}>
                      {menu.label}
                    </Link>
                  ) : props.property.uri == "/" && menu.label == "Home" ? (
                    <Link to={menu.page_reference[0].url} className="active">
                      {menu.label}
                    </Link>
                  ) : (
                    <Link to={menu.page_reference[0].url}>{menu.label}</Link>
                  )}
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
