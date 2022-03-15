//Create functional component(rafce)

import React from "react";

const Header = ({title}) => {
  //add style
  const headerStyle = {
    backgroundColor: "royalblue",
    color: "#fff",
  };
  return (
    <header style={headerStyle}>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
