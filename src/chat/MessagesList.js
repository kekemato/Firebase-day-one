import React from 'react'
import moment from 'moment'

import DeleteIcon from 'material-ui/svg-icons/action/delete'
import IconButton from 'material-ui/IconButton'
import { List, ListItem } from 'material-ui/List'
import Paper from '../components/Paper'

const MessagesList = (props) => (
    <Paper>
        <List>
            {props.messages.map(message => (
                <ListItem
                    key={message.key}
                    primaryText={message.text}
                    secondaryText={moment(message.timestamp).format('DD-MM-YYYY hh:mm')}
                    rightIconButton={
                        <IconButton>
                            <DeleteIcon
                            onClick={() => console.log(message.key)}
                            />
                        </IconButton>
                    }>
                </ListItem>)
            )}
        </List>
    </Paper>
)

export default MessagesList