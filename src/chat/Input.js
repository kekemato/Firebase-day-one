import React from 'react'

const Input = (props) => (
    <div>
        <input
            type="text"
            value={props.newMessageText}
            onChange={props.handleChange} />
        <button
            onClick={props.handleClick}
        >
            Coś
        </button>
    </div>
)

export default Input