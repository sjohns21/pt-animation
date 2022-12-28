import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Dot/>

      <div style={{display: 'flex', marginTop: 100,}}>
        <div className={'dot'}/>
        <div className={'dot'}/>
        <div className={'dot'}/>
        <div className={'dot'}/>
      </div>
    </div>
  );
}
function Dot() {
  return <div className={'dot'}/>
}
function Beam() {
  return <div style={{position: "absolute"}}/>
}
export default App;
