import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../SCSS/HW0500.scss';

function HW0500() {
  console.clear();

  const [balls, setBalls] = useState([]);
  const [ballColor, setBallColor] = useState('white');
  const [ballNumber, setBallNumber] = useState(0);

  const doBallColor = e => {
    setBallColor(e.target.value);
  }
  const doBallNumber = e => {
    setBallNumber(e.target.value);
  }

  const add = () => {
    setBalls(b => [...b, {
      id: uuidv4(),
      color: ballColor,
      number: ballNumber
    }]);
    setBallNumber(0);
    setBallColor('white');
}

  const del = () => {
    setBalls(b => b.filter(w => balls[0].id !== w.id));
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <input type="text" className="form-control" onChange={doBallColor} value={ballColor} />
            </div>
            <div className="col-3">
              <input type="text" className="form-control" onChange={doBallNumber} value={ballNumber} />
            </div>
            <div className="col-3">
              <button type="button" className="btn btn-outline-success" onClick={add}>ADD new</button>
            </div>
            <div className="col-3">
              <button type="button" className="btn btn-outline-danger" onClick={del}>DELETE oldest</button>
            </div>
          </div>
        </div>
        <div className="ball-block">
          {
            balls.map((a, i) => <div key={i} className="balls" style={{ backgroundColor: a.color }}>{a.number}</div>)
          }
        </div>
      </header>
    </div>
  );
}

export default HW0500;
