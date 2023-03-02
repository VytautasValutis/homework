import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function RF004() {
const [text, setText] = useState('');
const [color, setColor] = useState('');
const [font, setFont] = useState('');
const [size, setSize] = useState('');

const doText = e => {
    setText(e.target.value);
};

const doColor = e => {
    setColor(e.target.value);
};

const doFont = e => {
    setFont(e.target.value);
};

const doSize = e => {
    setSize(e.target.value);
};


    return <>
        <div className="App">
            <header className="App-header">
                <h3>Input text :</h3>
                <input type="text" className="form-control w-25 mb-4" onChange={doText} value={text} />
                <select className="form-select form-select-sm mb-4 w-25" onChange={doFont}>
                    <option selected>Font name</option>
                    <option value="1Arial">Arial</option>
                    <option value="Times Roman">Times Roman</option>
                    <option value="Sans Sherif">Sans Sherif</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Impact">Impact</option>
                </select>
                <select className="form-select form-select-sm m-4 w-25" onChange={doSize}>
                    <option selected>Font size</option>
                    <option value="20px">20px</option>
                    <option value="28px">28px</option>
                    <option value="36px">36px</option>
                    <option value="44px">44px</option>
                    <option value="50px">50px</option>
                </select>
                <select className="form-select form-select-sm m-4 w-25" onChange={doColor}>
                    <option selected>Font color</option>
                    <option value="red">red</option>
                    <option value="yellow">yellow</option>
                    <option value="blue">blue</option>
                    <option value="green">green</option>
                    <option value="orchid">orchid</option>
                </select>
                <h1 style={{color: color, fontSize: size, fontFamily: font}}>{text}</h1>
            </header>
        </div>
    </>
}

export default RF004;