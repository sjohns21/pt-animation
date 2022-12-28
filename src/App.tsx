import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Dot loc={teachLoc}/>
      <Beam from={teachLoc} to={s0Loc}/>
      <Dot loc={s0Loc}/>
    </div>
  );
}
const teachLoc: Loc = [0, 0]
const s0Loc: Loc = [0, 100]
function Dot({loc}: {loc: Loc}) {
  return <div style={{left: loc[0], top: loc[1]}} className={'dot'}/>
}
type Loc = [number, number]
function Beam({from, to}: {from: Loc, to: Loc}) {
  return <div style={{"--beamStart": from[1] + "px", "--beamEnd": to[1] + "px"} as any} className={'beam'}/>
}

export default App;
