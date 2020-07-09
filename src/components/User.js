import React, { Component } from 'react'

class User extends Component {
  render() {
    return (
      <div>
       {this.props.render(false)} {/* it contains a reference to a function,in order to actually  display the name, we need to call the function*/}
       
        
      </div>
    )
  }
}

export default User
