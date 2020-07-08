// import React, {useState}from 'react'

// const Condintional = () => {
//   const [login, setLogin] = useState(false);

//   return (
//     login? <h1>welcome lina</h1> : <h1>please login</h1>
//   )
// }

// export default Condintional

import React, { Component } from 'react'

export class Condintional extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       login:false
    }
  }
  
  render() {
    return (
    this.state.login && <h1>lina</h1> 
    )
  }
}

export default Condintional
