import { useEffect, useState } from "react";

function Tipas({ params }) {
    return params.map((a, i) => <p key={i} >{a.id + ' ' + a.type + ' '} <span style={{ color: a.color }}>{a.name}</span>{' ' + a.color}</p>);
}

function Vardas({ params }) {
    return params.map((a, i) => <p key={i} >{a.id + ' ' + a.type + ' '} <span style={{ color: a.color }}>{a.name}</span>{' ' + a.color}</p>);
}
function Spalva({ params }) {
    return params.map((a, i) => <p key={i} >{a.id + ' ' + a.type + ' '} <span style={{ color: a.color }}>{a.name}</span>{' ' + a.color}</p>);
}

function Vandenynas({ param }) {
    const [parT, setParT] = useState([...param].sort((a, b) => a.type > b.type ? 1 : a.type < b.type ? -1 : 0));
    const [parN, setParN] = useState([...param].sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0));
    const [parS, setParS] = useState([...param].sort((a, b) => a.color > b.color ? 1 : a.color < b.color ? -1 : 0));

    return <>
        <Tipas params={parT} /> 
        <p>--------------------</p>
        <Vardas params={parN} />
        <p>--------------------</p>
        <Spalva params={parS} />
        </>
}

export default Vandenynas;
