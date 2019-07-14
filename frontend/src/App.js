import React from "react";
import Routes from "./Routes";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const axios = require('axios')

class App extends React.Component {
  state = {};

  getAllQuotes = async () => {
    // const url = 'https://cherrysbakeshopandcafe.khiga2943.now.sh/quote/getAllQuotes'
    const url = 'http://localhost:5000/quote/getAllQuotes'
    const response = await axios.get(url)
    const data = response.data
    this.setState({
      allQuotes: data
    })
  }

  componentDidMount = async () => {
    this.getAllQuotes()
  }

  render() {
    return (
      <div>
        <Navbar />
        <Routes allQuotes={this.state} />
        <Footer />
      </div>
    );
  }
}

export default App;
