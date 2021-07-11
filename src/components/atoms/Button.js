import React from 'react'

const Button = ({text, label, onClick, disabled}) => {
    return (
        <button aria-label={label || text} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    )
}

export default Button
