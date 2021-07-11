import React from 'react'

const Card = (props) => {
    return (
        <div style={{background: 'gainsboro'}}>
            {props.children}
        </div>
    )
}

export default Card
