import React, { useRef } from "react";

function App() {
  const divRef = useRef(null);

  const scrollToDiv = () => {
     if (divRef.current) {
       divRef.current.scrollTop = 300;
     }
  };

  return (
    <div>
      <button onClick={scrollToDiv}>Scroll to Div</button>
      <div ref={divRef} style={{ height: "200px", overflow: "scroll" }}>
        {/* Content */}
      </div>
    </div>
  );
}

export default App;

