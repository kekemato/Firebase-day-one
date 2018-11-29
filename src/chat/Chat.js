import React from 'react'
import NewMessageForm from './NewMessageForm'
import { database } from '../firebase'
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
            timestamp: Date.now()
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