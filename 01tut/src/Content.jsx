import React from "react";

const Content = () => {
  const handleNameChange = () => {
    const names = ["John", "Jane", "Jim", "Ahmad"];
    const int = Math.floor(Math.random() * names.length);
    return names[int];
  };

  const handleClick = () => {
    console.log("====================================");
    console.log("You clicked");
    console.log("====================================");
  };

  return (
    <main>
      <p>Hello {handleNameChange()}!</p>
      <button onClick={handleClick}>Click It</button>
    </main>
  );
};

export default Content;
