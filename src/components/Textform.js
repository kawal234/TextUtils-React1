import React, { useState } from 'react';



export default function Textform(props) {
  // This is a Event in Javascript
  // and this is also called a Handler in short way
  const handleUpClick = ()=>{
    // console.log("UpperCase was Clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");
  }
  const handleLoClick = ()=>{
    // console.log("UpperCase was Clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success");
  }
  const handleOnChange = (event)=>{
    console.log("UpperCase was Clicked");
    setText(event.target.value);
  }
  const handleCopy = () =>{
    console.log("I am copy");
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copied to Clipboard","success");
  }
  const handleClear = () =>{
    let newText =" ";
    setText(newText);
    props.showAlert("Text is cleared","success");
  }
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Spaces Removed","success");
  }

  const [ text, setText] = useState("");// React hooks State
  // text = "New Text";// This is the wrong way to change the state
  // setText("Enter the text");// this is the correct way to change the state
  return (
  <>
    <div className="container" style ={{color:props.mode==='dark'?'white':'black' }}>
        <h1>{props.heading} </h1>
        <div className="mb-8">
        {/* <label for="mybox" class="form-label">{props.heading}</label> */}
        <textarea className="form-control" value = {text} onChange={handleOnChange} style ={{backgroundColor:props.mode==='grey'?'grey':'white' }} id="mybox" rows="8" my-3></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-3" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-3" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-3" onClick={handleCopy}>Copy text</button>
        <button className="btn btn-primary mx-2 my-3" onClick={handleExtraSpace}>Remove Space</button>
        <button className="btn btn-primary mx-2 my-3" onClick={handleClear}>Clear text</button>
    </div>
    <div className="container1" my-3 style ={{color:props.mode==='dark'?'white':'black' }}>
      <h1>Your Text Summary</h1>
      <p>
        {text.split(" ").length} words and {text.length} characters
        </p>
        <p>
        {0.008 * text.split(" ").length}Minutes read
      </p>
      <h2>Preview of the Upper Text</h2>
      <p>{text.length>0?text:"Enter something to preview here"}</p>
    </div>
    </>
  )
}
