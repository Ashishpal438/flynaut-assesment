// Function Component
import React from "react";

interface props {
  name: string;
}

const FunctionComponent: React.FC<props> = ({ name }) => {
  return <h1>Hello, my name is {name}!</h1>;
};

export default FunctionComponent;
