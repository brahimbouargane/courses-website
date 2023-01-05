import * as React from "react"
import { Link } from "gatsby"
import {CgMenu,CgClose} from 'react-icons/cg';
import './header.css'
import logo from '../images/logom.png'
import { useState,useEffect } from "react";
import classNames from 'classnames';


const Header = ({ siteTitle }) => {
  const [isOpen,setIsOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll',
    handleScroll)
  })
  const handleScroll = (e) =>{
    const scrollTop = window.pageYOffset
 
    if (scrollTop > 50){
      setHasScrolled(true);
    }else{
      setHasScrolled(false);
    }
  }
return(
  <div className={hasScrolled ? 'header header-scrolled' : 'header'}>
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
