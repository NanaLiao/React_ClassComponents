import React from 'react'

const ChildComponent = (props) => {
  const {clickHandler} = props;
  return (
    <div>
      <button onClick={()=>clickHandler('lina')}>click</button>
      
    </div>
  )
}

export default ChildComponent
