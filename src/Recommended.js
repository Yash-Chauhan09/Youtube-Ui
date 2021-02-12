import React from 'react'
import './Recommended.css'

function Recommended({title,selected}) {
    return (
        <div className='recommended'>
            <h3 className={`recommended__title ${selected && "selected"}`}>{title}</h3>
        </div>
    )
}

export default Recommended
