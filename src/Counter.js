import React from "react"

class Counter extends React.Component {
    state = {
        counterNumber: this.props.initialValue || 0
    }

    componentDidUpdate() {
        this.saveToFirebase()
    }

    componentDidMount() {
        this.loadDataFromFirebase()
    }

    incHandler = () => {
        this.setState({ counterNumber: this.state.counterNumber + 1 })
    }

    decHandler = () => {
        this.setState({ counterNumber: this.state.counterNumber - 1 })
    }

    saveToFirebase = () => {
        fetch(
            'https://poniedzialek-26.firebaseio.com/counter.json', {
                method: 'PUT',
                body: JSON.stringify(this.state.counterNumber)
            })
    }

    loadDataFromFirebase = () => {
        fetch('https://poniedzialek-26.firebaseio.com/counter.json')
            .then(response => response.json())
            .then(data => this.setState({ counterNumber: data }))
    }

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