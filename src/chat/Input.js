import React from 'react'
import { TextField } from 'material-ui'
import Button from '../components/Button'

const Input = (props) => (
    <div>
        <TextField
            type="text"
            hintText="Type new message"
            value={props.newMessageText}
            onChange={props.handleChange}
            fullWidth={true}
        />
        <Button
            label={'Add message!'}
            onClick={props.handleClick}
        />
    </div>
)

export default Input