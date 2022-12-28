import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div style={{ position: "relative" }}>
        <Dot loc={teachLoc} />
        {studentLocs.map((sl, i) => (
          <>
            <Beam from={teachLoc} to={sl} delay={i} variant={"before"} />
            <Dot loc={sl} />
          </>
        ))}
      </div>
      <div style={{ position: "relative", top: 200 }}>
        <Dot loc={teachLoc} />
        {studentLocs.map((sl, i) => {
          const sal = sl;
          const sbl: Loc = [sal[0], sal[1] + 100];
          return (
            <>
              <Dot loc={sal} />
              <Beam from={sal} to={sbl} delay={0} variant={"after"} />
              <Dot loc={sbl} />
            </>
          );
        })}
      </div>
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
function Beam({
  from,
  to,
  delay,
  variant,
}: {
  from: Loc;
  to: Loc;
  delay: number;
  variant: "before" | "after";
}) {
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
      className={`beam ${variant}`}
    />
  );
}

export default App;
