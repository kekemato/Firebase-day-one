import React from 'react'
import Input from './Input'
import Paper from '../components/Paper'

const NewMessageForm = (props) => (
    <Paper
        style={{
            position: 'fixed',
            bottom: 0,
            zIndex: 100,
            margin: 0,
            width: '100%'
        }}
    >
        <Input
            newMessageText={props.newMessageText}
            handleChange={props.handleChange}
            handleClick={props.handleClick}
        />
    </Paper>

)
export default NewMessageForm