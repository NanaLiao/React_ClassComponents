import React from 'react'

import Name from './Name';

function NameList() {
  const names = [
    {
      id:1,
      name:"a",
      age:2,
    },
    {
      id:2,
      name:"b",
      age:3,
    },
    {
      id:3,
      name:"c",
      age:4,
    }
  ];


  const nameList = names.map(name => <Name key={name.id} person={name}/>)


  return (
    <div>
      {nameList}
    </div>
  )
}

export default NameList
