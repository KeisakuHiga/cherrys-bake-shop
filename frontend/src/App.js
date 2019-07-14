import React from "react";
import Routes from "./Routes";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
const axios = require('axios')

class App extends React.Component {
  state = {};

  componentDidMount = () => {
    this.getAllQuotes()
  }

  getAllQuotes = async () => {
    const url = `${process.env.REACT_APP_API_URL}/quote/getAllQuotes`
    const response = await axios.get(url)
    const data = await response.data
    this.setState({
      allQuotes: data
    })
  }

  dateFormat = (date) => {
    date = new Date(date)
    const month = date.toLocaleString("en-us", { month: "short" })
    const day = date.getDate()
    const year = date.getFullYear()
    const newDate = month+'. '+day+', ' + year
    return newDate
  }

  render() {
    const { allQuotes } = this.state
    if(!allQuotes) {
      return null
    } else {
      return (
        <div>
          <Navbar />
          <Routes allQuotes={allQuotes} dateFormat={this.dateFormat} />
          <Footer />
        </div>
      )
    }
  }
}

export default App;
