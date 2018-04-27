import React, { Component } from 'react';
import TodoCard from './Card'

class Counter extends Component {

  render() {
    console.log(this.props);

    return (
      <div>
        <div>all task : {this.props.count}</div>
        <div>{this.props.data.map((data, i) => { return <TodoCard key={i} value={data.value} status={data.status} /> })}</div>
      </div >
    )
  }
}

export default Counter;
