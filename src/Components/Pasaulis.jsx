import { useEffect, useState } from "react";

function Namas({ params }) {
    return params.map((a, i) => <p key={i} >{a.id + ' ' + a.type + ' '} <span style={{ color: a.color }}>{a.name}</span>{' ' + a.color}</p>);
}

function Narvas({ params }) {
    return params.map((a, i) => <p key={i} >{a.id + ' ' + a.type + ' '} <span style={{ color: a.color }}>{a.name}</span>{' ' + a.color}</p>);
}
function Garazas({ params }) {
    return params.map((a, i) => <p key={i} >{a.id + ' ' + a.type + ' '} <span style={{ color: a.color }}>{a.name}</span>{' ' + a.color}</p>);
}
function Akvariumas({ params }) {
    return params.map((a, i) => <p key={i} >{a.id + ' ' + a.type + ' '} <span style={{ color: a.color }}>{a.name}</span>{' ' + a.color}</p>);
}

function Pasaulis({ param }) {
    const [parNO, setParNO] = useState(param.filter((a, i) => a.id % 2 === 0 && a.type === 'man' ? a : null));
    const [parNE, setParNE] = useState(param.filter((a, i) => a.id % 2 !== 0 && a.type === 'man' ? a : null));
    const [parRO, setParRO] = useState(param.filter((a, i) => a.id % 2 === 0 && a.type === 'animal' ? a : null));
    const [parRE, setParRE] = useState(param.filter((a, i) => a.id % 2 !== 0 && a.type === 'animal' ? a : null));
    const [parGO, setParGO] = useState(param.filter((a, i) => a.id % 2 === 0 && a.type === 'car' ? a : null));
    const [parGE, setParGE] = useState(param.filter((a, i) => a.id % 2 !== 0 && a.type === 'car' ? a : null));
    const [parAO, setParAO] = useState(param.filter((a, i) => a.id % 2 === 0 && a.type === 'fish' ? a : null));
    const [parAE, setParAE] = useState(param.filter((a, i) => a.id % 2 !== 0 && a.type === 'fish' ? a : null));

    return <>
        <Namas params={parNO} /> 
        <p>--------------------</p>
        <Namas params={parNE} /> 
        <p>--------------------</p>
        <Narvas params={parRO} /> 
        <p>--------------------</p>
        <Narvas params={parRE} /> 
        <p>--------------------</p>
        <Garazas params={parGO} /> 
        <p>--------------------</p>
        <Garazas params={parGE} /> 
        <p>--------------------</p>
        <Akvariumas params={parAO} /> 
        <p>--------------------</p>
        <Akvariumas params={parAE} /> 
        <p>--------------------</p>
        </>
}

export default Pasaulis;
