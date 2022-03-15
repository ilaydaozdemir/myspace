//Create functional component(rafce)

import React from "react";

const Header = (props) => {
  //add style
  const headerStyle = {
    backgroundColor: "royalblue",
    color: "#fff",
  };
  return (
    <header style={headerStyle}>
      <h1>{props.title}</h1>
    </header>
  );
};

export default Header;
