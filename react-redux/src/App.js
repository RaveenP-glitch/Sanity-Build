import logo from './logo.svg';
import { useSelector,useDispatch } from 'react-redux';
import './App.css';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () =>{
    dispatch({type: 'INC'});
  };
  const decrement = () => {
    dispatch({type: 'DEC'});
  };
  const addBy = () => {
    dispatch({type: 'ADD', payload: 10});
  }
  const reset =() =>{
    dispatch({type: 'RES'});
  }


  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy}>AddBy 10</button>
      <br/>
      <button onClick={reset}>Reset</button>

    </div>
  );
}

export default App;
