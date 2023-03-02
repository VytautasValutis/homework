import { useState } from "react";

const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas',
    'avigalvis'];

function HW8002({ }) {
    return (
        <div className="App">
            <header className="App-header">
                <div className="desk">
                        {
                            dogs.sort((a, b) => a.length - b.length).map((a, i) => <div className="elementas">{a}
                            <div className="num">{i + 1}</div>
                            </div>)
                        }
                </div>
            </header>
        </div>
    );
}

export default HW8002;