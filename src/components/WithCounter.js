import React from 'react';

const UpdatedComponent = (OriginalComponent,incrementNumber) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
         count:0
      }
    }
  
    incrementHandler = () =>{
      this.setState((prevState)=>{
        return {
          count:prevState.count+incrementNumber
        }
      })
    }
    render() {
      console.log(this.props.name);
      return <OriginalComponent 
      count={this.state.count}  
      incrementCount={this.incrementHandler}
      {...this.props}/> // pass down the remaining props from parent,which is name ='Lina'
    }
  }
  return NewComponent;
}

export default UpdatedComponent;