import React from 'react'
import Forms from './Forms'
import { auth } from '../firebase'

class Auth extends React.Component {
    state = {
        login: "",
        password: "",
        isUserLoggedIn: false
    }

    componentDidMount() {
        auth.onAuthStateChanged(
            user => {
                if (user) {
                    this.setState({isUserLoggedIn: true})
                } else {
                    this.setState({isUserLoggedIn: false})
                }
            }
        )
    }

    handleLoginChange = event => this.setState({ login: event.target.value })
    handlePasswordChange = event => this.setState({ password: event.target.value })

    handleLogInClick = () =>{
        auth.signInWithEmailAndPassword(this.state.login, this.state.password)
        // .then(console.log)
        // .catch(console.log)
    }
    handleLogInWithGoogleClick = () => console.log('clicked')

    render() {
        return (
            this.state.isUserLoggedIn ?
                this.props.children
                :
                <Forms
                    login={this.state.login}
                    password={this.state.password}
                    handleLoginChange={this.handleLoginChange}
                    handlePasswordChange={this.handlePasswordChange}
                    handleLogInClick={this.handleLogInClick}
                    handleLogInWithGoogleClick={this.handleLogInWithGoogleClick}
                />
        )
    }
}

export default Auth