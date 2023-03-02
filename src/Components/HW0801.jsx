import { useState } from "react";

const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas',
    'avigalvis'];

function HW8001({ }) {
    return (
        <div className="App">
            <header className="App-header">
                <div className="desk">
                        {
                            dogs.map((a) => <div className="elementas">{a}</div>)
                        }
                </div>
            </header>
        </div>
    );
}

export default HW8001;