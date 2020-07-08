import React, { Component } from 'react'

import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentCom extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:'lina'
    }
  }

  componentDidMount(){
    // setInterval(()=>{
    //   this.setState({name:'lina'})
    // },2000)
  }
  
  render() {
    console.log('**************parentComp**************')
    return (
      <div>
        parent component 
        {/* <RegComp name={this.state.name}/>
        <PureComp name={this.state.name}/> */}
        <MemoComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentCom
