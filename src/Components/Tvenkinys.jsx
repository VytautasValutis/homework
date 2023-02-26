import { useEffect, useState } from "react";

function Daiktas({ params }) {

    return params.map((a, i) => <p key={i} >{a.id + ' ' + a.type + ' '} <span style={{ color: a.color }}>{a.name}</span>{' ' + a.color}</p>);
}

function Tvenkinys({ param }) {
    const [parO, setParO] = useState(param.filter((a, i) => a.id % 2 === 0 ? a.id : null));
    const [parE, setParE] = useState(param.filter((a, i) => a.id % 2 !== 0 ? a.id : null));

    return <>
        <Daiktas params={parO} /> 
        <Daiktas params={parE} />
        </>
}

export default Tvenkinys;
