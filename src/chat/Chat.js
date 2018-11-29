import React from 'react'

import NewMessageForm from './NewMessageForm'
import { auth, database } from '../firebase'
import { mapObjectToArray } from '../utils'
import MessagesList from './MessagesList'

const dbMessagesRef = database.ref('/chat')

class Chat extends React.Component {
    state = {
        newMessageText: '',
        messages: []
    }

    componentDidMount() {
        dbMessagesRef.on(
            'value',
            snapshot =>
                this.setState({
                    messages: mapObjectToArray(snapshot.val()).reverse()
                })
        )
    }

    componentWillUnmount() {
        dbMessagesRef.off()
    }

    handleChange = event => {
        this.setState({ newMessageText: event.target.value })
    }

    handleClick = (event) => {
        event.preventDefault()

        dbMessagesRef.push({
            text: this.state.newMessageText,
            timestamp: Date.now(),
            author: {
                email: auth.currentUser.email,
                displayName: auth.currentUser.displayName,
                img: auth.currentUser.photoURL || `https://api.adorable.io/avatars/50/${auth.currentUser.email}`
            }
        })
    }

    onDeleteMessageClickHandler = (messageKey) => {
        dbMessagesRef.child(messageKey)
            .remove()
    }

    render() {
        return (
            <div>
                <NewMessageForm
                    newMessageText={this.state.newMessageText}
                    handleChange={this.handleChange}
                    handleClick={this.handleClick}
                />
                <MessagesList
                    messages={this.state.messages}
                    onDeleteMessageClickHandler={this.onDeleteMessageClickHandler}
                />
            </div>

        )
    }
}

export default Chat