// import React, { Component } from 'react'

// export class Form extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       username: '',
//       comment: '',
//       topic: 'react'
//     }
//   }

//   submitHandler = e => {
//     e.preventDefault();
//     console.log(`${this.state.username},${this.state.comment},${this.state.topic}`)
//   }

//   commentHandler = (e) => {
//     this.setState({
//       comment: e.target.value
//     })
//   }

//   topicHandler = e => {
//     this.setState({
//       topic: e.target.value
//     })
//   }

//   render() {

//     return (
//       <div>
//         <form onSubmit={this.submitHandler}>
//           <div>
//             <label >username:</label>
//             <input type="text" value={this.state.username} onChange={e => this.setState({ username: e.target.value })} />
//           </div>
//           <div>
//             <label >comment</label>
//             <textarea value={this.state.comment} onChange={this.commentHandler}></textarea>
//           </div>
//           <div>
//             <label >topic</label>
//             <select value={this.state.topic} onChange={this.topicHandler}>
//               <option value="angular">angular</option>
//               <option value="react">react</option>
//               <option value="vue">vue</option>
//             </select>
//           </div>
//           <button type='submit'>submit</button>
//         </form>
//       </div>
//     )
//   }
// }

// export default Form

import React, { useState } from 'react'

function Form() {
  const [info, setInfo] = useState({
    username:'',
    comment:'',
    topic:'react'
  })

 const submitHandler = e =>{
   e.preventDefault();
   setInfo({
    username:'',
    comment:'',
    topic:'react'
   })
   console.log(info.username,info.comment,info.topic)

 }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label >username:</label>
          <input type="text" value={info.username} onChange={e => setInfo({...info,username:e.target.value})} />
        </div>
        <div>
          <label >comments</label>
          <textarea value={info.comment} onChange={e =>setInfo({...info,comment:e.target.value})} cols="30" rows="10"></textarea>
        </div>
        <div>
          <label >topic:</label>
          <select value={info.topic} onChange={e =>setInfo({...info,topic:e.target.value})}>
            <option value="angular">angular</option>
            <option value="vue">vue</option>
            <option value="react">react</option>
          </select>
        </div>
        <button type='submit'>submit</button>
      </form>
      <p>username:{info.username}</p>
      <p>comment:{info.comment}</p>
      <p>topic:{info.topic}</p>

    </div>
  )
}

export default Form
