import React,{ useState } from 'react';
import './Counter.css';

function Counter() {

    const[count,setCount] = useState(0);

    const handleCount=(op) =>{
        if(op === '+'){
            setCount(count+1);
        }else{
            setCount(count-1);
        }
    }

  return (
    <div>
        <br/>
        <br/>
        <h1>{count}</h1>
        <button onClick={()=>handleCount('+')}>Increment</button><span><button onClick={()=>handleCount('-')}>Decrement</button></span>
        <button onClick={()=>setCount(0)}>Reset</button>
        <br/>
        <br/>
        {new Date().toDateString()}
    </div>
  )
}

export default Counter