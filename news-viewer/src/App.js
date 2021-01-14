import React, { useState } from 'react';
import axios from 'axios';

// http://newsapi.org/v2/top-headlines?country=kr&apiKey=87382549776b4e98962b103f32bc5e57

const App = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        'http://newsapi.org/v2/top-headlines?country=kr&apiKey=87382549776b4e98962b103f32bc5e57',
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly />
      )}
    </div>
  );
};

export default App;
