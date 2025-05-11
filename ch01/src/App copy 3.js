import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    if (count < 100) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const reset = () => {
    setCount(0);
  };
  const setToMax = () => {
    setCount(100);
  };
  return (
    <div>
      <h2>카운터</h2>
     <div>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
      <div>
        <button onClick={reset}>0으로 초기화</button>
        <button onClick={setToMax}>최대값(100)</button>
      </div>
      <div>
        현재 값:{count}
      </div>
    </div>
  );
}



function App () {
  return (
    <Counter></Counter>
  )
}

export default App;