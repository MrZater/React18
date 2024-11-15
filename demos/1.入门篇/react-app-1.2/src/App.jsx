import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  // 每次更新都执行
  useEffect(() => {
    console.log('always effect');
    document.title = `Count: ${count}`
  }, [count])
  // 仅在开始执行一次
  useEffect(() => {
    console.log('one effect');
  }, [])
  // 任何状态值改变，都执行
  useEffect(() => {
    console.log('every effect');
  })
  return (
    <div>
      <h1 onClick={() => setCount(count + 1)}>{count}</h1>
    </div>
  );
}

export default App;
