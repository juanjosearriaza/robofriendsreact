import React from "react";
import Counter from "./Counter";

class Header extends React.Component {

shouldComponentUpdate(nextProps, nextState) {
return false;
}

    
render(){
    console.log("Header");
  return (
    <div>
    <h1>Robofriends</h1>
    <Counter color={"red"}/>
    </div>

  );
}};

export default Header;
