import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [hotelName, setHotelName] = useState(null);
  
  const handleSearch = (e) => {
    // console.log("!");
    setHotelName(e.value);
    // console.log("a");
    fetchHotelName();
  };

  const fetchHotelName = async() => {
    const response = await axios('http://localhost:3000/text', {
      name: hotelName
    });
    console.log(response);
    console.log(response.data);
    // data속에 담겨져 나온다.
  }
  return (
    <div>
      <h1>호텔 검색</h1>
      <select id="hotels-select" onClick={handleSearch}>
        <option value="호텔1">
          호텔1
        </option>
        <option value="호텔2">호텔2</option>
        <option value="호텔3">호텔3</option>
      </select>
      <button id="hotels-search">검색</button>
    </div>
  );
  }
export default App;
