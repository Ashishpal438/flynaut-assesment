// 2) use hooks to get update regarding any state value into function component.

import React, { useState, useEffect } from "react";

const StateComponent: React.FC = () => {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <p>Value: {value}</p>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};

export default StateComponent;
