function Bala({param}) {

    return param.map((a, i) => <p>{a.id + ' ' + a.type + ' '} <span style={{color: a.color}}>{a.name}</span>{' ' + a.color}</p> ) ;     
}

export default Bala;
