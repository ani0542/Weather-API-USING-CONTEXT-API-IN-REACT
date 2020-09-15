import React from 'react'

function Content(props) {
    return (
        <div>
                <div className='content'>
                      {props.children}   
                </div>
        </div>
    )
}

export default Content

