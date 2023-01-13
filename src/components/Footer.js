import React, { Children } from 'react'
import './Footer.css'

export default function Footer({children}) {
  return (
    <>
        <div className="footer-group">
            <p className="footer-text">Tweet now for learning how to build UIs with ReactJs and Gatsby</p>
            <button className="footer-btn">Tweet
            </button>
            <div className="link-group">
                <a href="#">Home</a>
                <a href="#">Workshops</a>
                <a href="#">Contact</a>
                <a href="#">Privacy</a>
                <a href="#">About</a>
                <a href="#">Blogs</a>
            </div>
            <div className="copyRight"> {children}</div>
        </div>
    </>
  )
}
