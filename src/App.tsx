import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Dot loc={teachLoc} />
      {studentLocs.map((sl, i) => (
        <>
          <Beam from={teachLoc} to={sl} delay={i} />
          <Dot loc={sl} />
        </>
      ))}
    </div>
  );
}
const teachLoc: Loc = [0, 0];
const studentLocs: Loc[] = Array(4)
  .fill(null)
  .map((v, i) => [i * 100, 100]);
function Dot({ loc }: { loc: Loc }) {
  return <div style={{ left: loc[0], top: loc[1] }} className={"dot"} />;
}
type Loc = [number, number];
function Beam({ from, to, delay }: { from: Loc; to: Loc; delay: number }) {
  return (
    <div
      style={
        {
          "--beamStartLeft": from[0] + "px",
          "--beamStartTop": from[1] + "px",
          "--beamEndLeft": to[0] + "px",
          "--beamEndTop": to[1] + "px",
          "--beamDelay": delay + "s",
        } as any
      }
      className={"beam"}
    />
  );
}

export default App;
