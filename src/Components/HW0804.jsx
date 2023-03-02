import { useState } from "react";

const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas',
    'avigalvis'];

function HW8004({ }) {
    console.log("šarikas".toUpperCase().charCodeAt(0) === "šarikas".charCodeAt(0));
    return (
        <div className="App">
            <header className="App-header">
                <div className="desk">
                        {
                            dogs.map((a, i) => a.toUpperCase().charCodeAt(0) !== a.charCodeAt(0) ? <div key={i} className="elementas"> {a}
                            {/* <div className="num">{i + 1}</div> */}
                            </div> : null)
                        }
                </div>
            </header>
        </div>
    );
}

export default HW8004;