import axios from 'axios';
import React, {useState} from 'react';
// import './App.css';

function App() {
  const [inputName, setName] = useState(null);

  const handleSearch = (e) => {
    setName(e.value);

    fetchName();
  }

  const fetchName = async() => {
    const response = await axios('http://localhost:3001/text', {
      name: inputName
    });
    console.log(response.data);
  }

  return (
    <div>
      <h1>친구 검색</h1>
      <select id="friend-select" onclick={handleSearch}>
        <option value="하대겸" selected>
          하대겸
        </option>
        <option value="하선우">
          하선우
        </option>
        <option value="하동욱">하동욱</option>
      </select>
      <button id="search">검색</button>
    </div>
  );
}

export default App;
