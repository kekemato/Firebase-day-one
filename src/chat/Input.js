import React from 'react'
import { TextField } from 'material-ui'
import RaisedButton from 'material-ui/RaisedButton'

const Input = (props) => (
    <form
    onSubmit={props.handleClick}>
        <TextField
            type="text"
            hintText="Type new message"
            value={props.newMessageText}
            onChange={props.handleChange}
            fullWidth={true}
        />
        <RaisedButton
            label={'Add message!'}
            onClick={props.handleClick}
            fullWidth={true}
            primary={true}
        />
    </form>
)

export default Input