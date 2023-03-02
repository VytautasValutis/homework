import { useState } from "react";

const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas',
    'avigalvis'];

function HW8003({ }) {
    return (
        <div className="App">
            <header className="App-header">
                <div className="desk">
                        {
                            dogs.map((a, i) => <div key={i} className="elementas" style={{borderRadius: (i % 2) === 0 ? 0 : 100}}> {a}
                            <div className="num">{i + 1}</div>
                            </div>)
                        }
                </div>
            </header>
        </div>
    );
}

export default HW8003;