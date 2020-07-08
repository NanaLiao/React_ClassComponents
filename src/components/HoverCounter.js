import React, { Component } from 'react'
import UpdatedComponent from './WithCounter';

class HoverCounter extends Component {

  render() {
    const {count,incrementCount} = this.props
    return (
      <div>
        <h1 onMouseOver={incrementCount}>age:{this.props.age} hover {count} times</h1>
      </div>
    )
  }
}

export default UpdatedComponent(HoverCounter,10) // we export higher order component
