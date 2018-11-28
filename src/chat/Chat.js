import React from 'react'
import NewMessageForm from './NewMessageForm'
import { database } from '../firebase'

const dbMessagesRef = database.ref('/chat')

class Chat extends React.Component {
    state = {
        newMessageText: '',
        messages: []
    }

    componentDidMount() {
        dbMessagesRef.on(
            'value',
            snapshot => {
                const messages = Object.entries(
                    snapshot.val()
                ).map(([key, value]) => ({
                    ...value,
                    key // to samo co key: key
                    // to też to samo
                    // ...entry[1],
                    //key: entry[0]
                }))
                this.setState({ messages: messages })
            }
        )
    }

    handleChange = event => {
        this.setState({ newMessageText: event.target.value })
    }

    handleClick = () => {
        dbMessagesRef.push({
            text: this.state.newMessageText,
            timestamp: Date.now()
        })
    }

    render() {
        return (
            <div>
                <NewMessageForm
                    newMessageText={this.state.newMessageText}
                    handleChange={this.handleChange}
                    handleClick={this.handleClick}
                />
                {this.state.messages.map(message => (
                    <div
                        key={message.key} >
                        {message.text}
                    </div>)
                )}
            </div>
        )
    }
}

export default Chat