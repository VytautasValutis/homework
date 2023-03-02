import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import rand from '../functions/rand';
import '../SCSS/HW0600.scss';

const numbs = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

function HW0600() {
  // console.clear();

  const [lBalls, setLBalls] = useState([]);
  const [rBalls, setRBalls] = useState([]);

  const reset = () => {
    setRBalls(_ => []);
    setLBalls(_ => numbs.slice(0, rand(5, 15)).map((a, i) =>
      a = {id:uuidv4(),
      num: i+1}
    ));
  }
  const moveR = (id, num) => {
    setRBalls(b => [...b, {id, num}].sort((a, b) => +a.num - +b.num));
    setLBalls(b => b.filter(b => id !== b.id));
  }
  const moveL = (id, num) => {
    setLBalls(b => [...b, {id, num}].sort((a, b) => +a.num - +b.num));
    setRBalls(b => b.filter(b => id !== b.id));
  }

  return (
    <div className="App">
      <header className="App-header">
        <button type="button" className="btn btn-outline-danger" onClick={reset}>RESET</button>
        <div className="desk">
          <div className="ball-block">
          {
            lBalls.map((a, i) => <div key={i} className="balls" onClick={() => moveR(a.id, a.num)}>{a.num}</div>)
          }
          </div>
          <div className="ball-block">
            {
          rBalls.map((a, i) => <div key={i} className="balls" onClick={() => moveL(a.id, a.num)}>{a.num}</div>)
            }
          </div>
        </div>
      </header>
    </div>
  );
}

export default HW0600;
