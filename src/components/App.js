import React from "react";

const App = () => {
  const relatives = ["Relative 1", "Relative 2", "Relative 3", "Relative 4"];

  return (
    <div id="main">
      {/* Do not remove the main div */}
      <h3>Names of Relative Panning to Visit:</h3>
      <ol key="relativeList" id="relativeList">
        {relatives.map((relative, index) => (
          <li key={`relativeListItem${index+1}`} id="relativeListItem1">{relative }</li>
        ))}
      </ol>
    </div>
  );
};

export default App;