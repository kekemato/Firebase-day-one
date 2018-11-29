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
            style={{
                width:"90%",
                marginLeft: "5%",
            }}
        />
        <RaisedButton
            label={'Add message!'}
            onClick={props.handleClick}
            primary={true}
            style={{
                width:"90%",
                marginLeft: "5%",
                marginRight: "5%"
            }}
        />
    </form>
)

export default Input