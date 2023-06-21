// Class Component
import React from "react";

interface ClassComponentProps {
  name: string;
}

class ClassComponent extends React.Component<ClassComponentProps> {
  render() {
    return <>Hello, my name is {this.props.name}!</>;
  }
}

export default ClassComponent;
