import React from "react";
import "./styles.css";
import { useState } from "react";
/* Visit www.reactchallenges.live */

/* Instructions: 
   Create a Progress Bar that
    should fill based on the input 
    percentage value
*/

export default function App() {
  const [val, setVal] = useState(10);
  const setValuer = (e) => setVal(e.target.value);

  return (
    <>
      <div className="App">
        <h1>Progress bar</h1>

        {/* <ProgressBar width={val} /> */}
        <form>
          <label htmlFor="html">Input Percentage:</label>
          <input type="number" onChange={setValuer} />
        </form>
      </div>
      <ProgressBar width={val} />
    </>
  );
}

function ProgressBar(props) {
  console.log(props);
  return (
    <>
      {props.width >= 0 && props.width <= 100 ? (
        <div className="container">
          <div
            className="innerContainer"
            style={{ width: "" + props.width + "%" }}
          >
            {props.width}
          </div>
        </div>
      ) : (
        <p>Plesse enter a valid percentage</p>
      )}
    </>
  );
}
