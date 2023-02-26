import { useEffect, useState } from "react";

function Valtis({ params }) {
    return params.map((a, i) => <p key={i} >{a.id + ' ' + a.type + ' '} <span style={{ color: a.color }}>{a.name}</span>{' ' + a.color}</p>);
}

function Laivas({ params }) {
    return params.map((a, i) => <p key={i} >{a.id + ' ' + a.type + ' '} <span style={{ color: a.color }}>{a.name}</span>{' ' + a.color}</p>);
}
function Sala({ params }) {
    return params.map((a, i) => <p key={i} >{a.id + ' ' + a.type + ' '} <span style={{ color: a.color }}>{a.name}</span>{' ' + a.color}</p>);
}

function Jura({ param }) {
    const [parJ, setParJ] = useState(param.filter((a, i) => a.type === 'fish' ? a.id : null));
    const [parV, setParV] = useState(param.filter((a, i) => a.type === 'man' ? a.id : null));
    const [parL, setParL] = useState(param.filter((a, i) => a.type === 'car' ? a.id : null));
    const [parS, setParS] = useState(param.filter((a, i) => a.type === 'animal' ? a.id : null));

    return <>
        {parJ.map((a, i) => <p key={i} >{a.id + ' ' + a.type + ' '} <span style={{ color: a.color }}>{a.name}</span>{' ' + a.color}</p>)}
        <p>--------------------</p>
        <Valtis params={parV} /> 
        <p>--------------------</p>
        <Laivas params={parL} />
        <p>--------------------</p>
        <Sala params={parS} />
        </>
}

export default Jura;
