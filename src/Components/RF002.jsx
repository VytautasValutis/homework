import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const KEY = 'katinai';

function RF002() {
    const [vardas, setVardas] = useState('');
    const [svoris, setSvoris] = useState(0);
    const [katinuSarasas, setKatinuSarasas] = useState([]);
    const [bendrasSvoris, setBendrasSvoris] = useState(0);

    const doVardas = e => {
        setVardas(e.target.value);
    }

    const doSvoris = e => {
        setSvoris(e.target.value);
    }

    const addKatinas = () => {
        setKatinuSarasas(w => [...w, {
            id: uuidv4(),
            vardas,
            svoris,
        }]);
        setVardas('');
        setSvoris(0);
    }

    useEffect(() => {
        setBendrasSvoris(_ => katinuSarasas.reduce((a, b) => a += +b.svoris, 0));
        if (katinuSarasas.length > 0) {
            localStorage.setItem(KEY, JSON.stringify(katinuSarasas));
        }
        if(katinuSarasas.length === 0) {
            let temp = JSON.parse(localStorage.getItem(KEY));
            if(temp !==  null ){ setKatinuSarasas(temp); }
        }
    }, [katinuSarasas])

    return <>
        <div className="App">
            <header className="App-header">

                <div className="card">
                    <div className="card-header">
                        <h2>Katinukai <small style={{ fontSize: '50%', color: '#000' }}>svoris viso: {bendrasSvoris}</small></h2>
                    </div>
                    <ul className="list-group list-group-flush">
                        {
                            [...katinuSarasas].sort((a, b) => b.svoris - a.svoris).map((a, i) =>
                                <li key={i} className={'list-group-item'}>
                                    {a.vardas} <b>{a.svoris}</b>
                                </li>)
                        }
                    </ul>
                    <div className="m-3">
                        <label className="form-label">Katinuko vardas</label>
                        <input type="text" className="form-control" onChange={doVardas} value={vardas} />
                    </div>
                    <div className="m-3">
                        <label className="form-label">Katinuko svoris{svoris}</label>
                        <input type="range" className="form-control" min="0" max="10" onChange={doSvoris} value={svoris} />
                    </div>
                    <button type="button" className="btn btn-outline-danger m-4" onClick={addKatinas}>Katinas</button>
                </div>
            </header>
        </div>
    </>
}

export default RF002;