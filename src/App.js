import React, { Component } from 'react'
import Chat from './chat/Chat'
import Auth from './Auth/Auth'

class App extends Component {
  render() {
    return (
      <Auth>
        <Chat />
      </Auth>
    )
  }
}

export default App
