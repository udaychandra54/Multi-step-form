import React from 'react'

function Card(props) {
    return (
        <div className='card shadow border-0 p-5 mt-5'>
            {props.children}
        </div>
    )
}

export default Card
