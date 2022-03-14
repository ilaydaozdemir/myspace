import React, { useState } from "react";

const Content = () => {
  const [name, setName] = useState("ilayda");
  //use Arrow function
  //use random function
  const handleNameChange = () => {
    const names = ["orange", "apple", "pink"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  };
  const handleClick = () => {
    console.log("clicked");
  };
  //click event with props
  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  };
  //click event more example(SyntheticBaseEvent)
  const handleClick3 = (e) => {
    console.log(e);
  };
  return (
    <main>
      <p>Hello {name}</p>
      <button onClick={handleNameChange}>Name Change</button>
      <button onClick={() => handleClick2("ilayda")}>Click</button>
      <button onClick={(e) => handleClick3(e)}>CLICK</button>
    </main>
  );
};

export default Content;
