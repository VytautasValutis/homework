import { useState } from "react";

const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas',
    'avigalvis'];

function HW8005({ }) {
    console.log("šarikas".toUpperCase().charCodeAt(0) === "šarikas".charCodeAt(0));
    return (
        <div className="App">
            <header className="App-header">
                <div className="desk">
                        {
                            dogs.map((a, i) => <div key={i} className="elementas" style={{color: a.length > 6 ? "green" : "red"}}> {a.length}
                            {/* <div className="num">{i + 1}</div> */}
                            </div>)
                        }
                </div>
            </header>
        </div>
    );
}

export default HW8005;