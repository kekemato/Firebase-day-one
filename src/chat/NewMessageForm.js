import React from 'react'
import Input from './Input'

const NewMessageForm = (props) => (
    <div>
    <Input
        newMessageText={props.newMessageText}
        handleChange={props.handleChange}
        handleClick={props.handleClick}
    />
</div>

)

export default NewMessageForm