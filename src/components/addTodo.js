import React, { Component } from 'react'


class Add extends Component {

    state = {
        value: '',
        status: 'todo'
    }

    chgValue = (data) => {
        this.setState({ value: data })
    }

    onSubmitChg = (value, status) => {
        if (value !== '' && value !== null) {
            this.props.addTodo(value, status)
        } else {
            alert('please input task')
        }
        this.setState({
            value: ''
        })
    }

    render() {
        return (
            <div>
                <input value={this.state.value} type="text" onChange={(e) => this.chgValue(e.target.value)} />
                <button onClick={() => this.onSubmitChg(this.state.value, this.state.status)}>Add</button>
            </div>
        )
    }
}

export default Add