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
      <p>Hello {handleNameChange()}</p>
      <button onClick={handleClick}>START</button>
      <button onClick={() => handleClick2("ilayda")}>Click</button>
      <button onClick={(e) => handleClick3(e)}>CLICK</button>
    </main>
  );
};

export default Content;
