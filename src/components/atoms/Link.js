import React from 'react'

const Link = ({text, href, label}) => {
    return (
        <a href={href} aria-label={label}>
            {text}
        </a>
    )
}

export default Link
