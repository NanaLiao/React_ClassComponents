import React, { Component } from 'react'

class Counter extends Component {

  state={
    count:0
  }

  updateHandler = () =>{
    this.setState((prevState)=>{
      return {count:prevState.count+5}
    });
  }

  render() {
    return (
      <div>
        count - {this.state.count}
        <button onClick = {this.updateHandler}>update</button>
      </div>
    )
  }
}

export default Counter;
