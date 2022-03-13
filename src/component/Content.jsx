import React from "react";

const Content = () => {
  //use Arrow function
  //use random function
  const handleNameChange = () => {
    const names = ["orange", "apple", "pink"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };
  return (
    <main>
      <p>Hello {handleNameChange()}</p>
    </main>
  );
};

export default Content;
