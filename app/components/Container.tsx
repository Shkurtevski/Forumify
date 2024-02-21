import React from "react";

interface Container {
  children: React.ReactNode;
}

const Container: React.FC<Container> = ({ children }) => {
  return <main className="container">{children}</main>;
};

export default Container;
