import { useState } from 'react';
import './App.css';

function App() {

  const [moa, setMoa] = useState(1);
  const [targetDistance, setTargetDistance] = useState(100);
  const [missDistance, setMissDistance] = useState(10);
  const [result, setResult] = useState();

  const scopeClickCount = () => {

    const oneOneOnOneHUndredMeters = 2.908 * targetDistance / 100
    const correctionDistanceInMoa = missDistance / oneOneOnOneHUndredMeters
    const clicksPerOneMoa = () => {
      switch (moa) {
        case "1/8":
          return 1 / 8 ** -1
        case "1/4":
          return 1 / 4 ** -1
        case "1/2":
          return 1 / 2 ** -1
        default:
          return 1
      }
    }

    setResult(Math.round(correctionDistanceInMoa * clicksPerOneMoa()));
  }
  
  return (
    <div className='mainWrapper'>
      <header>
        <h1>sight-calibration</h1>
      </header>
      <div className='calculateSection'>

        <div>
          <label htmlFor="pet-select">Choose MOA:</label>

          <select name="pets" id="moa" onChange={(e) => setMoa(e.target.value)}>
            <option value="1">1</option>
            <option value="1/2">1/2</option>
            <option value="1/4">1/4</option>
            <option value="1/8">1/8</option>
          </select>
        </div>

        <div className="">
          <label htmlFor="targetDistance">Distance to target (m):</label>
          <input type="number" id="targetDistance" value={targetDistance} onChange={(e) => setTargetDistance(e.target.value)} />
        </div>
        
        <div className="">
          <label htmlFor="missDistance">Miss distance (cm):</label>
          <input type="number" id="missDistance" value={missDistance} onChange={(e) => setMissDistance(e.target.value)} />
        </div>

        <button onClick={scopeClickCount}>Calculate</button>
        {result}
      </div>
    </div>
  );
}

export default App;
