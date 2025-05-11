import './App.css';
import {useState} from 'react';

function App() {
  const [bgColor, setBgColor] = useState("white");

  return (
    <div>
      <h1>마우스 이벤트</h1>
      <div
        style={{ width: "200px", height: "100px", backgroundColor: bgColor, textAlign: "center", lineHeight: "100px" }}
        onMouseEnter={() => setBgColor("lightblue")}
        onMouseLeave={() => setBgColor("white")}
      >
        마우스를 올려보세요!
      </div>
    </div>
  );
}




export default App;