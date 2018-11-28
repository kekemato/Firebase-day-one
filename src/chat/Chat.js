import React from 'react'
import NewMessageForm from './NewMessageForm'

class Chat extends React.Component {
    state = {
        newMessageText: '',
        messages: []
    }

    handleChange = event => {
        this.setState({ newMessageText: event.target.value })
    }

    handleClick = () => {
        const newMessage = {messageText: ''}
        newMessage.messageText = this.state.newMessageText
        this.setState({messages: this.state.messages.concat(newMessage)})
    }

    render() {
        return (
            <div>
                <NewMessageForm
                    newMessageText={this.state.newMessageText}
                    handleChange={this.handleChange}
                    handleClick={this.handleClick}
                />
            </div>
        )
    }
}

export default Chat