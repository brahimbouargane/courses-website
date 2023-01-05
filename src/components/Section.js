import React from 'react'
import './section.css'

const Section = (props) => {
  return (
    <>
  
    <div className='section-group'>
        <img src={props.logo} alt="logo" className='section-logo'/>
        <div className="section-des">
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    </div>
    </>
  )
}
export default Section;
