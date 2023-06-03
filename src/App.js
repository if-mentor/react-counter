import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      Count: {count}
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default App;
