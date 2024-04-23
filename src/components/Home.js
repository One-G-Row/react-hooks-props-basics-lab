import React from "react";

function Home(props) {
  const headStyle = {
    color: props.color,
  };
  
  return (
    <div id="home">
      <h1 style={headStyle}>
        {props.name} is a Web Developer from {props.city}
      </h1>
    </div>
  );
}

export default Home;
