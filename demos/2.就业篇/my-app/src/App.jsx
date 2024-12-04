import { useState } from 'react';
import Info from './components/Info'
function App() {
  const [info] = useState({
    name: 'Tom',
    age: 18,
    phone: '18505532898',
    address: 'Beijing',
    scores: [100, 90, 80, 70, 60],
    desc: (<h1>I am a student</h1>)
  });
  return (
    <div className="App">
      <Info {...info}>
        {info.desc}
      </Info>
    </div>
  );
}

export default App;
