import React from "react"

import {database} from './firebase'

class Counter extends React.Component {
    state = {
        counterNumber: this.props.initialValue || 0
    }

    componentDidMount() {
        database.ref('/counter').on(
            'value',
            snapshot => this.setState({ counterNumber: snapshot.val() })
        )
    }

    incHandler = () => database.ref('/counter').set(this.state.counterNumber + 1)

    decHandler = () => database.ref('/counter').set(this.state.counterNumber - 1)

    render() {
        return (
            <div>
                <h1>
                    {this.state.counterNumber}
                </h1>
                <button
                    onClick={this.incHandler}
                >
                    +
                </button>
                <button
                    onClick={this.decHandler}
                >
                    -
                </button>
            </div>
        )
    }
}

export default Counter