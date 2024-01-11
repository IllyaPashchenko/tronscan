import React, { useState } from 'react';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import { Transaction } from './components/Transactions';

function App() {
  const [limit, setLimit] = useState(20);
  const [start, setStart] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <Transaction limit={limit} start={start} />
      </header>
    </div>
  );
}

export default App;
