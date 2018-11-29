import React from 'react'
import moment from 'moment'

import DeleteIcon from 'material-ui/svg-icons/action/delete'
import IconButton from 'material-ui/IconButton'
import { List, ListItem } from 'material-ui/List'
import Paper from '../components/Paper'
import Avatar from 'material-ui/Avatar'

const MessagesList = (props) => (
    <Paper>
        <List>
            {props.messages.map(message => (
                <ListItem
                    leftAvatar={
                        <Avatar
                            src={message.author.img}
                        />
                    }
                    key={message.key}
                    primaryText={message.text}
                    secondaryText={`
                    ${moment(message.timestamp).format('DD-MM-YYYY hh:mm')}
                    ${message.author.DisplayName || message.author.email}
                    `}
                    rightIconButton={
                        <IconButton>
                            <DeleteIcon
                                onClick={() => props.onDeleteMessageClickHandler(message.key)}
                            />
                        </IconButton>
                    }>
                </ListItem>)
            )}
        </List>
    </Paper>
)

export default MessagesList