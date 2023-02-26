function Bala({param}) {
    console.log("+++", param);
    return param.map((a, i) => <p key={i} >{a.id + ' ' + a.type + ' '} <span style={{color: a.color}}>{a.name}</span>{' ' + a.color}</p> ) ;     
}

export default Bala;
