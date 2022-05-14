import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      const [cTime, setTime] = useState(new Date().toLocaleString());
      useEffect(()=>{
        //
        setInterval(()=>{
          setTime(new Date().toLocaleString());
          
        },1000);

      })
      return(
        <div className="App">
          <h1>{cTime}</h1>
          <button onClick={()=>setTime(new Date().toLocaleString())}>Increment</button>


        </div>
      )


    </div>
  );
}

export default App;
