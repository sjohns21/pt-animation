import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Dot/>
      <Beam/>
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
type coord = [number, number]
function Beam({from, to}: {from?: coord, to?: coord}) {
  return <div className={'beam'}/>
}
export default App;
