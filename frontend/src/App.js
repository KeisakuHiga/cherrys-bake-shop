import React from "react";
import "./App.css";
const axios = require('axios')

class App extends React.Component {
  state = {}

  componentDidMount = async () => {
    const url = process.env.REACT_APP_API_URL
    const response = await axios.get(`${url}/hello`);
    console.log(response)
    // const data = await response.json();
    this.setState({
      hello: response.data
    })
  }

  render() {
    
    const { hello } = this.state
    console.log(hello)
    if(!hello) {
      return null
    }
    return(
      <h1>{hello.hello}</h1>
    ) 
  }
}

export default App;
