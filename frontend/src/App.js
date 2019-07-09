import React from "react";
import "./App.css";

class App extends React.Component {
  async componentDidMount() {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/HELLO`);
    const data = await response.json();
    console.log(data);
  }
  render() {
    return <h1>Hello World!</h1>;
  }
}

export default App;
