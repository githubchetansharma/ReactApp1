import React, { useState } from 'react';
export default function TextForm(props) {
    const [text, setText] = useState('Enter your text here please..........✌️');
    let HandleupperCasse = () => {
        console.log("Converted  to upperCase");
        let newText = text.toUpperCase();
        setText(newText);
        props.showalert("converted to upper case" , "Success") ;

    }
    let HandleloverCasse = () => {
        console.log("Converted  to lo");
        let newText = text.toLowerCase();
        setText(newText);
        props.showalert("converted to lower case" , "Success") ;
    }
    let handleonchange = (event) => {
        console.log("on change");
        setText(event.target.value);


    }
    const words = text.split(/\s+/).filter(word => word.length > 0);
    const characters = text.length;

    return (
        <>
            <div className="container">
                <h3 className="my-3">{props.Textheadding}</h3>
                <div className="form-group">
                    <textarea className="form-control" id="myBox" onChange={handleonchange} value={text} rows="8"></textarea>
                </div>
                <button className="my-3  btn btn-primary" onClick={HandleupperCasse}>convert to uppercase</button>
                <button className="my-3 mx-2 btn btn-primary" onClick={HandleloverCasse}>convert to lovercase</button>
            </div>
            <div className="container my-3">
                <h1>your text summery </h1>
                <p>{words.length} words and {characters} charecters</p>
                <p>{0.08*(words.length)} minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>

            </div>
        </>
    )
}
