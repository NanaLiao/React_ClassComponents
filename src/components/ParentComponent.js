import React, { useState } from 'react';

import ChildComponent from './ChildComponent';

// export class ParentComponent extends Component {

//   constructor(props) {
//     super(props)
  
//     this.state = {
//        word:'welcome'
//     }
//   }
  
//   clickHandler = (name) =>{
//     this.setState({word:`welcome to child ${name}`})
//   }

//   render() {
//     return (
//       <div>
//        <h1> {this.state.word}</h1>
//        <ChildComponent clickHandler={this.clickHandler}/>

//       </div>
//     )
//   }
// }

// export default ParentComponent



function ParentComponent() {
  const [word,setWord] = useState('welcome')
  
  const clickHandler = (name) =>{
    setWord(`welcome to child ${name}`)
  }

  return (
    <div>
      <h1>{word}</h1>
      <ChildComponent clickHandler={clickHandler} />
    </div>
  )
}

export default ParentComponent
