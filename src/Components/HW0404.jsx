import { useState } from "react";

function HW0404() {
  console.clear();

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [rez, setRez] = useState(0);

  const doNum1 = e => {
    setNum1(e.target.value);
  }
  const doNum2 = e => {
    setNum2(e.target.value);
  }

  const add = () => {
    setRez(+num1 + +num2);
    setNum1(0);
    setNum2(0);
}
const sub = () => {
    setRez(+num1 - +num2);
    setNum1(0);
    setNum2(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h5> --- {rez} --- </h5>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-2 left">
              <input type="text" className="form-control" onChange={doNum1} value={num1} />
            </div>
            <div className="col-2">
              <input type="text" className="form-control" onChange={doNum2} value={num2} />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-2 left">
              <button type="button" className="btn btn-outline-success mt-4" onClick={add}>ADD</button>
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-outline-danger mt-4" onClick={sub}>SUB</button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default HW0404;
