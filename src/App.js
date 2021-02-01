// import React from 'react';
import './App.css';

function Helloworld (props) {
  return (
    <div id="hello"> {props.myText}</div>
  )
}


function App() {
  return (
    <div>
      <h1> Hi, this is my first component: <Helloworld myText ="Hello my World"/></h1>
      <h2><Helloworld myText ="Hi everybody"/></h2>
      <h3><Helloworld myText="Howdy boy"/></h3>
    </div>
  );
}

export default App;
