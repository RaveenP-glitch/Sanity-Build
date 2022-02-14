import React,{ useState } from 'react'

function SimpleCounter() {
  
    const [count,setCount] = useState(0);

    const handleCount = () => {
        setCount(prevCount => prevCount+1);
    }

    return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleCount}>Increment</button>
    </div>
  )
}

export default SimpleCounter