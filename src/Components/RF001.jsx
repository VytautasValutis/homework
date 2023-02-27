import { useState } from "react";
import rand from "../functions/rand";

function RF001() {

    const [inNum, setInNum] = useState(0);
    const [sqarray, setSqarray] = useState([]);

    const doNum = e => {
        setInNum(e.target.value);
    }

    const input = () => {
        let tmpArr = [...Array(+inNum)].map(_ => rand(100, 200));
        setSqarray(w => [...w].concat(tmpArr));
        setInNum(0);
    }

    return <>
        <div className="m-3">
            <label className="form-label">Enter Number</label>
            <input type="text" className="form-control" onChange={doNum} value={inNum} />
        </div>
        <button type="button" className="btn btn-outline-warning mt-4" onClick={input}>Input</button>
        <div className="desk">
            {
                sqarray.map((a, i) => <div key={i} className="kvad50">{a}
                </div>)
            }
        </div>


    </>
}

export default RF001;