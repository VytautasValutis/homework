import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "../SCSS/RF005.scss";

function RF005() {
    const [heigth, setHeigth] = useState(10);
    const [color, setColor] = useState('#000000');
    const [width, setWidth] = useState(10);
    const [widthK, setWidthK] = useState(0);
    const [heigthK, setHeigthK] = useState(0);

    const doHeigth = e => {
        setHeigth(e.target.value);
    };

    const doColor = e => {
        setColor(e.target.value);
    };

    const doWidth = e => {
        setWidth(e.target.value);
    };

    useEffect(() => {
        setWidthK(width);
    }, [width, widthK])

    useEffect(() => {
        setHeigthK(heigth);
    }, [heigth, heigthK])

    return <>
        <div className="App">
            <header className="App-header">
                <div className="mt-4">
                    <input type="range" min="10" max="200" onChange={doHeigth} value={heigth} />
                    <label>Higth {heigth}</label>
                </div>
                <div className="mt-4">
                    <input type="range" min="10" max="200" onChange={doWidth} value={width} />
                    <label> Width {width}</label>
                </div>
                <div className="mt-4">
                    <input type="color" value="#ffffff" onChange={doColor} value={color}/>
                        <label>Color</label>
                </div>
                <div className="kvadratas" style={{
                    width: width + 'px',
                    height: heigth + 'px',
                    backgroundColor: color,
                }}
                >{}</div>
            </header>
        </div >
    </>
}

export default RF005;