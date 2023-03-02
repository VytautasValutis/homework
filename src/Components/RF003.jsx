import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const KEY = 'katinai';

function RF003() {
    const [kaire, setKaire] = useState(100);
    const [desine, setDesine] = useState(50);

    const doKaire = e => {
        setKaire(e.target.value);
        setDesine(e.target.value / 2);
    }
    
    const doDesine = e => {
        setDesine(e.target.value);
        setKaire(e.target.value * 2);
    }
    
    return <>
        <div className="App">
            <header className="App-header">
            <div className="d-flex p-2 bd-highlight">
                <div className="m-3">
                    <input type="number" className="form-control" onChange={doKaire} value={kaire} />
                </div>
                <div className="m-3">
                    <input type="number" className="form-control" onChange={doDesine} value={desine} />
                </div>
                </div>
            </header>
        </div>
    </>
}

export default RF003;