// ParentComponent.tsx
import React from "react";

const Parent: React.FC = () => {
  const name = "Ashish";
  return <Child name={name} />;
};

export default Parent;



// Child.tsx
interface ChildProps {
  message: string;
}

export const Child: React.FC<ChildProps> = ({ name }) => {
  return <p>My name is :{name}</p>;
};
