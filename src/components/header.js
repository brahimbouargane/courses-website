import * as React from "react"
import { Link } from "gatsby"
import {CgMenu,CgClose} from 'react-icons/cg';
import './header.css'
import logo from '../images/logom.png'
import { useState } from "react";
import classNames from 'classnames';


const Header = ({ siteTitle }) => {
  const [isOpen,setIsOpen] = useState(false)
return(
  <div className="header">
    <Link to="/"><img src={logo} alt="logo" className="logo" /></Link>
    <div className={classNames('nav-menu', isOpen && 'show-menu')}>
      <Link to="/courses">Courses</Link>
      <Link to="/download">Download</Link>
      <Link to="/workshops">Workshops</Link>
      <Link to="/buy"><button>Buy</button></Link>
    </div>
    <div className="menu">
    <CgMenu className={classNames('menu-icon', isOpen && 'hide')}  onClick={()=>setIsOpen(!isOpen)}/>
    <CgClose className={classNames('close-icon', isOpen && 'show')}  onClick={()=>setIsOpen(!isOpen)}/>
    </div>
  </div>
)
}

export default Header
