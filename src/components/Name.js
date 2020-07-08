import React from 'react'

const Name = (props) => {
  const {person} = props;

  return (
    <div>
      <h1>I am {person.name}, My age is {person.age}</h1>

      
    </div>
  )
}

export default Name
