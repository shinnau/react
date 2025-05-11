import './App.css';
import {useState} from 'react';

// 폼 컴포넌트
function FormComponent({ name, setName, handleSubmit }) {
  return (
    <div>
      <h1>폼 제출 이벤트</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름 입력"
        />
        <button type="submit">제출</button>
      </form>
    </div>
  );
}

// 메인 컴포넌트
function App() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`제출된 이름: ${name}`);
  };

  return (
    <div>
      <FormComponent name={name} setName={setName} handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
