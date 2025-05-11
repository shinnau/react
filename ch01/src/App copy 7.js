import './App.css';
import {useState} from 'react';

function App() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // 기본 폼 제출 동작 방지
    alert(`제출된 이름: ${name}`);
  };

  return (
    <div>
      <h1>폼 제출 이벤트</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="이름 입력" />
        <button type="submit">제출</button>
      </form>
    </div>
  );
}

export default App;
