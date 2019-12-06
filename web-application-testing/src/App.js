import React, { useState } from 'react';
import './App.css';
import { Dashboard } from './Components/Dashboard';
import { Display } from './Components/Display';


function App() {
// set state to pass as props below
  const [strikes, setStrike] = useState(0);
  const [hits, setHit] = useState(0);
  const [balls, setBall] = useState(0);
  const [outs, setOut] = useState(0);
  const [walks, setWalk] = useState(0);
  return (
    <div className='scoreboard' >
      <h1>Batter Up</h1>
      <Dashboard
        strikes={strikes}
        setStrike={setStrike}
        hits={hits}
        setHit={setHit}
        balls={balls}
        setBall={setBall}
        walks={walks}
        setWalk={setWalk}
        outs={outs}
        setOut={setOut}
        />
      <Display
        strikes={strikes}
        balls={balls}
        hits={hits}
        outs={outs}
        walks={walks}
        />
    </div>
  );
}

export default App;
