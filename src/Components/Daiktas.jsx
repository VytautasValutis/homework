function Daiktas({params}) {
    console.log("***", params);
    return params.map((a, i) => <p key={i} >{a.id + ' ' + a.type + ' '} <span style={{color: a.color}}>{a.name}</span>{' ' + a.color}</p> ) ;     
}

export default Daiktas;