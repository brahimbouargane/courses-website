import React from 'react'
import './cells.css'

export default function Cells(props) {
  return (
    <>
      
        <div className='cell-group'>
            <div className='cell-image'><img src={props.image} alt="bg" /></div>
            <div className='cell-title'>{props.title}</div>
        </div>
    
    </>
  )
}

