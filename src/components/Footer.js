import React, { useState, useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import ReactHtmlParser from "react-html-parser"
import ContentstackLivePreview from "@contentstack/live-preview-utils"
import { livePreview } from "../lib/live-preview"

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
  let footerData = queryLayout()
  const entryUid = footerData.contentstackFooter?.uid
  const [data, setData] = useState(footerData.contentstackFooter)
  
  const fetchLivePreviewData = async () => {
    // pass initial data to livePreview.get()
    const updatedData = await livePreview.get(footerData.contentstackFooter);
    if (updatedData?.uid === entryUid) {
      setData(updatedData)
    }
  }

  useEffect(() => {
    const callbackId = ContentstackLivePreview.onLiveEdit(fetchLivePreviewData);
    return () => ContentstackLivePreview.unsubscribeOnEntryChange(callbackId);
  }, [])

  return (
    <footer>
      <div className="max-width footer-div">
        <div className="col-quarter">
          <Link to="/" className="logo-tag">
            <img
              src={data.logo.url}
              alt="contentstack logo"
              title="Contentstack"
              className="logo footer-logo"
            />
          </Link>
        </div>
        <div className="col-half">
          <nav>
            <ul className="nav-ul">
              {data.navigation.link.map((menu, index) => {
                return (
                  <li className="footer-nav-li" key={index}>
                    <Link to={menu.href}>{menu.title}</Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
        <div className="col-quarter social-link">
          <div className="social-nav">
            {data.social.social_share.map(
              (social, index) => {
                return (
                  <a
                    href={social.link.href}
                    title={social.link.title.toLowerCase()}
                    key={index}
                    className="footer-social-links"
                  >
                    <img src={social.icon.url} />
                  </a>
                )
              }
            )}
          </div>
        </div>
      </div>
      <div className="copyright">
        {data.copyright
          ? ReactHtmlParser(data.copyright)
          : ""}
      </div>
    </footer>
  )
}

export default Footer
