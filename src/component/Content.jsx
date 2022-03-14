import React from "react";

const Content = () => {
  //use Arrow function
  //use random function
  const handleNameChange = () => {
    const names = ["orange", "apple", "pink"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <main>
      <p>Hello {handleNameChange()}</p>
      <button onClick={handleClick}>START</button>
    </main>
  );
};

export default Content;
