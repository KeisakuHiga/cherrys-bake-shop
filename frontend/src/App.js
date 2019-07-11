import React from "react";
import Routes from './Routes'
import "./App.css";

// const axios = require('axios')

class App extends React.Component {
  state = {}

  

  componentDidMount = async () => {
    // const url = process.env.REACT_APP_API_URL
    // const response = await axios.get(`${url}/hello`);
    // console.log(response)
    // // const data = await response.json();
    // this.setState({
    //   hello: response.data
    // })
  }

  render() {
    return(
      <Routes />
    ) 
  }
}

export default App;
