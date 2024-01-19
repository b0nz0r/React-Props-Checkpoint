import React from "react";
import PlayersList from "./PlayersList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <main style={{}}>
        <div className="App">
          {/* title */}
          <h1 style={{ color: "#fff", marginTop: "15px", fontSize: "50px" }}>
            FIFA Player Cards
          </h1>
          {/* players cards */}
          <PlayersList />
        </div>
      </main>
    </>
  );
}

export default App;
