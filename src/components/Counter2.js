import React,{useState} from 'react'

function Counter2() {
  const [count,setCount] = useState(0);

  const updateHandler = () =>{
    setCount(prevCount=>prevCount+1);
  }


  return (
    <div>
      count2 - {count}
      <button onClick={updateHandler}>update2</button>
      
    </div>
  )
}

export default Counter2
