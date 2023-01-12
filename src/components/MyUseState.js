import React, {useState} from 'react'

const MyUseState = () => {
    
    const [count, setCount] = useState(0);
  

  return (
    <div>
        <span>number of counts: {count}</span>
        <button onClick={()=>setCount(count+1)}>Click me</button>
    </div>
  )
}

export default MyUseState